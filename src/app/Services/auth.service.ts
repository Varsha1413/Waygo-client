import { trackPromise } from 'react-promise-tracker';
import {
  ILoginPayload,
  ILoginResponse,
  IRegisterFormData,
  IRegisterPayload,
} from '../Models/auth.model';
import { ICommonApiResponse } from '../Models/common.model';
import { BackendRoutes } from '../utils/constants';
import BaseService from './base.service';

export const loginUser = async (
  payload: ILoginPayload
): Promise<ICommonApiResponse<ILoginResponse>> => {
  try {
    const response = await trackPromise(
      BaseService.post(BackendRoutes.Auth.Login, payload)
    );
    const res = response.data;
    return Promise.resolve(res);
  } catch (error: any) {
    return Promise.reject({
      statusCode: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
      error: error.response?.data?.error || error.response?.data || error,
      data: null as any,
    });
  }
};
export const RegisterUser = async (payload: IRegisterPayload) => {
  try {
    const response = await trackPromise(
      BaseService.post(BackendRoutes.Auth.Register, payload)
    );
    const res = response.data;
    return Promise.resolve(res);
  } catch (error: any) {
    return Promise.reject({
      statusCode: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
      error: error.response?.data?.error || error.response?.data || error,
      data: null as any,
    });
  }
};
export const ForgotPasswordService = async (payload: { email: string }) => {
  try {
    const response = await trackPromise(
      BaseService.post(BackendRoutes.Auth.ForgotPassword, payload)
    );
    const res = response.data;
    return Promise.resolve(res);
  } catch (error: any) {
    return Promise.reject({
      statusCode: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
      error: error.response?.data?.error || error.response?.data || error,
      data: null as any,
    });
  }
};
export const OtpService = async (payload: number, token: string) => {
  try {
    const response = await trackPromise(
      BaseService.post(BackendRoutes.Auth.Otp, { otp: payload, token })
    );
    const res = response.data;
    return Promise.resolve(res);
  } catch (error: any) {
    return Promise.reject({
      statusCode: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
      error: error.response?.data?.error || error.response?.data || error,
      data: null as any,
    });
  }
};
export const ResetPasswordService = async (
  password: string,
  token: string
) => {
  try {
    const response = await trackPromise(
      BaseService.post(BackendRoutes.Auth.ResetPassword, { password, token })
    );
    const res = response.data;
    return Promise.resolve(res);
  } catch (error: any) {
    return Promise.reject({
      statusCode: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
      error: error.response?.data?.error || error.response?.data || error,
      data: null as any,
    });
  }
};
