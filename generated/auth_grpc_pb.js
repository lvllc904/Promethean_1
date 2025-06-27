// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dac_auth_ActiveSessionsResponse(arg) {
  if (!(arg instanceof auth_pb.ActiveSessionsResponse)) {
    throw new Error('Expected argument of type dac.auth.ActiveSessionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_ActiveSessionsResponse(buffer_arg) {
  return auth_pb.ActiveSessionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_AssignRoleRequest(arg) {
  if (!(arg instanceof auth_pb.AssignRoleRequest)) {
    throw new Error('Expected argument of type dac.auth.AssignRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_AssignRoleRequest(buffer_arg) {
  return auth_pb.AssignRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_AuthResponse(arg) {
  if (!(arg instanceof auth_pb.AuthResponse)) {
    throw new Error('Expected argument of type dac.auth.AuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_AuthResponse(buffer_arg) {
  return auth_pb.AuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_BackupCodesRequest(arg) {
  if (!(arg instanceof auth_pb.BackupCodesRequest)) {
    throw new Error('Expected argument of type dac.auth.BackupCodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_BackupCodesRequest(buffer_arg) {
  return auth_pb.BackupCodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_BackupCodesResponse(arg) {
  if (!(arg instanceof auth_pb.BackupCodesResponse)) {
    throw new Error('Expected argument of type dac.auth.BackupCodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_BackupCodesResponse(buffer_arg) {
  return auth_pb.BackupCodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_ChangePasswordRequest(arg) {
  if (!(arg instanceof auth_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type dac.auth.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_ChangePasswordRequest(buffer_arg) {
  return auth_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_DeleteAccountRequest(arg) {
  if (!(arg instanceof auth_pb.DeleteAccountRequest)) {
    throw new Error('Expected argument of type dac.auth.DeleteAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_DeleteAccountRequest(buffer_arg) {
  return auth_pb.DeleteAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_DisableMFARequest(arg) {
  if (!(arg instanceof auth_pb.DisableMFARequest)) {
    throw new Error('Expected argument of type dac.auth.DisableMFARequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_DisableMFARequest(buffer_arg) {
  return auth_pb.DisableMFARequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_GetSessionsRequest(arg) {
  if (!(arg instanceof auth_pb.GetSessionsRequest)) {
    throw new Error('Expected argument of type dac.auth.GetSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_GetSessionsRequest(buffer_arg) {
  return auth_pb.GetSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_GetUserRequest(arg) {
  if (!(arg instanceof auth_pb.GetUserRequest)) {
    throw new Error('Expected argument of type dac.auth.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_GetUserRequest(buffer_arg) {
  return auth_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_LinkWalletRequest(arg) {
  if (!(arg instanceof auth_pb.LinkWalletRequest)) {
    throw new Error('Expected argument of type dac.auth.LinkWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_LinkWalletRequest(buffer_arg) {
  return auth_pb.LinkWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_LoginRequest(arg) {
  if (!(arg instanceof auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type dac.auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_LoginRequest(buffer_arg) {
  return auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_LogoutRequest(arg) {
  if (!(arg instanceof auth_pb.LogoutRequest)) {
    throw new Error('Expected argument of type dac.auth.LogoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_LogoutRequest(buffer_arg) {
  return auth_pb.LogoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_MFASetupRequest(arg) {
  if (!(arg instanceof auth_pb.MFASetupRequest)) {
    throw new Error('Expected argument of type dac.auth.MFASetupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_MFASetupRequest(buffer_arg) {
  return auth_pb.MFASetupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_MFASetupResponse(arg) {
  if (!(arg instanceof auth_pb.MFASetupResponse)) {
    throw new Error('Expected argument of type dac.auth.MFASetupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_MFASetupResponse(buffer_arg) {
  return auth_pb.MFASetupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_MFAVerifyRequest(arg) {
  if (!(arg instanceof auth_pb.MFAVerifyRequest)) {
    throw new Error('Expected argument of type dac.auth.MFAVerifyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_MFAVerifyRequest(buffer_arg) {
  return auth_pb.MFAVerifyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_MFAVerifyResponse(arg) {
  if (!(arg instanceof auth_pb.MFAVerifyResponse)) {
    throw new Error('Expected argument of type dac.auth.MFAVerifyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_MFAVerifyResponse(buffer_arg) {
  return auth_pb.MFAVerifyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_PermissionRequest(arg) {
  if (!(arg instanceof auth_pb.PermissionRequest)) {
    throw new Error('Expected argument of type dac.auth.PermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_PermissionRequest(buffer_arg) {
  return auth_pb.PermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_PermissionResponse(arg) {
  if (!(arg instanceof auth_pb.PermissionResponse)) {
    throw new Error('Expected argument of type dac.auth.PermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_PermissionResponse(buffer_arg) {
  return auth_pb.PermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_RefreshTokenRequest(arg) {
  if (!(arg instanceof auth_pb.RefreshTokenRequest)) {
    throw new Error('Expected argument of type dac.auth.RefreshTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_RefreshTokenRequest(buffer_arg) {
  return auth_pb.RefreshTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_RegisterRequest(arg) {
  if (!(arg instanceof auth_pb.RegisterRequest)) {
    throw new Error('Expected argument of type dac.auth.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_RegisterRequest(buffer_arg) {
  return auth_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_RevokeAllSessionsRequest(arg) {
  if (!(arg instanceof auth_pb.RevokeAllSessionsRequest)) {
    throw new Error('Expected argument of type dac.auth.RevokeAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_RevokeAllSessionsRequest(buffer_arg) {
  return auth_pb.RevokeAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_RevokeRoleRequest(arg) {
  if (!(arg instanceof auth_pb.RevokeRoleRequest)) {
    throw new Error('Expected argument of type dac.auth.RevokeRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_RevokeRoleRequest(buffer_arg) {
  return auth_pb.RevokeRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_RevokeSessionRequest(arg) {
  if (!(arg instanceof auth_pb.RevokeSessionRequest)) {
    throw new Error('Expected argument of type dac.auth.RevokeSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_RevokeSessionRequest(buffer_arg) {
  return auth_pb.RevokeSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_SocialAuthRequest(arg) {
  if (!(arg instanceof auth_pb.SocialAuthRequest)) {
    throw new Error('Expected argument of type dac.auth.SocialAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_SocialAuthRequest(buffer_arg) {
  return auth_pb.SocialAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_SocialAuthResponse(arg) {
  if (!(arg instanceof auth_pb.SocialAuthResponse)) {
    throw new Error('Expected argument of type dac.auth.SocialAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_SocialAuthResponse(buffer_arg) {
  return auth_pb.SocialAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_SocialProfile(arg) {
  if (!(arg instanceof auth_pb.SocialProfile)) {
    throw new Error('Expected argument of type dac.auth.SocialProfile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_SocialProfile(buffer_arg) {
  return auth_pb.SocialProfile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_SocialProfileRequest(arg) {
  if (!(arg instanceof auth_pb.SocialProfileRequest)) {
    throw new Error('Expected argument of type dac.auth.SocialProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_SocialProfileRequest(buffer_arg) {
  return auth_pb.SocialProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_SocialProfileResponse(arg) {
  if (!(arg instanceof auth_pb.SocialProfileResponse)) {
    throw new Error('Expected argument of type dac.auth.SocialProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_SocialProfileResponse(buffer_arg) {
  return auth_pb.SocialProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_TokenResponse(arg) {
  if (!(arg instanceof auth_pb.TokenResponse)) {
    throw new Error('Expected argument of type dac.auth.TokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_TokenResponse(buffer_arg) {
  return auth_pb.TokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_UnlinkWalletRequest(arg) {
  if (!(arg instanceof auth_pb.UnlinkWalletRequest)) {
    throw new Error('Expected argument of type dac.auth.UnlinkWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_UnlinkWalletRequest(buffer_arg) {
  return auth_pb.UnlinkWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_UpdateProfileRequest(arg) {
  if (!(arg instanceof auth_pb.UpdateProfileRequest)) {
    throw new Error('Expected argument of type dac.auth.UpdateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_UpdateProfileRequest(buffer_arg) {
  return auth_pb.UpdateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_UserProfile(arg) {
  if (!(arg instanceof auth_pb.UserProfile)) {
    throw new Error('Expected argument of type dac.auth.UserProfile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_UserProfile(buffer_arg) {
  return auth_pb.UserProfile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_UserRolesRequest(arg) {
  if (!(arg instanceof auth_pb.UserRolesRequest)) {
    throw new Error('Expected argument of type dac.auth.UserRolesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_UserRolesRequest(buffer_arg) {
  return auth_pb.UserRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_UserRolesResponse(arg) {
  if (!(arg instanceof auth_pb.UserRolesResponse)) {
    throw new Error('Expected argument of type dac.auth.UserRolesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_UserRolesResponse(buffer_arg) {
  return auth_pb.UserRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_VerifyTokenRequest(arg) {
  if (!(arg instanceof auth_pb.VerifyTokenRequest)) {
    throw new Error('Expected argument of type dac.auth.VerifyTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_VerifyTokenRequest(buffer_arg) {
  return auth_pb.VerifyTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_VerifyTokenResponse(arg) {
  if (!(arg instanceof auth_pb.VerifyTokenResponse)) {
    throw new Error('Expected argument of type dac.auth.VerifyTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_VerifyTokenResponse(buffer_arg) {
  return auth_pb.VerifyTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_WalletInfo(arg) {
  if (!(arg instanceof auth_pb.WalletInfo)) {
    throw new Error('Expected argument of type dac.auth.WalletInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_WalletInfo(buffer_arg) {
  return auth_pb.WalletInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_WalletInfoRequest(arg) {
  if (!(arg instanceof auth_pb.WalletInfoRequest)) {
    throw new Error('Expected argument of type dac.auth.WalletInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_WalletInfoRequest(buffer_arg) {
  return auth_pb.WalletInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_WalletLinkResponse(arg) {
  if (!(arg instanceof auth_pb.WalletLinkResponse)) {
    throw new Error('Expected argument of type dac.auth.WalletLinkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_WalletLinkResponse(buffer_arg) {
  return auth_pb.WalletLinkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_WalletVerificationRequest(arg) {
  if (!(arg instanceof auth_pb.WalletVerificationRequest)) {
    throw new Error('Expected argument of type dac.auth.WalletVerificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_WalletVerificationRequest(buffer_arg) {
  return auth_pb.WalletVerificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_auth_WalletVerificationResponse(arg) {
  if (!(arg instanceof auth_pb.WalletVerificationResponse)) {
    throw new Error('Expected argument of type dac.auth.WalletVerificationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_auth_WalletVerificationResponse(buffer_arg) {
  return auth_pb.WalletVerificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Authentication and Authorization Service
var AuthServiceService = exports.AuthServiceService = {
  // Authentication Operations
register: {
    path: '/dac.auth.AuthService/Register',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RegisterRequest,
    responseType: auth_pb.AuthResponse,
    requestSerialize: serialize_dac_auth_RegisterRequest,
    requestDeserialize: deserialize_dac_auth_RegisterRequest,
    responseSerialize: serialize_dac_auth_AuthResponse,
    responseDeserialize: deserialize_dac_auth_AuthResponse,
  },
  login: {
    path: '/dac.auth.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginRequest,
    responseType: auth_pb.AuthResponse,
    requestSerialize: serialize_dac_auth_LoginRequest,
    requestDeserialize: deserialize_dac_auth_LoginRequest,
    responseSerialize: serialize_dac_auth_AuthResponse,
    responseDeserialize: deserialize_dac_auth_AuthResponse,
  },
  logout: {
    path: '/dac.auth.AuthService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LogoutRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_auth_LogoutRequest,
    requestDeserialize: deserialize_dac_auth_LogoutRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  refreshToken: {
    path: '/dac.auth.AuthService/RefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RefreshTokenRequest,
    responseType: auth_pb.TokenResponse,
    requestSerialize: serialize_dac_auth_RefreshTokenRequest,
    requestDeserialize: deserialize_dac_auth_RefreshTokenRequest,
    responseSerialize: serialize_dac_auth_TokenResponse,
    responseDeserialize: deserialize_dac_auth_TokenResponse,
  },
  verifyToken: {
    path: '/dac.auth.AuthService/VerifyToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.VerifyTokenRequest,
    responseType: auth_pb.VerifyTokenResponse,
    requestSerialize: serialize_dac_auth_VerifyTokenRequest,
    requestDeserialize: deserialize_dac_auth_VerifyTokenRequest,
    responseSerialize: serialize_dac_auth_VerifyTokenResponse,
    responseDeserialize: deserialize_dac_auth_VerifyTokenResponse,
  },
  // User Management
getUserProfile: {
    path: '/dac.auth.AuthService/GetUserProfile',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.GetUserRequest,
    responseType: auth_pb.UserProfile,
    requestSerialize: serialize_dac_auth_GetUserRequest,
    requestDeserialize: deserialize_dac_auth_GetUserRequest,
    responseSerialize: serialize_dac_auth_UserProfile,
    responseDeserialize: deserialize_dac_auth_UserProfile,
  },
  updateProfile: {
    path: '/dac.auth.AuthService/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.UpdateProfileRequest,
    responseType: auth_pb.UserProfile,
    requestSerialize: serialize_dac_auth_UpdateProfileRequest,
    requestDeserialize: deserialize_dac_auth_UpdateProfileRequest,
    responseSerialize: serialize_dac_auth_UserProfile,
    responseDeserialize: deserialize_dac_auth_UserProfile,
  },
  changePassword: {
    path: '/dac.auth.AuthService/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ChangePasswordRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_auth_ChangePasswordRequest,
    requestDeserialize: deserialize_dac_auth_ChangePasswordRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteAccount: {
    path: '/dac.auth.AuthService/DeleteAccount',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.DeleteAccountRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_auth_DeleteAccountRequest,
    requestDeserialize: deserialize_dac_auth_DeleteAccountRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Wallet Integration
linkWallet: {
    path: '/dac.auth.AuthService/LinkWallet',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LinkWalletRequest,
    responseType: auth_pb.WalletLinkResponse,
    requestSerialize: serialize_dac_auth_LinkWalletRequest,
    requestDeserialize: deserialize_dac_auth_LinkWalletRequest,
    responseSerialize: serialize_dac_auth_WalletLinkResponse,
    responseDeserialize: deserialize_dac_auth_WalletLinkResponse,
  },
  unlinkWallet: {
    path: '/dac.auth.AuthService/UnlinkWallet',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.UnlinkWalletRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_auth_UnlinkWalletRequest,
    requestDeserialize: deserialize_dac_auth_UnlinkWalletRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  verifyWalletSignature: {
    path: '/dac.auth.AuthService/VerifyWalletSignature',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.WalletVerificationRequest,
    responseType: auth_pb.WalletVerificationResponse,
    requestSerialize: serialize_dac_auth_WalletVerificationRequest,
    requestDeserialize: deserialize_dac_auth_WalletVerificationRequest,
    responseSerialize: serialize_dac_auth_WalletVerificationResponse,
    responseDeserialize: deserialize_dac_auth_WalletVerificationResponse,
  },
  getWalletInfo: {
    path: '/dac.auth.AuthService/GetWalletInfo',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.WalletInfoRequest,
    responseType: auth_pb.WalletInfo,
    requestSerialize: serialize_dac_auth_WalletInfoRequest,
    requestDeserialize: deserialize_dac_auth_WalletInfoRequest,
    responseSerialize: serialize_dac_auth_WalletInfo,
    responseDeserialize: deserialize_dac_auth_WalletInfo,
  },
  // Multi-Factor Authentication
setupMFA: {
    path: '/dac.auth.AuthService/SetupMFA',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.MFASetupRequest,
    responseType: auth_pb.MFASetupResponse,
    requestSerialize: serialize_dac_auth_MFASetupRequest,
    requestDeserialize: deserialize_dac_auth_MFASetupRequest,
    responseSerialize: serialize_dac_auth_MFASetupResponse,
    responseDeserialize: deserialize_dac_auth_MFASetupResponse,
  },
  verifyMFA: {
    path: '/dac.auth.AuthService/VerifyMFA',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.MFAVerifyRequest,
    responseType: auth_pb.MFAVerifyResponse,
    requestSerialize: serialize_dac_auth_MFAVerifyRequest,
    requestDeserialize: deserialize_dac_auth_MFAVerifyRequest,
    responseSerialize: serialize_dac_auth_MFAVerifyResponse,
    responseDeserialize: deserialize_dac_auth_MFAVerifyResponse,
  },
  disableMFA: {
    path: '/dac.auth.AuthService/DisableMFA',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.DisableMFARequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_auth_DisableMFARequest,
    requestDeserialize: deserialize_dac_auth_DisableMFARequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  generateBackupCodes: {
    path: '/dac.auth.AuthService/GenerateBackupCodes',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.BackupCodesRequest,
    responseType: auth_pb.BackupCodesResponse,
    requestSerialize: serialize_dac_auth_BackupCodesRequest,
    requestDeserialize: deserialize_dac_auth_BackupCodesRequest,
    responseSerialize: serialize_dac_auth_BackupCodesResponse,
    responseDeserialize: deserialize_dac_auth_BackupCodesResponse,
  },
  // Session Management
getActiveSessions: {
    path: '/dac.auth.AuthService/GetActiveSessions',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.GetSessionsRequest,
    responseType: auth_pb.ActiveSessionsResponse,
    requestSerialize: serialize_dac_auth_GetSessionsRequest,
    requestDeserialize: deserialize_dac_auth_GetSessionsRequest,
    responseSerialize: serialize_dac_auth_ActiveSessionsResponse,
    responseDeserialize: deserialize_dac_auth_ActiveSessionsResponse,
  },
  revokeSession: {
    path: '/dac.auth.AuthService/RevokeSession',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RevokeSessionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_auth_RevokeSessionRequest,
    requestDeserialize: deserialize_dac_auth_RevokeSessionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  revokeAllSessions: {
    path: '/dac.auth.AuthService/RevokeAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RevokeAllSessionsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_auth_RevokeAllSessionsRequest,
    requestDeserialize: deserialize_dac_auth_RevokeAllSessionsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Social Features Authentication
createSocialProfile: {
    path: '/dac.auth.AuthService/CreateSocialProfile',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SocialProfileRequest,
    responseType: auth_pb.SocialProfileResponse,
    requestSerialize: serialize_dac_auth_SocialProfileRequest,
    requestDeserialize: deserialize_dac_auth_SocialProfileRequest,
    responseSerialize: serialize_dac_auth_SocialProfileResponse,
    responseDeserialize: deserialize_dac_auth_SocialProfileResponse,
  },
  authenticateSocial: {
    path: '/dac.auth.AuthService/AuthenticateSocial',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SocialAuthRequest,
    responseType: auth_pb.SocialAuthResponse,
    requestSerialize: serialize_dac_auth_SocialAuthRequest,
    requestDeserialize: deserialize_dac_auth_SocialAuthRequest,
    responseSerialize: serialize_dac_auth_SocialAuthResponse,
    responseDeserialize: deserialize_dac_auth_SocialAuthResponse,
  },
  getSocialProfile: {
    path: '/dac.auth.AuthService/GetSocialProfile',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SocialProfileRequest,
    responseType: auth_pb.SocialProfile,
    requestSerialize: serialize_dac_auth_SocialProfileRequest,
    requestDeserialize: deserialize_dac_auth_SocialProfileRequest,
    responseSerialize: serialize_dac_auth_SocialProfile,
    responseDeserialize: deserialize_dac_auth_SocialProfile,
  },
  // Authorization and Permissions
checkPermission: {
    path: '/dac.auth.AuthService/CheckPermission',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.PermissionRequest,
    responseType: auth_pb.PermissionResponse,
    requestSerialize: serialize_dac_auth_PermissionRequest,
    requestDeserialize: deserialize_dac_auth_PermissionRequest,
    responseSerialize: serialize_dac_auth_PermissionResponse,
    responseDeserialize: deserialize_dac_auth_PermissionResponse,
  },
  getUserRoles: {
    path: '/dac.auth.AuthService/GetUserRoles',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.UserRolesRequest,
    responseType: auth_pb.UserRolesResponse,
    requestSerialize: serialize_dac_auth_UserRolesRequest,
    requestDeserialize: deserialize_dac_auth_UserRolesRequest,
    responseSerialize: serialize_dac_auth_UserRolesResponse,
    responseDeserialize: deserialize_dac_auth_UserRolesResponse,
  },
  assignRole: {
    path: '/dac.auth.AuthService/AssignRole',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AssignRoleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_auth_AssignRoleRequest,
    requestDeserialize: deserialize_dac_auth_AssignRoleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  revokeRole: {
    path: '/dac.auth.AuthService/RevokeRole',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RevokeRoleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_auth_RevokeRoleRequest,
    requestDeserialize: deserialize_dac_auth_RevokeRoleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService, 'AuthService');
