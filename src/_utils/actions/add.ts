import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { daysCount } from "@/_utils/commonFunction";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SnackbarMessage, OptionsObject } from "notistack";

const cookie = new Cookies();

interface ActionParams<T> {
  url: string; // The endpoint to send the POST request to (relative to `BASE_URL`).
  data?: FormData | string; // Optional data to send with the POST request.
  actions?: { resetForm: (values: Record<string, unknown>) => void }; // Optional actions (e.g., reset the form).
  setDisabled?: (disabled: boolean) => void; // Function to control a disabled state (e.g., for buttons).
  setLoader?: (loading: boolean) => void; // Function to control a loading state (e.g., for a spinner).
  closeModal?: (loading: boolean) => void; // Function to close a modal if applicable.
  router?: AppRouterInstance; // Next.js router instance for navigation.
  redirectTo?: string; // Path to redirect to after a successful POST request.
  isCallGetAPI?: boolean; // Whether to make an additional GET request after the POST request.
  getAPIEndpoint?: string; // The endpoint for the optional GET request.
  setState?: React.Dispatch<React.SetStateAction<T>>; // Function to update state with the GET request's data.
  showMessage?: boolean; // Whether to display success/error messages via toast notifications.
  enqueueSnackbar?: (message: SnackbarMessage, options?: OptionsObject) => void;
}

/**
 * Handles a POST request to the server with additional features such as token management,
 * state updates, navigation, and optional GET API calls.
 *
 * @template T - The expected type of the data returned by the optional GET API call.
 * @param {ActionParams<T>} params - Configuration parameters for the POST action.
 * @param {string} params.url - The endpoint to send the POST request to (relative to `BASE_URL`).
 * @param {FormData} [params.data] - The form data to be sent with the POST request.
 * @param {{ resetForm: (values: Record<string, unknown>) => void }} [params.actions] - Actions such as resetting a form.
 * @param {(disabled: boolean) => void} [params.setDisabled] - Function to control a disabled state (e.g., for a button).
 * @param {(loading: boolean) => void} [params.setLoader] - Function to control a loading state (e.g., for a spinner).
 * @param {(loading: boolean) => void} [params.closeModal] - Function to close a modal if applicable.
 * @param {AppRouterInstance} [params.router] - Next.js router instance for navigation.
 * @param {string} [params.redirectTo] - The path to redirect to after a successful POST request.
 * @param {boolean} [params.isCallGetAPI=false] - Whether to make an additional GET request after the POST request.
 * @param {string} [params.getAPIEndpoint] - The endpoint for the optional GET request.
 * @param {React.Dispatch<React.SetStateAction<T>>} [params.setState] - Function to update state with the GET request's data.
 * @param {boolean} [params.showMessage=true] - Whether to display success/error messages via toast notifications.
 *
 * @throws {Error} If the POST request fails or the GET API call fails (logs an error message via toast).
 *
 * @example
 * postHandleAction({
 *   url: "/api/resource",
 *   data: new FormData(),
 *   isCallGetAPI: true,
 *   getAPIEndpoint: "/api/resource",
 *   setState: setResourceData,
 *   router: router,
 *   redirectTo: "/dashboard",
 * });
 */
