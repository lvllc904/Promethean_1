// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var social_pb = require('./social_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dac_social_BlockUserRequest(arg) {
  if (!(arg instanceof social_pb.BlockUserRequest)) {
    throw new Error('Expected argument of type dac.social.BlockUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_BlockUserRequest(buffer_arg) {
  return social_pb.BlockUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_CheckFollowRequest(arg) {
  if (!(arg instanceof social_pb.CheckFollowRequest)) {
    throw new Error('Expected argument of type dac.social.CheckFollowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_CheckFollowRequest(buffer_arg) {
  return social_pb.CheckFollowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_CheckFollowResponse(arg) {
  if (!(arg instanceof social_pb.CheckFollowResponse)) {
    throw new Error('Expected argument of type dac.social.CheckFollowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_CheckFollowResponse(buffer_arg) {
  return social_pb.CheckFollowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_CreatePostRequest(arg) {
  if (!(arg instanceof social_pb.CreatePostRequest)) {
    throw new Error('Expected argument of type dac.social.CreatePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_CreatePostRequest(buffer_arg) {
  return social_pb.CreatePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_CreateProfileRequest(arg) {
  if (!(arg instanceof social_pb.CreateProfileRequest)) {
    throw new Error('Expected argument of type dac.social.CreateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_CreateProfileRequest(buffer_arg) {
  return social_pb.CreateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_DeletePostRequest(arg) {
  if (!(arg instanceof social_pb.DeletePostRequest)) {
    throw new Error('Expected argument of type dac.social.DeletePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_DeletePostRequest(buffer_arg) {
  return social_pb.DeletePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_Endorsement(arg) {
  if (!(arg instanceof social_pb.Endorsement)) {
    throw new Error('Expected argument of type dac.social.Endorsement');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_Endorsement(buffer_arg) {
  return social_pb.Endorsement.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_EndorsementRequest(arg) {
  if (!(arg instanceof social_pb.EndorsementRequest)) {
    throw new Error('Expected argument of type dac.social.EndorsementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_EndorsementRequest(buffer_arg) {
  return social_pb.EndorsementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_FollowRequest(arg) {
  if (!(arg instanceof social_pb.FollowRequest)) {
    throw new Error('Expected argument of type dac.social.FollowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_FollowRequest(buffer_arg) {
  return social_pb.FollowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_FollowResponse(arg) {
  if (!(arg instanceof social_pb.FollowResponse)) {
    throw new Error('Expected argument of type dac.social.FollowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_FollowResponse(buffer_arg) {
  return social_pb.FollowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetBlockedUsersRequest(arg) {
  if (!(arg instanceof social_pb.GetBlockedUsersRequest)) {
    throw new Error('Expected argument of type dac.social.GetBlockedUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetBlockedUsersRequest(buffer_arg) {
  return social_pb.GetBlockedUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetBlockedUsersResponse(arg) {
  if (!(arg instanceof social_pb.GetBlockedUsersResponse)) {
    throw new Error('Expected argument of type dac.social.GetBlockedUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetBlockedUsersResponse(buffer_arg) {
  return social_pb.GetBlockedUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetConversationRequest(arg) {
  if (!(arg instanceof social_pb.GetConversationRequest)) {
    throw new Error('Expected argument of type dac.social.GetConversationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetConversationRequest(buffer_arg) {
  return social_pb.GetConversationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetEndorsementsRequest(arg) {
  if (!(arg instanceof social_pb.GetEndorsementsRequest)) {
    throw new Error('Expected argument of type dac.social.GetEndorsementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetEndorsementsRequest(buffer_arg) {
  return social_pb.GetEndorsementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetEndorsementsResponse(arg) {
  if (!(arg instanceof social_pb.GetEndorsementsResponse)) {
    throw new Error('Expected argument of type dac.social.GetEndorsementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetEndorsementsResponse(buffer_arg) {
  return social_pb.GetEndorsementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetFeedRequest(arg) {
  if (!(arg instanceof social_pb.GetFeedRequest)) {
    throw new Error('Expected argument of type dac.social.GetFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetFeedRequest(buffer_arg) {
  return social_pb.GetFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetFollowersRequest(arg) {
  if (!(arg instanceof social_pb.GetFollowersRequest)) {
    throw new Error('Expected argument of type dac.social.GetFollowersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetFollowersRequest(buffer_arg) {
  return social_pb.GetFollowersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetFollowersResponse(arg) {
  if (!(arg instanceof social_pb.GetFollowersResponse)) {
    throw new Error('Expected argument of type dac.social.GetFollowersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetFollowersResponse(buffer_arg) {
  return social_pb.GetFollowersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetFollowingRequest(arg) {
  if (!(arg instanceof social_pb.GetFollowingRequest)) {
    throw new Error('Expected argument of type dac.social.GetFollowingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetFollowingRequest(buffer_arg) {
  return social_pb.GetFollowingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetFollowingResponse(arg) {
  if (!(arg instanceof social_pb.GetFollowingResponse)) {
    throw new Error('Expected argument of type dac.social.GetFollowingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetFollowingResponse(buffer_arg) {
  return social_pb.GetFollowingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetInboxRequest(arg) {
  if (!(arg instanceof social_pb.GetInboxRequest)) {
    throw new Error('Expected argument of type dac.social.GetInboxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetInboxRequest(buffer_arg) {
  return social_pb.GetInboxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetInboxResponse(arg) {
  if (!(arg instanceof social_pb.GetInboxResponse)) {
    throw new Error('Expected argument of type dac.social.GetInboxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetInboxResponse(buffer_arg) {
  return social_pb.GetInboxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetModerationQueueRequest(arg) {
  if (!(arg instanceof social_pb.GetModerationQueueRequest)) {
    throw new Error('Expected argument of type dac.social.GetModerationQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetModerationQueueRequest(buffer_arg) {
  return social_pb.GetModerationQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetModerationQueueResponse(arg) {
  if (!(arg instanceof social_pb.GetModerationQueueResponse)) {
    throw new Error('Expected argument of type dac.social.GetModerationQueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetModerationQueueResponse(buffer_arg) {
  return social_pb.GetModerationQueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetPostRequest(arg) {
  if (!(arg instanceof social_pb.GetPostRequest)) {
    throw new Error('Expected argument of type dac.social.GetPostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetPostRequest(buffer_arg) {
  return social_pb.GetPostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetProfileRequest(arg) {
  if (!(arg instanceof social_pb.GetProfileRequest)) {
    throw new Error('Expected argument of type dac.social.GetProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetProfileRequest(buffer_arg) {
  return social_pb.GetProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetUserPostsRequest(arg) {
  if (!(arg instanceof social_pb.GetUserPostsRequest)) {
    throw new Error('Expected argument of type dac.social.GetUserPostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetUserPostsRequest(buffer_arg) {
  return social_pb.GetUserPostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_GetUserPostsResponse(arg) {
  if (!(arg instanceof social_pb.GetUserPostsResponse)) {
    throw new Error('Expected argument of type dac.social.GetUserPostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_GetUserPostsResponse(buffer_arg) {
  return social_pb.GetUserPostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_MarkAllReadRequest(arg) {
  if (!(arg instanceof social_pb.MarkAllReadRequest)) {
    throw new Error('Expected argument of type dac.social.MarkAllReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_MarkAllReadRequest(buffer_arg) {
  return social_pb.MarkAllReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_MarkReadRequest(arg) {
  if (!(arg instanceof social_pb.MarkReadRequest)) {
    throw new Error('Expected argument of type dac.social.MarkReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_MarkReadRequest(buffer_arg) {
  return social_pb.MarkReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_Message(arg) {
  if (!(arg instanceof social_pb.Message)) {
    throw new Error('Expected argument of type dac.social.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_Message(buffer_arg) {
  return social_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_MessageResponse(arg) {
  if (!(arg instanceof social_pb.MessageResponse)) {
    throw new Error('Expected argument of type dac.social.MessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_MessageResponse(buffer_arg) {
  return social_pb.MessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_ModerateContentRequest(arg) {
  if (!(arg instanceof social_pb.ModerateContentRequest)) {
    throw new Error('Expected argument of type dac.social.ModerateContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_ModerateContentRequest(buffer_arg) {
  return social_pb.ModerateContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_ModerationResult(arg) {
  if (!(arg instanceof social_pb.ModerationResult)) {
    throw new Error('Expected argument of type dac.social.ModerationResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_ModerationResult(buffer_arg) {
  return social_pb.ModerationResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_Post(arg) {
  if (!(arg instanceof social_pb.Post)) {
    throw new Error('Expected argument of type dac.social.Post');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_Post(buffer_arg) {
  return social_pb.Post.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_PrivacySettings(arg) {
  if (!(arg instanceof social_pb.PrivacySettings)) {
    throw new Error('Expected argument of type dac.social.PrivacySettings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_PrivacySettings(buffer_arg) {
  return social_pb.PrivacySettings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_ReportContentRequest(arg) {
  if (!(arg instanceof social_pb.ReportContentRequest)) {
    throw new Error('Expected argument of type dac.social.ReportContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_ReportContentRequest(buffer_arg) {
  return social_pb.ReportContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_ReportResponse(arg) {
  if (!(arg instanceof social_pb.ReportResponse)) {
    throw new Error('Expected argument of type dac.social.ReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_ReportResponse(buffer_arg) {
  return social_pb.ReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_ReputationHistoryRequest(arg) {
  if (!(arg instanceof social_pb.ReputationHistoryRequest)) {
    throw new Error('Expected argument of type dac.social.ReputationHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_ReputationHistoryRequest(buffer_arg) {
  return social_pb.ReputationHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_ReputationHistoryResponse(arg) {
  if (!(arg instanceof social_pb.ReputationHistoryResponse)) {
    throw new Error('Expected argument of type dac.social.ReputationHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_ReputationHistoryResponse(buffer_arg) {
  return social_pb.ReputationHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_ReputationUpdate(arg) {
  if (!(arg instanceof social_pb.ReputationUpdate)) {
    throw new Error('Expected argument of type dac.social.ReputationUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_ReputationUpdate(buffer_arg) {
  return social_pb.ReputationUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_SearchProfilesRequest(arg) {
  if (!(arg instanceof social_pb.SearchProfilesRequest)) {
    throw new Error('Expected argument of type dac.social.SearchProfilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_SearchProfilesRequest(buffer_arg) {
  return social_pb.SearchProfilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_SearchProfilesResponse(arg) {
  if (!(arg instanceof social_pb.SearchProfilesResponse)) {
    throw new Error('Expected argument of type dac.social.SearchProfilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_SearchProfilesResponse(buffer_arg) {
  return social_pb.SearchProfilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_SendMessageRequest(arg) {
  if (!(arg instanceof social_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type dac.social.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_SendMessageRequest(buffer_arg) {
  return social_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_SocialProfile(arg) {
  if (!(arg instanceof social_pb.SocialProfile)) {
    throw new Error('Expected argument of type dac.social.SocialProfile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_SocialProfile(buffer_arg) {
  return social_pb.SocialProfile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_UnblockUserRequest(arg) {
  if (!(arg instanceof social_pb.UnblockUserRequest)) {
    throw new Error('Expected argument of type dac.social.UnblockUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_UnblockUserRequest(buffer_arg) {
  return social_pb.UnblockUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_UnfollowRequest(arg) {
  if (!(arg instanceof social_pb.UnfollowRequest)) {
    throw new Error('Expected argument of type dac.social.UnfollowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_UnfollowRequest(buffer_arg) {
  return social_pb.UnfollowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_UpdatePostRequest(arg) {
  if (!(arg instanceof social_pb.UpdatePostRequest)) {
    throw new Error('Expected argument of type dac.social.UpdatePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_UpdatePostRequest(buffer_arg) {
  return social_pb.UpdatePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_UpdatePrivacyRequest(arg) {
  if (!(arg instanceof social_pb.UpdatePrivacyRequest)) {
    throw new Error('Expected argument of type dac.social.UpdatePrivacyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_UpdatePrivacyRequest(buffer_arg) {
  return social_pb.UpdatePrivacyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_UpdateProfileRequest(arg) {
  if (!(arg instanceof social_pb.UpdateProfileRequest)) {
    throw new Error('Expected argument of type dac.social.UpdateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_UpdateProfileRequest(buffer_arg) {
  return social_pb.UpdateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_social_UpdateReputationRequest(arg) {
  if (!(arg instanceof social_pb.UpdateReputationRequest)) {
    throw new Error('Expected argument of type dac.social.UpdateReputationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_social_UpdateReputationRequest(buffer_arg) {
  return social_pb.UpdateReputationRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Social Features Service
var SocialServiceService = exports.SocialServiceService = {
  // Profile Management
createProfile: {
    path: '/dac.social.SocialService/CreateProfile',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.CreateProfileRequest,
    responseType: social_pb.SocialProfile,
    requestSerialize: serialize_dac_social_CreateProfileRequest,
    requestDeserialize: deserialize_dac_social_CreateProfileRequest,
    responseSerialize: serialize_dac_social_SocialProfile,
    responseDeserialize: deserialize_dac_social_SocialProfile,
  },
  getProfile: {
    path: '/dac.social.SocialService/GetProfile',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.GetProfileRequest,
    responseType: social_pb.SocialProfile,
    requestSerialize: serialize_dac_social_GetProfileRequest,
    requestDeserialize: deserialize_dac_social_GetProfileRequest,
    responseSerialize: serialize_dac_social_SocialProfile,
    responseDeserialize: deserialize_dac_social_SocialProfile,
  },
  updateProfile: {
    path: '/dac.social.SocialService/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.UpdateProfileRequest,
    responseType: social_pb.SocialProfile,
    requestSerialize: serialize_dac_social_UpdateProfileRequest,
    requestDeserialize: deserialize_dac_social_UpdateProfileRequest,
    responseSerialize: serialize_dac_social_SocialProfile,
    responseDeserialize: deserialize_dac_social_SocialProfile,
  },
  searchProfiles: {
    path: '/dac.social.SocialService/SearchProfiles',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.SearchProfilesRequest,
    responseType: social_pb.SearchProfilesResponse,
    requestSerialize: serialize_dac_social_SearchProfilesRequest,
    requestDeserialize: deserialize_dac_social_SearchProfilesRequest,
    responseSerialize: serialize_dac_social_SearchProfilesResponse,
    responseDeserialize: deserialize_dac_social_SearchProfilesResponse,
  },
  // Posts and Content
createPost: {
    path: '/dac.social.SocialService/CreatePost',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.CreatePostRequest,
    responseType: social_pb.Post,
    requestSerialize: serialize_dac_social_CreatePostRequest,
    requestDeserialize: deserialize_dac_social_CreatePostRequest,
    responseSerialize: serialize_dac_social_Post,
    responseDeserialize: deserialize_dac_social_Post,
  },
  getPost: {
    path: '/dac.social.SocialService/GetPost',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.GetPostRequest,
    responseType: social_pb.Post,
    requestSerialize: serialize_dac_social_GetPostRequest,
    requestDeserialize: deserialize_dac_social_GetPostRequest,
    responseSerialize: serialize_dac_social_Post,
    responseDeserialize: deserialize_dac_social_Post,
  },
  updatePost: {
    path: '/dac.social.SocialService/UpdatePost',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.UpdatePostRequest,
    responseType: social_pb.Post,
    requestSerialize: serialize_dac_social_UpdatePostRequest,
    requestDeserialize: deserialize_dac_social_UpdatePostRequest,
    responseSerialize: serialize_dac_social_Post,
    responseDeserialize: deserialize_dac_social_Post,
  },
  deletePost: {
    path: '/dac.social.SocialService/DeletePost',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.DeletePostRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_social_DeletePostRequest,
    requestDeserialize: deserialize_dac_social_DeletePostRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getFeed: {
    path: '/dac.social.SocialService/GetFeed',
    requestStream: false,
    responseStream: true,
    requestType: social_pb.GetFeedRequest,
    responseType: social_pb.Post,
    requestSerialize: serialize_dac_social_GetFeedRequest,
    requestDeserialize: deserialize_dac_social_GetFeedRequest,
    responseSerialize: serialize_dac_social_Post,
    responseDeserialize: deserialize_dac_social_Post,
  },
  getUserPosts: {
    path: '/dac.social.SocialService/GetUserPosts',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.GetUserPostsRequest,
    responseType: social_pb.GetUserPostsResponse,
    requestSerialize: serialize_dac_social_GetUserPostsRequest,
    requestDeserialize: deserialize_dac_social_GetUserPostsRequest,
    responseSerialize: serialize_dac_social_GetUserPostsResponse,
    responseDeserialize: deserialize_dac_social_GetUserPostsResponse,
  },
  // Social Interactions
followUser: {
    path: '/dac.social.SocialService/FollowUser',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.FollowRequest,
    responseType: social_pb.FollowResponse,
    requestSerialize: serialize_dac_social_FollowRequest,
    requestDeserialize: deserialize_dac_social_FollowRequest,
    responseSerialize: serialize_dac_social_FollowResponse,
    responseDeserialize: deserialize_dac_social_FollowResponse,
  },
  unfollowUser: {
    path: '/dac.social.SocialService/UnfollowUser',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.UnfollowRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_social_UnfollowRequest,
    requestDeserialize: deserialize_dac_social_UnfollowRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getFollowers: {
    path: '/dac.social.SocialService/GetFollowers',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.GetFollowersRequest,
    responseType: social_pb.GetFollowersResponse,
    requestSerialize: serialize_dac_social_GetFollowersRequest,
    requestDeserialize: deserialize_dac_social_GetFollowersRequest,
    responseSerialize: serialize_dac_social_GetFollowersResponse,
    responseDeserialize: deserialize_dac_social_GetFollowersResponse,
  },
  getFollowing: {
    path: '/dac.social.SocialService/GetFollowing',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.GetFollowingRequest,
    responseType: social_pb.GetFollowingResponse,
    requestSerialize: serialize_dac_social_GetFollowingRequest,
    requestDeserialize: deserialize_dac_social_GetFollowingRequest,
    responseSerialize: serialize_dac_social_GetFollowingResponse,
    responseDeserialize: deserialize_dac_social_GetFollowingResponse,
  },
  checkFollowStatus: {
    path: '/dac.social.SocialService/CheckFollowStatus',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.CheckFollowRequest,
    responseType: social_pb.CheckFollowResponse,
    requestSerialize: serialize_dac_social_CheckFollowRequest,
    requestDeserialize: deserialize_dac_social_CheckFollowRequest,
    responseSerialize: serialize_dac_social_CheckFollowResponse,
    responseDeserialize: deserialize_dac_social_CheckFollowResponse,
  },
  // Messaging
sendMessage: {
    path: '/dac.social.SocialService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.SendMessageRequest,
    responseType: social_pb.MessageResponse,
    requestSerialize: serialize_dac_social_SendMessageRequest,
    requestDeserialize: deserialize_dac_social_SendMessageRequest,
    responseSerialize: serialize_dac_social_MessageResponse,
    responseDeserialize: deserialize_dac_social_MessageResponse,
  },
  getConversation: {
    path: '/dac.social.SocialService/GetConversation',
    requestStream: false,
    responseStream: true,
    requestType: social_pb.GetConversationRequest,
    responseType: social_pb.Message,
    requestSerialize: serialize_dac_social_GetConversationRequest,
    requestDeserialize: deserialize_dac_social_GetConversationRequest,
    responseSerialize: serialize_dac_social_Message,
    responseDeserialize: deserialize_dac_social_Message,
  },
  getInbox: {
    path: '/dac.social.SocialService/GetInbox',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.GetInboxRequest,
    responseType: social_pb.GetInboxResponse,
    requestSerialize: serialize_dac_social_GetInboxRequest,
    requestDeserialize: deserialize_dac_social_GetInboxRequest,
    responseSerialize: serialize_dac_social_GetInboxResponse,
    responseDeserialize: deserialize_dac_social_GetInboxResponse,
  },
  markMessageAsRead: {
    path: '/dac.social.SocialService/MarkMessageAsRead',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.MarkReadRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_social_MarkReadRequest,
    requestDeserialize: deserialize_dac_social_MarkReadRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  markAllMessagesAsRead: {
    path: '/dac.social.SocialService/MarkAllMessagesAsRead',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.MarkAllReadRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_social_MarkAllReadRequest,
    requestDeserialize: deserialize_dac_social_MarkAllReadRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Endorsements and Reputation
createEndorsement: {
    path: '/dac.social.SocialService/CreateEndorsement',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.EndorsementRequest,
    responseType: social_pb.Endorsement,
    requestSerialize: serialize_dac_social_EndorsementRequest,
    requestDeserialize: deserialize_dac_social_EndorsementRequest,
    responseSerialize: serialize_dac_social_Endorsement,
    responseDeserialize: deserialize_dac_social_Endorsement,
  },
  getEndorsements: {
    path: '/dac.social.SocialService/GetEndorsements',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.GetEndorsementsRequest,
    responseType: social_pb.GetEndorsementsResponse,
    requestSerialize: serialize_dac_social_GetEndorsementsRequest,
    requestDeserialize: deserialize_dac_social_GetEndorsementsRequest,
    responseSerialize: serialize_dac_social_GetEndorsementsResponse,
    responseDeserialize: deserialize_dac_social_GetEndorsementsResponse,
  },
  updateReputation: {
    path: '/dac.social.SocialService/UpdateReputation',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.UpdateReputationRequest,
    responseType: social_pb.ReputationUpdate,
    requestSerialize: serialize_dac_social_UpdateReputationRequest,
    requestDeserialize: deserialize_dac_social_UpdateReputationRequest,
    responseSerialize: serialize_dac_social_ReputationUpdate,
    responseDeserialize: deserialize_dac_social_ReputationUpdate,
  },
  getReputationHistory: {
    path: '/dac.social.SocialService/GetReputationHistory',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.ReputationHistoryRequest,
    responseType: social_pb.ReputationHistoryResponse,
    requestSerialize: serialize_dac_social_ReputationHistoryRequest,
    requestDeserialize: deserialize_dac_social_ReputationHistoryRequest,
    responseSerialize: serialize_dac_social_ReputationHistoryResponse,
    responseDeserialize: deserialize_dac_social_ReputationHistoryResponse,
  },
  // Content Moderation
reportContent: {
    path: '/dac.social.SocialService/ReportContent',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.ReportContentRequest,
    responseType: social_pb.ReportResponse,
    requestSerialize: serialize_dac_social_ReportContentRequest,
    requestDeserialize: deserialize_dac_social_ReportContentRequest,
    responseSerialize: serialize_dac_social_ReportResponse,
    responseDeserialize: deserialize_dac_social_ReportResponse,
  },
  moderateContent: {
    path: '/dac.social.SocialService/ModerateContent',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.ModerateContentRequest,
    responseType: social_pb.ModerationResult,
    requestSerialize: serialize_dac_social_ModerateContentRequest,
    requestDeserialize: deserialize_dac_social_ModerateContentRequest,
    responseSerialize: serialize_dac_social_ModerationResult,
    responseDeserialize: deserialize_dac_social_ModerationResult,
  },
  getModerationQueue: {
    path: '/dac.social.SocialService/GetModerationQueue',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.GetModerationQueueRequest,
    responseType: social_pb.GetModerationQueueResponse,
    requestSerialize: serialize_dac_social_GetModerationQueueRequest,
    requestDeserialize: deserialize_dac_social_GetModerationQueueRequest,
    responseSerialize: serialize_dac_social_GetModerationQueueResponse,
    responseDeserialize: deserialize_dac_social_GetModerationQueueResponse,
  },
  // Privacy and Security
updatePrivacySettings: {
    path: '/dac.social.SocialService/UpdatePrivacySettings',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.UpdatePrivacyRequest,
    responseType: social_pb.PrivacySettings,
    requestSerialize: serialize_dac_social_UpdatePrivacyRequest,
    requestDeserialize: deserialize_dac_social_UpdatePrivacyRequest,
    responseSerialize: serialize_dac_social_PrivacySettings,
    responseDeserialize: deserialize_dac_social_PrivacySettings,
  },
  blockUser: {
    path: '/dac.social.SocialService/BlockUser',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.BlockUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_social_BlockUserRequest,
    requestDeserialize: deserialize_dac_social_BlockUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  unblockUser: {
    path: '/dac.social.SocialService/UnblockUser',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.UnblockUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_social_UnblockUserRequest,
    requestDeserialize: deserialize_dac_social_UnblockUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getBlockedUsers: {
    path: '/dac.social.SocialService/GetBlockedUsers',
    requestStream: false,
    responseStream: false,
    requestType: social_pb.GetBlockedUsersRequest,
    responseType: social_pb.GetBlockedUsersResponse,
    requestSerialize: serialize_dac_social_GetBlockedUsersRequest,
    requestDeserialize: deserialize_dac_social_GetBlockedUsersRequest,
    responseSerialize: serialize_dac_social_GetBlockedUsersResponse,
    responseDeserialize: deserialize_dac_social_GetBlockedUsersResponse,
  },
};

exports.SocialServiceClient = grpc.makeGenericClientConstructor(SocialServiceService, 'SocialService');