async function postHandleAction<T>({
  url,
  data,
  actions,
  setDisabled,
  setLoader,
  closeModal,
  router,
  redirectTo,
  isCallGetAPI = false,
  getAPIEndpoint,
  setState,
  showMessage = true,
  enqueueSnackbar,
}: ActionParams<T>): Promise<void> {
  // Disable buttons and show loader during the operation
  setDisabled?.(true);
  setLoader?.(true);

  try {
    // Send the POST request to the server
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
      data,
      {
        headers: {
          Accept: "application/json",
          Authorization: cookie.get("user_token") || "",
          "Accept-Language": cookie.get("NEXT_LOCALE") || "en",
          "Content-Type": "application/json",
        },
      }
    );

    // If the response is successful
    if (res.data?.status) {
      // Handle token updates if present in the response
      if (res.data?.data.access_token) {
        cookie.set("user_token", `${res.data?.data?.access_token}`, {
          path: "/",
          httpOnly: false,
          secure: process.env.NODE_ENV === "production",
          expires: daysCount(30),
        });
        cookie.set(
          "user_info",
          `${JSON.stringify(res.data?.data?.user_data)}`,
          {
            path: "/",
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            expires: daysCount(30),
          }
        );
        cookie.remove("forgot_email", {
          path: "/",
          expires: new Date(0),
        });
        if (res.data?.data?.user_data?.role == 1) {
          router?.push("/teacher/dashboard");
        }
        if (res.data?.data?.user_data?.role == 2) {
          router?.push("/student/dashboard");
        }
      }
      if (url == "forget-password") {
        if (data instanceof FormData) {
          cookie.set("forgot_email", data.get("email"), {
            path: "/",
            httpOnly: false,
            expires: daysCount(1),
          });
        }
      }
      if (url == "verify-account") {
        const get_user_info = cookie.get("user_info");
        get_user_info.is_verified = true;
        cookie.set("user_info", JSON.stringify(get_user_info), {
          path: "/",
          httpOnly: false,
          secure: process.env.NODE_ENV === "production",
          expires: daysCount(30),
        });
        if (get_user_info.role == 1) {
          router?.push("/teacher/dashboard");
        }
        if (get_user_info.role == 2) {
          router?.push("/student/dashboard");
        }
      }
      if (isCallGetAPI && getAPIEndpoint) {
        // If an additional GET API call is required
        try {
          const getRes = await axios.get<T>(
            `${process.env.NEXT_PUBLIC_BASE_URL}${getAPIEndpoint}`,
            {
              headers: {
                Accept: "application/json",
                Authorization: cookie.get("user_token") || "",
              },
            }
          );
          // Update state with the GET API response
          setState?.(getRes.data);
        } catch (getErr) {
          // Handle errors during the GET API call
          if (axios.isAxiosError(getErr)) {
            enqueueSnackbar?.(
              getErr.response?.data?.message || getErr.message,
              {
                variant: "error",
              }
            );
          } else {
            enqueueSnackbar?.(
              "Failed to fetch additional data from the GET API",
              {
                variant: "error",
              }
            );
          }
        }
      }

      // Close the modal if required
      if (closeModal) {
        closeModal(false);
      }

      // Redirect to a specified route if provided
      if (router && redirectTo) {
        router?.push(redirectTo);
      }

      // Show a success message if enabled
      if (showMessage) {
        enqueueSnackbar?.(res.data.message, {
          variant: "success",
        });
      }

      // Reset the form using provided actions
      actions?.resetForm({});
    } else {
      // Handle server error messages
      if (showMessage) {
        enqueueSnackbar?.(res.data.message || "An error occurred", {
          variant: "error",
        });
      }
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      if (showMessage) {
        enqueueSnackbar?.(err.response?.data?.message || err.message, {
          variant: "error",
        });
      }
    } else {
      if (showMessage) {
        enqueueSnackbar?.("An unexpected error occurred", {
          variant: "error",
        });
      }
    }
  } finally {
    // Re-enable buttons and hide loader after the operation
    setDisabled?.(false);
    setLoader?.(false);
  }
}

export { postHandleAction };

export async function sendMessageHandleAction<T>({
  url,
  data,
  actions,
  setDisabled,
  setLoader,
  router,
  redirectTo,
  enqueueSnackbar,
}: ActionParams<T>): Promise<void> {
  // Disable buttons and show loader during the operation
  setDisabled?.(true);
  setLoader?.(true);

  try {
    // Send the POST request to the server
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
      data,
      {
        headers: {
          Accept: "application/json",
          Authorization: cookie.get("user_token") || "",
          "Accept-Language": cookie.get("NEXT_LOCALE") || "en",
          "Content-Type": "application/json",
        },
      }
    );

    // If the response is successful
    if (res.data?.status) {
      // Redirect to a specified route if provided
      if (router && redirectTo) {
        router?.push(redirectTo);
      }

      enqueueSnackbar?.(res.data.message, {
        variant: "success",
      });

      // Reset the form using provided actions
      actions?.resetForm({});
    } else {
      enqueueSnackbar?.(res.data.message || "An error occurred", {
        variant: "error",
      });
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      enqueueSnackbar?.(err.response?.data?.message || err.message, {
        variant: "error",
      });
    } else {
      enqueueSnackbar?.("An unexpected error occurred", {
        variant: "error",
      });
    }
  } finally {
    // Re-enable buttons and hide loader after the operation
    setDisabled?.(false);
    setLoader?.(false);
  }
}
