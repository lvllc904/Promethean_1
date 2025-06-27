// source: social.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.dac.social.AttachmentType', null, global);
goog.exportSymbol('proto.dac.social.BadgeCategory', null, global);
goog.exportSymbol('proto.dac.social.BlockUserRequest', null, global);
goog.exportSymbol('proto.dac.social.BlockedUser', null, global);
goog.exportSymbol('proto.dac.social.CheckFollowRequest', null, global);
goog.exportSymbol('proto.dac.social.CheckFollowResponse', null, global);
goog.exportSymbol('proto.dac.social.Comment', null, global);
goog.exportSymbol('proto.dac.social.ContentType', null, global);
goog.exportSymbol('proto.dac.social.Conversation', null, global);
goog.exportSymbol('proto.dac.social.CreatePostRequest', null, global);
goog.exportSymbol('proto.dac.social.CreateProfileRequest', null, global);
goog.exportSymbol('proto.dac.social.DeletePostRequest', null, global);
goog.exportSymbol('proto.dac.social.Endorsement', null, global);
goog.exportSymbol('proto.dac.social.EndorsementDirection', null, global);
goog.exportSymbol('proto.dac.social.EndorsementRequest', null, global);
goog.exportSymbol('proto.dac.social.EndorsementType', null, global);
goog.exportSymbol('proto.dac.social.FeedFilter', null, global);
goog.exportSymbol('proto.dac.social.FeedType', null, global);
goog.exportSymbol('proto.dac.social.Follow', null, global);
goog.exportSymbol('proto.dac.social.FollowRequest', null, global);
goog.exportSymbol('proto.dac.social.FollowResponse', null, global);
goog.exportSymbol('proto.dac.social.FollowStatus', null, global);
goog.exportSymbol('proto.dac.social.GetBlockedUsersRequest', null, global);
goog.exportSymbol('proto.dac.social.GetBlockedUsersResponse', null, global);
goog.exportSymbol('proto.dac.social.GetConversationRequest', null, global);
goog.exportSymbol('proto.dac.social.GetEndorsementsRequest', null, global);
goog.exportSymbol('proto.dac.social.GetEndorsementsResponse', null, global);
goog.exportSymbol('proto.dac.social.GetFeedRequest', null, global);
goog.exportSymbol('proto.dac.social.GetFollowersRequest', null, global);
goog.exportSymbol('proto.dac.social.GetFollowersResponse', null, global);
goog.exportSymbol('proto.dac.social.GetFollowingRequest', null, global);
goog.exportSymbol('proto.dac.social.GetFollowingResponse', null, global);
goog.exportSymbol('proto.dac.social.GetInboxRequest', null, global);
goog.exportSymbol('proto.dac.social.GetInboxResponse', null, global);
goog.exportSymbol('proto.dac.social.GetModerationQueueRequest', null, global);
goog.exportSymbol('proto.dac.social.GetModerationQueueResponse', null, global);
goog.exportSymbol('proto.dac.social.GetPostRequest', null, global);
goog.exportSymbol('proto.dac.social.GetProfileRequest', null, global);
goog.exportSymbol('proto.dac.social.GetProfileRequest.IdentifierCase', null, global);
goog.exportSymbol('proto.dac.social.GetUserPostsRequest', null, global);
goog.exportSymbol('proto.dac.social.GetUserPostsResponse', null, global);
goog.exportSymbol('proto.dac.social.MarkAllReadRequest', null, global);
goog.exportSymbol('proto.dac.social.MarkReadRequest', null, global);
goog.exportSymbol('proto.dac.social.MediaMetadata', null, global);
goog.exportSymbol('proto.dac.social.MediaType', null, global);
goog.exportSymbol('proto.dac.social.Message', null, global);
goog.exportSymbol('proto.dac.social.MessageAttachment', null, global);
goog.exportSymbol('proto.dac.social.MessagePrivacy', null, global);
goog.exportSymbol('proto.dac.social.MessageResponse', null, global);
goog.exportSymbol('proto.dac.social.MessageType', null, global);
goog.exportSymbol('proto.dac.social.ModerateContentRequest', null, global);
goog.exportSymbol('proto.dac.social.ModerationAction', null, global);
goog.exportSymbol('proto.dac.social.ModerationItem', null, global);
goog.exportSymbol('proto.dac.social.ModerationPriority', null, global);
goog.exportSymbol('proto.dac.social.ModerationResult', null, global);
goog.exportSymbol('proto.dac.social.ModerationStatus', null, global);
goog.exportSymbol('proto.dac.social.Post', null, global);
goog.exportSymbol('proto.dac.social.PostMedia', null, global);
goog.exportSymbol('proto.dac.social.PostMetrics', null, global);
goog.exportSymbol('proto.dac.social.PostType', null, global);
goog.exportSymbol('proto.dac.social.PostVisibility', null, global);
goog.exportSymbol('proto.dac.social.PrivacyLevel', null, global);
goog.exportSymbol('proto.dac.social.PrivacySettings', null, global);
goog.exportSymbol('proto.dac.social.ProfileBadge', null, global);
goog.exportSymbol('proto.dac.social.ProfileSearchSort', null, global);
goog.exportSymbol('proto.dac.social.ProfileStats', null, global);
goog.exportSymbol('proto.dac.social.ReportContentRequest', null, global);
goog.exportSymbol('proto.dac.social.ReportReason', null, global);
goog.exportSymbol('proto.dac.social.ReportResponse', null, global);
goog.exportSymbol('proto.dac.social.ReputationHistoryRequest', null, global);
goog.exportSymbol('proto.dac.social.ReputationHistoryResponse', null, global);
goog.exportSymbol('proto.dac.social.ReputationSource', null, global);
goog.exportSymbol('proto.dac.social.ReputationSummary', null, global);
goog.exportSymbol('proto.dac.social.ReputationUpdate', null, global);
goog.exportSymbol('proto.dac.social.SearchProfilesRequest', null, global);
goog.exportSymbol('proto.dac.social.SearchProfilesResponse', null, global);
goog.exportSymbol('proto.dac.social.SendMessageRequest', null, global);
goog.exportSymbol('proto.dac.social.SkillEndorsementSummary', null, global);
goog.exportSymbol('proto.dac.social.SocialLink', null, global);
goog.exportSymbol('proto.dac.social.SocialProfile', null, global);
goog.exportSymbol('proto.dac.social.UnblockUserRequest', null, global);
goog.exportSymbol('proto.dac.social.UnfollowRequest', null, global);
goog.exportSymbol('proto.dac.social.UpdatePostRequest', null, global);
goog.exportSymbol('proto.dac.social.UpdatePrivacyRequest', null, global);
goog.exportSymbol('proto.dac.social.UpdateProfileRequest', null, global);
goog.exportSymbol('proto.dac.social.UpdateReputationRequest', null, global);
goog.exportSymbol('proto.dac.social.VerificationStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.SocialProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.SocialProfile.repeatedFields_, null);
};
goog.inherits(proto.dac.social.SocialProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.SocialProfile.displayName = 'proto.dac.social.SocialProfile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.SocialLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.SocialLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.SocialLink.displayName = 'proto.dac.social.SocialLink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ProfileStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.ProfileStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ProfileStats.displayName = 'proto.dac.social.ProfileStats';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ProfileBadge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.ProfileBadge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ProfileBadge.displayName = 'proto.dac.social.ProfileBadge';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.Post = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.Post.repeatedFields_, null);
};
goog.inherits(proto.dac.social.Post, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.Post.displayName = 'proto.dac.social.Post';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.PostMedia = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.PostMedia, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.PostMedia.displayName = 'proto.dac.social.PostMedia';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.MediaMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.MediaMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.MediaMetadata.displayName = 'proto.dac.social.MediaMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.Comment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.Comment.repeatedFields_, null);
};
goog.inherits(proto.dac.social.Comment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.Comment.displayName = 'proto.dac.social.Comment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.PostMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.PostMetrics.repeatedFields_, null);
};
goog.inherits(proto.dac.social.PostMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.PostMetrics.displayName = 'proto.dac.social.PostMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.Message.repeatedFields_, null);
};
goog.inherits(proto.dac.social.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.Message.displayName = 'proto.dac.social.Message';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.MessageAttachment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.MessageAttachment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.MessageAttachment.displayName = 'proto.dac.social.MessageAttachment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.Conversation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.Conversation.repeatedFields_, null);
};
goog.inherits(proto.dac.social.Conversation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.Conversation.displayName = 'proto.dac.social.Conversation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.Follow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.Follow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.Follow.displayName = 'proto.dac.social.Follow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.Endorsement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.Endorsement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.Endorsement.displayName = 'proto.dac.social.Endorsement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ReputationUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.ReputationUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ReputationUpdate.displayName = 'proto.dac.social.ReputationUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.CreateProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.CreateProfileRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.social.CreateProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.CreateProfileRequest.displayName = 'proto.dac.social.CreateProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.dac.social.GetProfileRequest.oneofGroups_);
};
goog.inherits(proto.dac.social.GetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetProfileRequest.displayName = 'proto.dac.social.GetProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.UpdateProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.UpdateProfileRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.social.UpdateProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.UpdateProfileRequest.displayName = 'proto.dac.social.UpdateProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.SearchProfilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.SearchProfilesRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.social.SearchProfilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.SearchProfilesRequest.displayName = 'proto.dac.social.SearchProfilesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.SearchProfilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.SearchProfilesResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.social.SearchProfilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.SearchProfilesResponse.displayName = 'proto.dac.social.SearchProfilesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.CreatePostRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.CreatePostRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.social.CreatePostRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.CreatePostRequest.displayName = 'proto.dac.social.CreatePostRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetPostRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.GetPostRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetPostRequest.displayName = 'proto.dac.social.GetPostRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.UpdatePostRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.UpdatePostRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.social.UpdatePostRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.UpdatePostRequest.displayName = 'proto.dac.social.UpdatePostRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.DeletePostRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.DeletePostRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.DeletePostRequest.displayName = 'proto.dac.social.DeletePostRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetFeedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.GetFeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetFeedRequest.displayName = 'proto.dac.social.GetFeedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.FeedFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.FeedFilter.repeatedFields_, null);
};
goog.inherits(proto.dac.social.FeedFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.FeedFilter.displayName = 'proto.dac.social.FeedFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetUserPostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.GetUserPostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetUserPostsRequest.displayName = 'proto.dac.social.GetUserPostsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetUserPostsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.GetUserPostsResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.social.GetUserPostsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetUserPostsResponse.displayName = 'proto.dac.social.GetUserPostsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.FollowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.FollowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.FollowRequest.displayName = 'proto.dac.social.FollowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.FollowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.FollowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.FollowResponse.displayName = 'proto.dac.social.FollowResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.UnfollowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.UnfollowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.UnfollowRequest.displayName = 'proto.dac.social.UnfollowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetFollowersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.GetFollowersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetFollowersRequest.displayName = 'proto.dac.social.GetFollowersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetFollowersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.GetFollowersResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.social.GetFollowersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetFollowersResponse.displayName = 'proto.dac.social.GetFollowersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetFollowingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.GetFollowingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetFollowingRequest.displayName = 'proto.dac.social.GetFollowingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetFollowingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.GetFollowingResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.social.GetFollowingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetFollowingResponse.displayName = 'proto.dac.social.GetFollowingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.CheckFollowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.CheckFollowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.CheckFollowRequest.displayName = 'proto.dac.social.CheckFollowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.CheckFollowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.CheckFollowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.CheckFollowResponse.displayName = 'proto.dac.social.CheckFollowResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.SendMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.SendMessageRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.social.SendMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.SendMessageRequest.displayName = 'proto.dac.social.SendMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.MessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.MessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.MessageResponse.displayName = 'proto.dac.social.MessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetConversationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.GetConversationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetConversationRequest.displayName = 'proto.dac.social.GetConversationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetInboxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.GetInboxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetInboxRequest.displayName = 'proto.dac.social.GetInboxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetInboxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.GetInboxResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.social.GetInboxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetInboxResponse.displayName = 'proto.dac.social.GetInboxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.MarkReadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.MarkReadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.MarkReadRequest.displayName = 'proto.dac.social.MarkReadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.MarkAllReadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.MarkAllReadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.MarkAllReadRequest.displayName = 'proto.dac.social.MarkAllReadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.EndorsementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.EndorsementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.EndorsementRequest.displayName = 'proto.dac.social.EndorsementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetEndorsementsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.GetEndorsementsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetEndorsementsRequest.displayName = 'proto.dac.social.GetEndorsementsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetEndorsementsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.GetEndorsementsResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.social.GetEndorsementsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetEndorsementsResponse.displayName = 'proto.dac.social.GetEndorsementsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.SkillEndorsementSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.SkillEndorsementSummary.repeatedFields_, null);
};
goog.inherits(proto.dac.social.SkillEndorsementSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.SkillEndorsementSummary.displayName = 'proto.dac.social.SkillEndorsementSummary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.UpdateReputationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.UpdateReputationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.UpdateReputationRequest.displayName = 'proto.dac.social.UpdateReputationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ReputationHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.ReputationHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ReputationHistoryRequest.displayName = 'proto.dac.social.ReputationHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ReputationHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.ReputationHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.social.ReputationHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ReputationHistoryResponse.displayName = 'proto.dac.social.ReputationHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ReputationSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.ReputationSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ReputationSummary.displayName = 'proto.dac.social.ReputationSummary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ReportContentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.ReportContentRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.social.ReportContentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ReportContentRequest.displayName = 'proto.dac.social.ReportContentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.ReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ReportResponse.displayName = 'proto.dac.social.ReportResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ModerateContentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.ModerateContentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ModerateContentRequest.displayName = 'proto.dac.social.ModerateContentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ModerationResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.ModerationResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ModerationResult.displayName = 'proto.dac.social.ModerationResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetModerationQueueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.GetModerationQueueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetModerationQueueRequest.displayName = 'proto.dac.social.GetModerationQueueRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetModerationQueueResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.GetModerationQueueResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.social.GetModerationQueueResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetModerationQueueResponse.displayName = 'proto.dac.social.GetModerationQueueResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.ModerationItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.ModerationItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.ModerationItem.displayName = 'proto.dac.social.ModerationItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.UpdatePrivacyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.UpdatePrivacyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.UpdatePrivacyRequest.displayName = 'proto.dac.social.UpdatePrivacyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.PrivacySettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.PrivacySettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.PrivacySettings.displayName = 'proto.dac.social.PrivacySettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.BlockUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.BlockUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.BlockUserRequest.displayName = 'proto.dac.social.BlockUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.UnblockUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.UnblockUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.UnblockUserRequest.displayName = 'proto.dac.social.UnblockUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetBlockedUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.GetBlockedUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetBlockedUsersRequest.displayName = 'proto.dac.social.GetBlockedUsersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.GetBlockedUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.social.GetBlockedUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.social.GetBlockedUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.GetBlockedUsersResponse.displayName = 'proto.dac.social.GetBlockedUsersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dac.social.BlockedUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.social.BlockedUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.social.BlockedUser.displayName = 'proto.dac.social.BlockedUser';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.SocialProfile.repeatedFields_ = [8,9,12,20];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.SocialProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.SocialProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.SocialProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SocialProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pseudonym: jspb.Message.getFieldWithDefault(msg, 3, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bio: jspb.Message.getFieldWithDefault(msg, 5, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    bannerUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    interestsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    skillsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    location: jspb.Message.getFieldWithDefault(msg, 10, ""),
    website: jspb.Message.getFieldWithDefault(msg, 11, ""),
    socialLinksList: jspb.Message.toObjectList(msg.getSocialLinksList(),
    proto.dac.social.SocialLink.toObject, includeInstance),
    reputationScore: jspb.Message.getFieldWithDefault(msg, 13, 0),
    privacyLevel: jspb.Message.getFieldWithDefault(msg, 14, 0),
    verificationStatus: jspb.Message.getFieldWithDefault(msg, 15, 0),
    stats: (f = msg.getStats()) && proto.dac.social.ProfileStats.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    badgesList: jspb.Message.toObjectList(msg.getBadgesList(),
    proto.dac.social.ProfileBadge.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.SocialProfile}
 */
proto.dac.social.SocialProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.SocialProfile;
  return proto.dac.social.SocialProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.SocialProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.SocialProfile}
 */
proto.dac.social.SocialProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPseudonym(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBio(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBannerUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addInterests(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addSkills(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebsite(value);
      break;
    case 12:
      var value = new proto.dac.social.SocialLink;
      reader.readMessage(value,proto.dac.social.SocialLink.deserializeBinaryFromReader);
      msg.addSocialLinks(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReputationScore(value);
      break;
    case 14:
      var value = /** @type {!proto.dac.social.PrivacyLevel} */ (reader.readEnum());
      msg.setPrivacyLevel(value);
      break;
    case 15:
      var value = /** @type {!proto.dac.social.VerificationStatus} */ (reader.readEnum());
      msg.setVerificationStatus(value);
      break;
    case 16:
      var value = new proto.dac.social.ProfileStats;
      reader.readMessage(value,proto.dac.social.ProfileStats.deserializeBinaryFromReader);
      msg.setStats(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 20:
      var value = new proto.dac.social.ProfileBadge;
      reader.readMessage(value,proto.dac.social.ProfileBadge.deserializeBinaryFromReader);
      msg.addBadges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.SocialProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.SocialProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.SocialProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SocialProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPseudonym();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBio();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBannerUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInterestsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getWebsite();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSocialLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.dac.social.SocialLink.serializeBinaryToWriter
    );
  }
  f = message.getReputationScore();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getPrivacyLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getVerificationStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getStats();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.dac.social.ProfileStats.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getBadgesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.dac.social.ProfileBadge.serializeBinaryToWriter
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.SocialProfile.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 user_id = 2;
 * @return {number}
 */
proto.dac.social.SocialProfile.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string pseudonym = 3;
 * @return {string}
 */
proto.dac.social.SocialProfile.prototype.getPseudonym = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setPseudonym = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string display_name = 4;
 * @return {string}
 */
proto.dac.social.SocialProfile.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string bio = 5;
 * @return {string}
 */
proto.dac.social.SocialProfile.prototype.getBio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setBio = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string avatar_url = 6;
 * @return {string}
 */
proto.dac.social.SocialProfile.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string banner_url = 7;
 * @return {string}
 */
proto.dac.social.SocialProfile.prototype.getBannerUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setBannerUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string interests = 8;
 * @return {!Array<string>}
 */
proto.dac.social.SocialProfile.prototype.getInterestsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setInterestsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.addInterests = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.clearInterestsList = function() {
  return this.setInterestsList([]);
};


/**
 * repeated string skills = 9;
 * @return {!Array<string>}
 */
proto.dac.social.SocialProfile.prototype.getSkillsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setSkillsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.addSkills = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * optional string location = 10;
 * @return {string}
 */
proto.dac.social.SocialProfile.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string website = 11;
 * @return {string}
 */
proto.dac.social.SocialProfile.prototype.getWebsite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setWebsite = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated SocialLink social_links = 12;
 * @return {!Array<!proto.dac.social.SocialLink>}
 */
proto.dac.social.SocialProfile.prototype.getSocialLinksList = function() {
  return /** @type{!Array<!proto.dac.social.SocialLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.SocialLink, 12));
};


/**
 * @param {!Array<!proto.dac.social.SocialLink>} value
 * @return {!proto.dac.social.SocialProfile} returns this
*/
proto.dac.social.SocialProfile.prototype.setSocialLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.dac.social.SocialLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.SocialLink}
 */
proto.dac.social.SocialProfile.prototype.addSocialLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.dac.social.SocialLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.clearSocialLinksList = function() {
  return this.setSocialLinksList([]);
};


/**
 * optional int32 reputation_score = 13;
 * @return {number}
 */
proto.dac.social.SocialProfile.prototype.getReputationScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setReputationScore = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional PrivacyLevel privacy_level = 14;
 * @return {!proto.dac.social.PrivacyLevel}
 */
proto.dac.social.SocialProfile.prototype.getPrivacyLevel = function() {
  return /** @type {!proto.dac.social.PrivacyLevel} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.dac.social.PrivacyLevel} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setPrivacyLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional VerificationStatus verification_status = 15;
 * @return {!proto.dac.social.VerificationStatus}
 */
proto.dac.social.SocialProfile.prototype.getVerificationStatus = function() {
  return /** @type {!proto.dac.social.VerificationStatus} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.dac.social.VerificationStatus} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setVerificationStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional ProfileStats stats = 16;
 * @return {?proto.dac.social.ProfileStats}
 */
proto.dac.social.SocialProfile.prototype.getStats = function() {
  return /** @type{?proto.dac.social.ProfileStats} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.ProfileStats, 16));
};


/**
 * @param {?proto.dac.social.ProfileStats|undefined} value
 * @return {!proto.dac.social.SocialProfile} returns this
*/
proto.dac.social.SocialProfile.prototype.setStats = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.clearStats = function() {
  return this.setStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.SocialProfile.prototype.hasStats = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.SocialProfile.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.SocialProfile} returns this
*/
proto.dac.social.SocialProfile.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.SocialProfile.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.SocialProfile.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.SocialProfile} returns this
*/
proto.dac.social.SocialProfile.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.SocialProfile.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool is_active = 19;
 * @return {boolean}
 */
proto.dac.social.SocialProfile.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * repeated ProfileBadge badges = 20;
 * @return {!Array<!proto.dac.social.ProfileBadge>}
 */
proto.dac.social.SocialProfile.prototype.getBadgesList = function() {
  return /** @type{!Array<!proto.dac.social.ProfileBadge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.ProfileBadge, 20));
};


/**
 * @param {!Array<!proto.dac.social.ProfileBadge>} value
 * @return {!proto.dac.social.SocialProfile} returns this
*/
proto.dac.social.SocialProfile.prototype.setBadgesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.dac.social.ProfileBadge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.ProfileBadge}
 */
proto.dac.social.SocialProfile.prototype.addBadges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.dac.social.ProfileBadge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.SocialProfile} returns this
 */
proto.dac.social.SocialProfile.prototype.clearBadgesList = function() {
  return this.setBadgesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.SocialLink.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.SocialLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.SocialLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SocialLink.toObject = function(includeInstance, msg) {
  var f, obj = {
    platform: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.SocialLink}
 */
proto.dac.social.SocialLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.SocialLink;
  return proto.dac.social.SocialLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.SocialLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.SocialLink}
 */
proto.dac.social.SocialLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.SocialLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.SocialLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.SocialLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SocialLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string platform = 1;
 * @return {string}
 */
proto.dac.social.SocialLink.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SocialLink} returns this
 */
proto.dac.social.SocialLink.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.dac.social.SocialLink.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SocialLink} returns this
 */
proto.dac.social.SocialLink.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool verified = 3;
 * @return {boolean}
 */
proto.dac.social.SocialLink.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.SocialLink} returns this
 */
proto.dac.social.SocialLink.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ProfileStats.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ProfileStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ProfileStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ProfileStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    followersCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    followingCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    postsCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    endorsementsReceived: jspb.Message.getFieldWithDefault(msg, 4, 0),
    endorsementsGiven: jspb.Message.getFieldWithDefault(msg, 5, 0),
    totalLikes: jspb.Message.getFieldWithDefault(msg, 6, 0),
    totalComments: jspb.Message.getFieldWithDefault(msg, 7, 0),
    engagementRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ProfileStats}
 */
proto.dac.social.ProfileStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ProfileStats;
  return proto.dac.social.ProfileStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ProfileStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ProfileStats}
 */
proto.dac.social.ProfileStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFollowersCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFollowingCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPostsCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndorsementsReceived(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndorsementsGiven(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalLikes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalComments(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEngagementRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ProfileStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ProfileStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ProfileStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ProfileStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowersCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFollowingCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPostsCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getEndorsementsReceived();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getEndorsementsGiven();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTotalLikes();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getTotalComments();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getEngagementRate();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional int32 followers_count = 1;
 * @return {number}
 */
proto.dac.social.ProfileStats.prototype.getFollowersCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ProfileStats} returns this
 */
proto.dac.social.ProfileStats.prototype.setFollowersCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 following_count = 2;
 * @return {number}
 */
proto.dac.social.ProfileStats.prototype.getFollowingCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ProfileStats} returns this
 */
proto.dac.social.ProfileStats.prototype.setFollowingCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 posts_count = 3;
 * @return {number}
 */
proto.dac.social.ProfileStats.prototype.getPostsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ProfileStats} returns this
 */
proto.dac.social.ProfileStats.prototype.setPostsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 endorsements_received = 4;
 * @return {number}
 */
proto.dac.social.ProfileStats.prototype.getEndorsementsReceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ProfileStats} returns this
 */
proto.dac.social.ProfileStats.prototype.setEndorsementsReceived = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 endorsements_given = 5;
 * @return {number}
 */
proto.dac.social.ProfileStats.prototype.getEndorsementsGiven = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ProfileStats} returns this
 */
proto.dac.social.ProfileStats.prototype.setEndorsementsGiven = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 total_likes = 6;
 * @return {number}
 */
proto.dac.social.ProfileStats.prototype.getTotalLikes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ProfileStats} returns this
 */
proto.dac.social.ProfileStats.prototype.setTotalLikes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 total_comments = 7;
 * @return {number}
 */
proto.dac.social.ProfileStats.prototype.getTotalComments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ProfileStats} returns this
 */
proto.dac.social.ProfileStats.prototype.setTotalComments = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional double engagement_rate = 8;
 * @return {number}
 */
proto.dac.social.ProfileStats.prototype.getEngagementRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ProfileStats} returns this
 */
proto.dac.social.ProfileStats.prototype.setEngagementRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ProfileBadge.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ProfileBadge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ProfileBadge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ProfileBadge.toObject = function(includeInstance, msg) {
  var f, obj = {
    badgeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    iconUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    category: jspb.Message.getFieldWithDefault(msg, 5, 0),
    earnedAt: (f = msg.getEarnedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ProfileBadge}
 */
proto.dac.social.ProfileBadge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ProfileBadge;
  return proto.dac.social.ProfileBadge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ProfileBadge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ProfileBadge}
 */
proto.dac.social.ProfileBadge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBadgeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconUrl(value);
      break;
    case 5:
      var value = /** @type {!proto.dac.social.BadgeCategory} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEarnedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ProfileBadge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ProfileBadge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ProfileBadge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ProfileBadge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBadgeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIconUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getEarnedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string badge_id = 1;
 * @return {string}
 */
proto.dac.social.ProfileBadge.prototype.getBadgeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ProfileBadge} returns this
 */
proto.dac.social.ProfileBadge.prototype.setBadgeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.dac.social.ProfileBadge.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ProfileBadge} returns this
 */
proto.dac.social.ProfileBadge.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.dac.social.ProfileBadge.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ProfileBadge} returns this
 */
proto.dac.social.ProfileBadge.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string icon_url = 4;
 * @return {string}
 */
proto.dac.social.ProfileBadge.prototype.getIconUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ProfileBadge} returns this
 */
proto.dac.social.ProfileBadge.prototype.setIconUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional BadgeCategory category = 5;
 * @return {!proto.dac.social.BadgeCategory}
 */
proto.dac.social.ProfileBadge.prototype.getCategory = function() {
  return /** @type {!proto.dac.social.BadgeCategory} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.dac.social.BadgeCategory} value
 * @return {!proto.dac.social.ProfileBadge} returns this
 */
proto.dac.social.ProfileBadge.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp earned_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.ProfileBadge.prototype.getEarnedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.ProfileBadge} returns this
*/
proto.dac.social.ProfileBadge.prototype.setEarnedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.ProfileBadge} returns this
 */
proto.dac.social.ProfileBadge.prototype.clearEarnedAt = function() {
  return this.setEarnedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.ProfileBadge.prototype.hasEarnedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.Post.repeatedFields_ = [5,6,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.Post.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.Post.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.Post} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Post.toObject = function(includeInstance, msg) {
  var f, obj = {
    postId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    mediaList: jspb.Message.toObjectList(msg.getMediaList(),
    proto.dac.social.PostMedia.toObject, includeInstance),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    visibility: jspb.Message.getFieldWithDefault(msg, 7, 0),
    likesCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    commentsCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    sharesCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    isPinned: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    author: (f = msg.getAuthor()) && proto.dac.social.SocialProfile.toObject(includeInstance, f),
    commentsList: jspb.Message.toObjectList(msg.getCommentsList(),
    proto.dac.social.Comment.toObject, includeInstance),
    hasLiked: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    metrics: (f = msg.getMetrics()) && proto.dac.social.PostMetrics.toObject(includeInstance, f),
    moderationStatus: jspb.Message.getFieldWithDefault(msg, 18, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.Post}
 */
proto.dac.social.Post.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.Post;
  return proto.dac.social.Post.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.Post} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.Post}
 */
proto.dac.social.Post.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {!proto.dac.social.PostType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = new proto.dac.social.PostMedia;
      reader.readMessage(value,proto.dac.social.PostMedia.deserializeBinaryFromReader);
      msg.addMedia(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 7:
      var value = /** @type {!proto.dac.social.PostVisibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLikesCount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCommentsCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSharesCount(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPinned(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 14:
      var value = new proto.dac.social.SocialProfile;
      reader.readMessage(value,proto.dac.social.SocialProfile.deserializeBinaryFromReader);
      msg.setAuthor(value);
      break;
    case 15:
      var value = new proto.dac.social.Comment;
      reader.readMessage(value,proto.dac.social.Comment.deserializeBinaryFromReader);
      msg.addComments(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasLiked(value);
      break;
    case 17:
      var value = new proto.dac.social.PostMetrics;
      reader.readMessage(value,proto.dac.social.PostMetrics.deserializeBinaryFromReader);
      msg.setMetrics(value);
      break;
    case 18:
      var value = /** @type {!proto.dac.social.ModerationStatus} */ (reader.readEnum());
      msg.setModerationStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.Post.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.Post.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.Post} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Post.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getMediaList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.dac.social.PostMedia.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getVisibility();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getLikesCount();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getCommentsCount();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getSharesCount();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getIsPinned();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAuthor();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.dac.social.SocialProfile.serializeBinaryToWriter
    );
  }
  f = message.getCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.dac.social.Comment.serializeBinaryToWriter
    );
  }
  f = message.getHasLiked();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getMetrics();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.dac.social.PostMetrics.serializeBinaryToWriter
    );
  }
  f = message.getModerationStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      18,
      f
    );
  }
};


/**
 * optional string post_id = 1;
 * @return {string}
 */
proto.dac.social.Post.prototype.getPostId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setPostId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string profile_id = 2;
 * @return {string}
 */
proto.dac.social.Post.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.dac.social.Post.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional PostType type = 4;
 * @return {!proto.dac.social.PostType}
 */
proto.dac.social.Post.prototype.getType = function() {
  return /** @type {!proto.dac.social.PostType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.social.PostType} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated PostMedia media = 5;
 * @return {!Array<!proto.dac.social.PostMedia>}
 */
proto.dac.social.Post.prototype.getMediaList = function() {
  return /** @type{!Array<!proto.dac.social.PostMedia>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.PostMedia, 5));
};


/**
 * @param {!Array<!proto.dac.social.PostMedia>} value
 * @return {!proto.dac.social.Post} returns this
*/
proto.dac.social.Post.prototype.setMediaList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.dac.social.PostMedia=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.PostMedia}
 */
proto.dac.social.Post.prototype.addMedia = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.dac.social.PostMedia, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.clearMediaList = function() {
  return this.setMediaList([]);
};


/**
 * repeated string tags = 6;
 * @return {!Array<string>}
 */
proto.dac.social.Post.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional PostVisibility visibility = 7;
 * @return {!proto.dac.social.PostVisibility}
 */
proto.dac.social.Post.prototype.getVisibility = function() {
  return /** @type {!proto.dac.social.PostVisibility} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.dac.social.PostVisibility} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional int32 likes_count = 8;
 * @return {number}
 */
proto.dac.social.Post.prototype.getLikesCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setLikesCount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 comments_count = 9;
 * @return {number}
 */
proto.dac.social.Post.prototype.getCommentsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setCommentsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 shares_count = 10;
 * @return {number}
 */
proto.dac.social.Post.prototype.getSharesCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setSharesCount = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool is_pinned = 11;
 * @return {boolean}
 */
proto.dac.social.Post.prototype.getIsPinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setIsPinned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.Post.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.Post} returns this
*/
proto.dac.social.Post.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Post.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.Post.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.Post} returns this
*/
proto.dac.social.Post.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Post.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional SocialProfile author = 14;
 * @return {?proto.dac.social.SocialProfile}
 */
proto.dac.social.Post.prototype.getAuthor = function() {
  return /** @type{?proto.dac.social.SocialProfile} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.SocialProfile, 14));
};


/**
 * @param {?proto.dac.social.SocialProfile|undefined} value
 * @return {!proto.dac.social.Post} returns this
*/
proto.dac.social.Post.prototype.setAuthor = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.clearAuthor = function() {
  return this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Post.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated Comment comments = 15;
 * @return {!Array<!proto.dac.social.Comment>}
 */
proto.dac.social.Post.prototype.getCommentsList = function() {
  return /** @type{!Array<!proto.dac.social.Comment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.Comment, 15));
};


/**
 * @param {!Array<!proto.dac.social.Comment>} value
 * @return {!proto.dac.social.Post} returns this
*/
proto.dac.social.Post.prototype.setCommentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.dac.social.Comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.Comment}
 */
proto.dac.social.Post.prototype.addComments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.dac.social.Comment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.clearCommentsList = function() {
  return this.setCommentsList([]);
};


/**
 * optional bool has_liked = 16;
 * @return {boolean}
 */
proto.dac.social.Post.prototype.getHasLiked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setHasLiked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional PostMetrics metrics = 17;
 * @return {?proto.dac.social.PostMetrics}
 */
proto.dac.social.Post.prototype.getMetrics = function() {
  return /** @type{?proto.dac.social.PostMetrics} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.PostMetrics, 17));
};


/**
 * @param {?proto.dac.social.PostMetrics|undefined} value
 * @return {!proto.dac.social.Post} returns this
*/
proto.dac.social.Post.prototype.setMetrics = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.clearMetrics = function() {
  return this.setMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Post.prototype.hasMetrics = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ModerationStatus moderation_status = 18;
 * @return {!proto.dac.social.ModerationStatus}
 */
proto.dac.social.Post.prototype.getModerationStatus = function() {
  return /** @type {!proto.dac.social.ModerationStatus} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.dac.social.ModerationStatus} value
 * @return {!proto.dac.social.Post} returns this
 */
proto.dac.social.Post.prototype.setModerationStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 18, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.PostMedia.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.PostMedia.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.PostMedia} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.PostMedia.toObject = function(includeInstance, msg) {
  var f, obj = {
    mediaId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    thumbnailUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    altText: jspb.Message.getFieldWithDefault(msg, 5, ""),
    metadata: (f = msg.getMetadata()) && proto.dac.social.MediaMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.PostMedia}
 */
proto.dac.social.PostMedia.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.PostMedia;
  return proto.dac.social.PostMedia.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.PostMedia} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.PostMedia}
 */
proto.dac.social.PostMedia.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.social.MediaType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAltText(value);
      break;
    case 6:
      var value = new proto.dac.social.MediaMetadata;
      reader.readMessage(value,proto.dac.social.MediaMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.PostMedia.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.PostMedia.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.PostMedia} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.PostMedia.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMediaId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getThumbnailUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAltText();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.dac.social.MediaMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string media_id = 1;
 * @return {string}
 */
proto.dac.social.PostMedia.prototype.getMediaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.PostMedia} returns this
 */
proto.dac.social.PostMedia.prototype.setMediaId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MediaType type = 2;
 * @return {!proto.dac.social.MediaType}
 */
proto.dac.social.PostMedia.prototype.getType = function() {
  return /** @type {!proto.dac.social.MediaType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.social.MediaType} value
 * @return {!proto.dac.social.PostMedia} returns this
 */
proto.dac.social.PostMedia.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.dac.social.PostMedia.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.PostMedia} returns this
 */
proto.dac.social.PostMedia.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string thumbnail_url = 4;
 * @return {string}
 */
proto.dac.social.PostMedia.prototype.getThumbnailUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.PostMedia} returns this
 */
proto.dac.social.PostMedia.prototype.setThumbnailUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string alt_text = 5;
 * @return {string}
 */
proto.dac.social.PostMedia.prototype.getAltText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.PostMedia} returns this
 */
proto.dac.social.PostMedia.prototype.setAltText = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional MediaMetadata metadata = 6;
 * @return {?proto.dac.social.MediaMetadata}
 */
proto.dac.social.PostMedia.prototype.getMetadata = function() {
  return /** @type{?proto.dac.social.MediaMetadata} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.MediaMetadata, 6));
};


/**
 * @param {?proto.dac.social.MediaMetadata|undefined} value
 * @return {!proto.dac.social.PostMedia} returns this
*/
proto.dac.social.PostMedia.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.PostMedia} returns this
 */
proto.dac.social.PostMedia.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.PostMedia.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.MediaMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.MediaMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.MediaMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.MediaMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    width: jspb.Message.getFieldWithDefault(msg, 1, 0),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fileSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 4, ""),
    format: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.MediaMetadata}
 */
proto.dac.social.MediaMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.MediaMetadata;
  return proto.dac.social.MediaMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.MediaMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.MediaMetadata}
 */
proto.dac.social.MediaMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDuration(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.MediaMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.MediaMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.MediaMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.MediaMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFileSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDuration();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 width = 1;
 * @return {number}
 */
proto.dac.social.MediaMetadata.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.MediaMetadata} returns this
 */
proto.dac.social.MediaMetadata.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 height = 2;
 * @return {number}
 */
proto.dac.social.MediaMetadata.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.MediaMetadata} returns this
 */
proto.dac.social.MediaMetadata.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 file_size = 3;
 * @return {number}
 */
proto.dac.social.MediaMetadata.prototype.getFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.MediaMetadata} returns this
 */
proto.dac.social.MediaMetadata.prototype.setFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string duration = 4;
 * @return {string}
 */
proto.dac.social.MediaMetadata.prototype.getDuration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MediaMetadata} returns this
 */
proto.dac.social.MediaMetadata.prototype.setDuration = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string format = 5;
 * @return {string}
 */
proto.dac.social.MediaMetadata.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MediaMetadata} returns this
 */
proto.dac.social.MediaMetadata.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.Comment.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.Comment.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.Comment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.Comment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Comment.toObject = function(includeInstance, msg) {
  var f, obj = {
    commentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    profileId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    parentCommentId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    likesCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    author: (f = msg.getAuthor()) && proto.dac.social.SocialProfile.toObject(includeInstance, f),
    hasLiked: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    repliesList: jspb.Message.toObjectList(msg.getRepliesList(),
    proto.dac.social.Comment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.Comment}
 */
proto.dac.social.Comment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.Comment;
  return proto.dac.social.Comment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.Comment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.Comment}
 */
proto.dac.social.Comment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentCommentId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLikesCount(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new proto.dac.social.SocialProfile;
      reader.readMessage(value,proto.dac.social.SocialProfile.deserializeBinaryFromReader);
      msg.setAuthor(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasLiked(value);
      break;
    case 10:
      var value = new proto.dac.social.Comment;
      reader.readMessage(value,proto.dac.social.Comment.deserializeBinaryFromReader);
      msg.addReplies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.Comment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.Comment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.Comment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Comment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLikesCount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAuthor();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.dac.social.SocialProfile.serializeBinaryToWriter
    );
  }
  f = message.getHasLiked();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getRepliesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.dac.social.Comment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string comment_id = 1;
 * @return {string}
 */
proto.dac.social.Comment.prototype.getCommentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.setCommentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string post_id = 2;
 * @return {string}
 */
proto.dac.social.Comment.prototype.getPostId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.setPostId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string profile_id = 3;
 * @return {string}
 */
proto.dac.social.Comment.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.dac.social.Comment.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string parent_comment_id = 5;
 * @return {string}
 */
proto.dac.social.Comment.prototype.getParentCommentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.setParentCommentId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.clearParentCommentId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Comment.prototype.hasParentCommentId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 likes_count = 6;
 * @return {number}
 */
proto.dac.social.Comment.prototype.getLikesCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.setLikesCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.Comment.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.Comment} returns this
*/
proto.dac.social.Comment.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Comment.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SocialProfile author = 8;
 * @return {?proto.dac.social.SocialProfile}
 */
proto.dac.social.Comment.prototype.getAuthor = function() {
  return /** @type{?proto.dac.social.SocialProfile} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.SocialProfile, 8));
};


/**
 * @param {?proto.dac.social.SocialProfile|undefined} value
 * @return {!proto.dac.social.Comment} returns this
*/
proto.dac.social.Comment.prototype.setAuthor = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.clearAuthor = function() {
  return this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Comment.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool has_liked = 9;
 * @return {boolean}
 */
proto.dac.social.Comment.prototype.getHasLiked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.setHasLiked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * repeated Comment replies = 10;
 * @return {!Array<!proto.dac.social.Comment>}
 */
proto.dac.social.Comment.prototype.getRepliesList = function() {
  return /** @type{!Array<!proto.dac.social.Comment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.Comment, 10));
};


/**
 * @param {!Array<!proto.dac.social.Comment>} value
 * @return {!proto.dac.social.Comment} returns this
*/
proto.dac.social.Comment.prototype.setRepliesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.dac.social.Comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.Comment}
 */
proto.dac.social.Comment.prototype.addReplies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.dac.social.Comment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.Comment} returns this
 */
proto.dac.social.Comment.prototype.clearRepliesList = function() {
  return this.setRepliesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.PostMetrics.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.PostMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.PostMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.PostMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.PostMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    impressions: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reach: jspb.Message.getFieldWithDefault(msg, 2, 0),
    engagementRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    clickThroughRate: jspb.Message.getFieldWithDefault(msg, 4, 0),
    topCountriesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    topAgeGroupsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.PostMetrics}
 */
proto.dac.social.PostMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.PostMetrics;
  return proto.dac.social.PostMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.PostMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.PostMetrics}
 */
proto.dac.social.PostMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setImpressions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReach(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEngagementRate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClickThroughRate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTopCountries(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTopAgeGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.PostMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.PostMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.PostMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.PostMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImpressions();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getReach();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEngagementRate();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getClickThroughRate();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTopCountriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getTopAgeGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional int32 impressions = 1;
 * @return {number}
 */
proto.dac.social.PostMetrics.prototype.getImpressions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.PostMetrics} returns this
 */
proto.dac.social.PostMetrics.prototype.setImpressions = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 reach = 2;
 * @return {number}
 */
proto.dac.social.PostMetrics.prototype.getReach = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.PostMetrics} returns this
 */
proto.dac.social.PostMetrics.prototype.setReach = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double engagement_rate = 3;
 * @return {number}
 */
proto.dac.social.PostMetrics.prototype.getEngagementRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.PostMetrics} returns this
 */
proto.dac.social.PostMetrics.prototype.setEngagementRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 click_through_rate = 4;
 * @return {number}
 */
proto.dac.social.PostMetrics.prototype.getClickThroughRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.PostMetrics} returns this
 */
proto.dac.social.PostMetrics.prototype.setClickThroughRate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string top_countries = 5;
 * @return {!Array<string>}
 */
proto.dac.social.PostMetrics.prototype.getTopCountriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.PostMetrics} returns this
 */
proto.dac.social.PostMetrics.prototype.setTopCountriesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.PostMetrics} returns this
 */
proto.dac.social.PostMetrics.prototype.addTopCountries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.PostMetrics} returns this
 */
proto.dac.social.PostMetrics.prototype.clearTopCountriesList = function() {
  return this.setTopCountriesList([]);
};


/**
 * repeated string top_age_groups = 6;
 * @return {!Array<string>}
 */
proto.dac.social.PostMetrics.prototype.getTopAgeGroupsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.PostMetrics} returns this
 */
proto.dac.social.PostMetrics.prototype.setTopAgeGroupsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.PostMetrics} returns this
 */
proto.dac.social.PostMetrics.prototype.addTopAgeGroups = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.PostMetrics} returns this
 */
proto.dac.social.PostMetrics.prototype.clearTopAgeGroupsList = function() {
  return this.setTopAgeGroupsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.Message.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    conversationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    senderProfileId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recipientProfileId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.dac.social.MessageAttachment.toObject, includeInstance),
    sentAt: (f = msg.getSentAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    readAt: (f = msg.getReadAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    isEncrypted: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    encryptionKeyId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    sender: (f = msg.getSender()) && proto.dac.social.SocialProfile.toObject(includeInstance, f),
    moderationStatus: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.Message}
 */
proto.dac.social.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.Message;
  return proto.dac.social.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.Message}
 */
proto.dac.social.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderProfileId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientProfileId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {!proto.dac.social.MessageType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 7:
      var value = new proto.dac.social.MessageAttachment;
      reader.readMessage(value,proto.dac.social.MessageAttachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSentAt(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReadAt(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEncrypted(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncryptionKeyId(value);
      break;
    case 12:
      var value = new proto.dac.social.SocialProfile;
      reader.readMessage(value,proto.dac.social.SocialProfile.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    case 13:
      var value = /** @type {!proto.dac.social.ModerationStatus} */ (reader.readEnum());
      msg.setModerationStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConversationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSenderProfileId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecipientProfileId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.dac.social.MessageAttachment.serializeBinaryToWriter
    );
  }
  f = message.getSentAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReadAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIsEncrypted();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getEncryptionKeyId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSender();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.dac.social.SocialProfile.serializeBinaryToWriter
    );
  }
  f = message.getModerationStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
};


/**
 * optional string message_id = 1;
 * @return {string}
 */
proto.dac.social.Message.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string conversation_id = 2;
 * @return {string}
 */
proto.dac.social.Message.prototype.getConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.setConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sender_profile_id = 3;
 * @return {string}
 */
proto.dac.social.Message.prototype.getSenderProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.setSenderProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string recipient_profile_id = 4;
 * @return {string}
 */
proto.dac.social.Message.prototype.getRecipientProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.setRecipientProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.dac.social.Message.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional MessageType type = 6;
 * @return {!proto.dac.social.MessageType}
 */
proto.dac.social.Message.prototype.getType = function() {
  return /** @type {!proto.dac.social.MessageType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.dac.social.MessageType} value
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated MessageAttachment attachments = 7;
 * @return {!Array<!proto.dac.social.MessageAttachment>}
 */
proto.dac.social.Message.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.dac.social.MessageAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.MessageAttachment, 7));
};


/**
 * @param {!Array<!proto.dac.social.MessageAttachment>} value
 * @return {!proto.dac.social.Message} returns this
*/
proto.dac.social.Message.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.dac.social.MessageAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.MessageAttachment}
 */
proto.dac.social.Message.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.dac.social.MessageAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional google.protobuf.Timestamp sent_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.Message.prototype.getSentAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.Message} returns this
*/
proto.dac.social.Message.prototype.setSentAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.clearSentAt = function() {
  return this.setSentAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Message.prototype.hasSentAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp read_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.Message.prototype.getReadAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.Message} returns this
*/
proto.dac.social.Message.prototype.setReadAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.clearReadAt = function() {
  return this.setReadAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Message.prototype.hasReadAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool is_encrypted = 10;
 * @return {boolean}
 */
proto.dac.social.Message.prototype.getIsEncrypted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.setIsEncrypted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string encryption_key_id = 11;
 * @return {string}
 */
proto.dac.social.Message.prototype.getEncryptionKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.setEncryptionKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional SocialProfile sender = 12;
 * @return {?proto.dac.social.SocialProfile}
 */
proto.dac.social.Message.prototype.getSender = function() {
  return /** @type{?proto.dac.social.SocialProfile} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.SocialProfile, 12));
};


/**
 * @param {?proto.dac.social.SocialProfile|undefined} value
 * @return {!proto.dac.social.Message} returns this
*/
proto.dac.social.Message.prototype.setSender = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.clearSender = function() {
  return this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Message.prototype.hasSender = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ModerationStatus moderation_status = 13;
 * @return {!proto.dac.social.ModerationStatus}
 */
proto.dac.social.Message.prototype.getModerationStatus = function() {
  return /** @type {!proto.dac.social.ModerationStatus} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.dac.social.ModerationStatus} value
 * @return {!proto.dac.social.Message} returns this
 */
proto.dac.social.Message.prototype.setModerationStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.MessageAttachment.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.MessageAttachment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.MessageAttachment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.MessageAttachment.toObject = function(includeInstance, msg) {
  var f, obj = {
    attachmentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fileSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    mimeType: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.MessageAttachment}
 */
proto.dac.social.MessageAttachment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.MessageAttachment;
  return proto.dac.social.MessageAttachment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.MessageAttachment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.MessageAttachment}
 */
proto.dac.social.MessageAttachment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachmentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {!proto.dac.social.AttachmentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimeType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.MessageAttachment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.MessageAttachment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.MessageAttachment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.MessageAttachment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttachmentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getFileSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getMimeType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string attachment_id = 1;
 * @return {string}
 */
proto.dac.social.MessageAttachment.prototype.getAttachmentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MessageAttachment} returns this
 */
proto.dac.social.MessageAttachment.prototype.setAttachmentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.dac.social.MessageAttachment.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MessageAttachment} returns this
 */
proto.dac.social.MessageAttachment.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.dac.social.MessageAttachment.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MessageAttachment} returns this
 */
proto.dac.social.MessageAttachment.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AttachmentType type = 4;
 * @return {!proto.dac.social.AttachmentType}
 */
proto.dac.social.MessageAttachment.prototype.getType = function() {
  return /** @type {!proto.dac.social.AttachmentType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.social.AttachmentType} value
 * @return {!proto.dac.social.MessageAttachment} returns this
 */
proto.dac.social.MessageAttachment.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 file_size = 5;
 * @return {number}
 */
proto.dac.social.MessageAttachment.prototype.getFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.MessageAttachment} returns this
 */
proto.dac.social.MessageAttachment.prototype.setFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string mime_type = 6;
 * @return {string}
 */
proto.dac.social.MessageAttachment.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MessageAttachment} returns this
 */
proto.dac.social.MessageAttachment.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.Conversation.repeatedFields_ = [2,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.Conversation.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.Conversation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.Conversation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Conversation.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    participantProfileIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    lastMessageContent: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastMessageAt: (f = msg.getLastMessageAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    unreadCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isArchived: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isMuted: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    participantsList: jspb.Message.toObjectList(msg.getParticipantsList(),
    proto.dac.social.SocialProfile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.Conversation}
 */
proto.dac.social.Conversation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.Conversation;
  return proto.dac.social.Conversation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.Conversation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.Conversation}
 */
proto.dac.social.Conversation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addParticipantProfileIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastMessageContent(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastMessageAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUnreadCount(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsArchived(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMuted(value);
      break;
    case 8:
      var value = new proto.dac.social.SocialProfile;
      reader.readMessage(value,proto.dac.social.SocialProfile.deserializeBinaryFromReader);
      msg.addParticipants(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.Conversation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.Conversation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.Conversation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Conversation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParticipantProfileIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getLastMessageContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastMessageAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUnreadCount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getIsArchived();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsMuted();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.dac.social.SocialProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string conversation_id = 1;
 * @return {string}
 */
proto.dac.social.Conversation.prototype.getConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Conversation} returns this
 */
proto.dac.social.Conversation.prototype.setConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string participant_profile_ids = 2;
 * @return {!Array<string>}
 */
proto.dac.social.Conversation.prototype.getParticipantProfileIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.Conversation} returns this
 */
proto.dac.social.Conversation.prototype.setParticipantProfileIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.Conversation} returns this
 */
proto.dac.social.Conversation.prototype.addParticipantProfileIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.Conversation} returns this
 */
proto.dac.social.Conversation.prototype.clearParticipantProfileIdsList = function() {
  return this.setParticipantProfileIdsList([]);
};


/**
 * optional string last_message_content = 3;
 * @return {string}
 */
proto.dac.social.Conversation.prototype.getLastMessageContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Conversation} returns this
 */
proto.dac.social.Conversation.prototype.setLastMessageContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp last_message_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.Conversation.prototype.getLastMessageAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.Conversation} returns this
*/
proto.dac.social.Conversation.prototype.setLastMessageAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Conversation} returns this
 */
proto.dac.social.Conversation.prototype.clearLastMessageAt = function() {
  return this.setLastMessageAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Conversation.prototype.hasLastMessageAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 unread_count = 5;
 * @return {number}
 */
proto.dac.social.Conversation.prototype.getUnreadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.Conversation} returns this
 */
proto.dac.social.Conversation.prototype.setUnreadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool is_archived = 6;
 * @return {boolean}
 */
proto.dac.social.Conversation.prototype.getIsArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.Conversation} returns this
 */
proto.dac.social.Conversation.prototype.setIsArchived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_muted = 7;
 * @return {boolean}
 */
proto.dac.social.Conversation.prototype.getIsMuted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.Conversation} returns this
 */
proto.dac.social.Conversation.prototype.setIsMuted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated SocialProfile participants = 8;
 * @return {!Array<!proto.dac.social.SocialProfile>}
 */
proto.dac.social.Conversation.prototype.getParticipantsList = function() {
  return /** @type{!Array<!proto.dac.social.SocialProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.SocialProfile, 8));
};


/**
 * @param {!Array<!proto.dac.social.SocialProfile>} value
 * @return {!proto.dac.social.Conversation} returns this
*/
proto.dac.social.Conversation.prototype.setParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.dac.social.SocialProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.SocialProfile}
 */
proto.dac.social.Conversation.prototype.addParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.dac.social.SocialProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.Conversation} returns this
 */
proto.dac.social.Conversation.prototype.clearParticipantsList = function() {
  return this.setParticipantsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.Follow.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.Follow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.Follow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Follow.toObject = function(includeInstance, msg) {
  var f, obj = {
    followId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    followerProfileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    followedProfileId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    follower: (f = msg.getFollower()) && proto.dac.social.SocialProfile.toObject(includeInstance, f),
    followed: (f = msg.getFollowed()) && proto.dac.social.SocialProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.Follow}
 */
proto.dac.social.Follow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.Follow;
  return proto.dac.social.Follow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.Follow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.Follow}
 */
proto.dac.social.Follow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowerProfileId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowedProfileId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = /** @type {!proto.dac.social.FollowStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new proto.dac.social.SocialProfile;
      reader.readMessage(value,proto.dac.social.SocialProfile.deserializeBinaryFromReader);
      msg.setFollower(value);
      break;
    case 7:
      var value = new proto.dac.social.SocialProfile;
      reader.readMessage(value,proto.dac.social.SocialProfile.deserializeBinaryFromReader);
      msg.setFollowed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.Follow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.Follow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.Follow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Follow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFollowerProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFollowedProfileId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getFollower();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.dac.social.SocialProfile.serializeBinaryToWriter
    );
  }
  f = message.getFollowed();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.dac.social.SocialProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string follow_id = 1;
 * @return {string}
 */
proto.dac.social.Follow.prototype.getFollowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Follow} returns this
 */
proto.dac.social.Follow.prototype.setFollowId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string follower_profile_id = 2;
 * @return {string}
 */
proto.dac.social.Follow.prototype.getFollowerProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Follow} returns this
 */
proto.dac.social.Follow.prototype.setFollowerProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string followed_profile_id = 3;
 * @return {string}
 */
proto.dac.social.Follow.prototype.getFollowedProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Follow} returns this
 */
proto.dac.social.Follow.prototype.setFollowedProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.Follow.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.Follow} returns this
*/
proto.dac.social.Follow.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Follow} returns this
 */
proto.dac.social.Follow.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Follow.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FollowStatus status = 5;
 * @return {!proto.dac.social.FollowStatus}
 */
proto.dac.social.Follow.prototype.getStatus = function() {
  return /** @type {!proto.dac.social.FollowStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.dac.social.FollowStatus} value
 * @return {!proto.dac.social.Follow} returns this
 */
proto.dac.social.Follow.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional SocialProfile follower = 6;
 * @return {?proto.dac.social.SocialProfile}
 */
proto.dac.social.Follow.prototype.getFollower = function() {
  return /** @type{?proto.dac.social.SocialProfile} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.SocialProfile, 6));
};


/**
 * @param {?proto.dac.social.SocialProfile|undefined} value
 * @return {!proto.dac.social.Follow} returns this
*/
proto.dac.social.Follow.prototype.setFollower = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Follow} returns this
 */
proto.dac.social.Follow.prototype.clearFollower = function() {
  return this.setFollower(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Follow.prototype.hasFollower = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SocialProfile followed = 7;
 * @return {?proto.dac.social.SocialProfile}
 */
proto.dac.social.Follow.prototype.getFollowed = function() {
  return /** @type{?proto.dac.social.SocialProfile} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.SocialProfile, 7));
};


/**
 * @param {?proto.dac.social.SocialProfile|undefined} value
 * @return {!proto.dac.social.Follow} returns this
*/
proto.dac.social.Follow.prototype.setFollowed = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Follow} returns this
 */
proto.dac.social.Follow.prototype.clearFollowed = function() {
  return this.setFollowed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Follow.prototype.hasFollowed = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.Endorsement.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.Endorsement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.Endorsement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Endorsement.toObject = function(includeInstance, msg) {
  var f, obj = {
    endorsementId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endorserProfileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    endorsedProfileId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    skill: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0),
    weight: jspb.Message.getFieldWithDefault(msg, 7, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endorser: (f = msg.getEndorser()) && proto.dac.social.SocialProfile.toObject(includeInstance, f),
    isMutual: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.Endorsement}
 */
proto.dac.social.Endorsement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.Endorsement;
  return proto.dac.social.Endorsement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.Endorsement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.Endorsement}
 */
proto.dac.social.Endorsement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndorsementId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndorserProfileId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndorsedProfileId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkill(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {!proto.dac.social.EndorsementType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWeight(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 9:
      var value = new proto.dac.social.SocialProfile;
      reader.readMessage(value,proto.dac.social.SocialProfile.deserializeBinaryFromReader);
      msg.setEndorser(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMutual(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.Endorsement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.Endorsement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.Endorsement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.Endorsement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndorsementId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndorserProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEndorsedProfileId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSkill();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndorser();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.dac.social.SocialProfile.serializeBinaryToWriter
    );
  }
  f = message.getIsMutual();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string endorsement_id = 1;
 * @return {string}
 */
proto.dac.social.Endorsement.prototype.getEndorsementId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Endorsement} returns this
 */
proto.dac.social.Endorsement.prototype.setEndorsementId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string endorser_profile_id = 2;
 * @return {string}
 */
proto.dac.social.Endorsement.prototype.getEndorserProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Endorsement} returns this
 */
proto.dac.social.Endorsement.prototype.setEndorserProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string endorsed_profile_id = 3;
 * @return {string}
 */
proto.dac.social.Endorsement.prototype.getEndorsedProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Endorsement} returns this
 */
proto.dac.social.Endorsement.prototype.setEndorsedProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string skill = 4;
 * @return {string}
 */
proto.dac.social.Endorsement.prototype.getSkill = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Endorsement} returns this
 */
proto.dac.social.Endorsement.prototype.setSkill = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.dac.social.Endorsement.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.Endorsement} returns this
 */
proto.dac.social.Endorsement.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional EndorsementType type = 6;
 * @return {!proto.dac.social.EndorsementType}
 */
proto.dac.social.Endorsement.prototype.getType = function() {
  return /** @type {!proto.dac.social.EndorsementType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.dac.social.EndorsementType} value
 * @return {!proto.dac.social.Endorsement} returns this
 */
proto.dac.social.Endorsement.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional int32 weight = 7;
 * @return {number}
 */
proto.dac.social.Endorsement.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.Endorsement} returns this
 */
proto.dac.social.Endorsement.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.Endorsement.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.Endorsement} returns this
*/
proto.dac.social.Endorsement.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Endorsement} returns this
 */
proto.dac.social.Endorsement.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Endorsement.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SocialProfile endorser = 9;
 * @return {?proto.dac.social.SocialProfile}
 */
proto.dac.social.Endorsement.prototype.getEndorser = function() {
  return /** @type{?proto.dac.social.SocialProfile} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.SocialProfile, 9));
};


/**
 * @param {?proto.dac.social.SocialProfile|undefined} value
 * @return {!proto.dac.social.Endorsement} returns this
*/
proto.dac.social.Endorsement.prototype.setEndorser = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.Endorsement} returns this
 */
proto.dac.social.Endorsement.prototype.clearEndorser = function() {
  return this.setEndorser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.Endorsement.prototype.hasEndorser = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool is_mutual = 10;
 * @return {boolean}
 */
proto.dac.social.Endorsement.prototype.getIsMutual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.Endorsement} returns this
 */
proto.dac.social.Endorsement.prototype.setIsMutual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ReputationUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ReputationUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ReputationUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReputationUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    updateId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    previousScore: jspb.Message.getFieldWithDefault(msg, 3, 0),
    newScore: jspb.Message.getFieldWithDefault(msg, 4, 0),
    change: jspb.Message.getFieldWithDefault(msg, 5, 0),
    source: jspb.Message.getFieldWithDefault(msg, 6, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 7, ""),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ReputationUpdate}
 */
proto.dac.social.ReputationUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ReputationUpdate;
  return proto.dac.social.ReputationUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ReputationUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ReputationUpdate}
 */
proto.dac.social.ReputationUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdateId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPreviousScore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNewScore(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChange(value);
      break;
    case 6:
      var value = /** @type {!proto.dac.social.ReputationSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ReputationUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ReputationUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ReputationUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReputationUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdateId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPreviousScore();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNewScore();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getChange();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string update_id = 1;
 * @return {string}
 */
proto.dac.social.ReputationUpdate.prototype.getUpdateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ReputationUpdate} returns this
 */
proto.dac.social.ReputationUpdate.prototype.setUpdateId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string profile_id = 2;
 * @return {string}
 */
proto.dac.social.ReputationUpdate.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ReputationUpdate} returns this
 */
proto.dac.social.ReputationUpdate.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 previous_score = 3;
 * @return {number}
 */
proto.dac.social.ReputationUpdate.prototype.getPreviousScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationUpdate} returns this
 */
proto.dac.social.ReputationUpdate.prototype.setPreviousScore = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 new_score = 4;
 * @return {number}
 */
proto.dac.social.ReputationUpdate.prototype.getNewScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationUpdate} returns this
 */
proto.dac.social.ReputationUpdate.prototype.setNewScore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 change = 5;
 * @return {number}
 */
proto.dac.social.ReputationUpdate.prototype.getChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationUpdate} returns this
 */
proto.dac.social.ReputationUpdate.prototype.setChange = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional ReputationSource source = 6;
 * @return {!proto.dac.social.ReputationSource}
 */
proto.dac.social.ReputationUpdate.prototype.getSource = function() {
  return /** @type {!proto.dac.social.ReputationSource} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.dac.social.ReputationSource} value
 * @return {!proto.dac.social.ReputationUpdate} returns this
 */
proto.dac.social.ReputationUpdate.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string reason = 7;
 * @return {string}
 */
proto.dac.social.ReputationUpdate.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ReputationUpdate} returns this
 */
proto.dac.social.ReputationUpdate.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.ReputationUpdate.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.ReputationUpdate} returns this
*/
proto.dac.social.ReputationUpdate.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.ReputationUpdate} returns this
 */
proto.dac.social.ReputationUpdate.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.ReputationUpdate.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.CreateProfileRequest.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.CreateProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.CreateProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.CreateProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.CreateProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pseudonym: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bio: jspb.Message.getFieldWithDefault(msg, 4, ""),
    interestsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    skillsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    privacyLevel: jspb.Message.getFieldWithDefault(msg, 7, 0),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.CreateProfileRequest}
 */
proto.dac.social.CreateProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.CreateProfileRequest;
  return proto.dac.social.CreateProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.CreateProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.CreateProfileRequest}
 */
proto.dac.social.CreateProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPseudonym(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBio(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addInterests(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addSkills(value);
      break;
    case 7:
      var value = /** @type {!proto.dac.social.PrivacyLevel} */ (reader.readEnum());
      msg.setPrivacyLevel(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.CreateProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.CreateProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.CreateProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.CreateProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPseudonym();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBio();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInterestsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getPrivacyLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int32 user_id = 1;
 * @return {number}
 */
proto.dac.social.CreateProfileRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string pseudonym = 2;
 * @return {string}
 */
proto.dac.social.CreateProfileRequest.prototype.getPseudonym = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.setPseudonym = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.dac.social.CreateProfileRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string bio = 4;
 * @return {string}
 */
proto.dac.social.CreateProfileRequest.prototype.getBio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.setBio = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string interests = 5;
 * @return {!Array<string>}
 */
proto.dac.social.CreateProfileRequest.prototype.getInterestsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.setInterestsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.addInterests = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.clearInterestsList = function() {
  return this.setInterestsList([]);
};


/**
 * repeated string skills = 6;
 * @return {!Array<string>}
 */
proto.dac.social.CreateProfileRequest.prototype.getSkillsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.setSkillsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.addSkills = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * optional PrivacyLevel privacy_level = 7;
 * @return {!proto.dac.social.PrivacyLevel}
 */
proto.dac.social.CreateProfileRequest.prototype.getPrivacyLevel = function() {
  return /** @type {!proto.dac.social.PrivacyLevel} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.dac.social.PrivacyLevel} value
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.setPrivacyLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string avatar_url = 8;
 * @return {string}
 */
proto.dac.social.CreateProfileRequest.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.CreateProfileRequest} returns this
 */
proto.dac.social.CreateProfileRequest.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.dac.social.GetProfileRequest.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.dac.social.GetProfileRequest.IdentifierCase = {
  IDENTIFIER_NOT_SET: 0,
  PROFILE_ID: 1,
  PSEUDONYM: 2,
  USER_ID: 3
};

/**
 * @return {proto.dac.social.GetProfileRequest.IdentifierCase}
 */
proto.dac.social.GetProfileRequest.prototype.getIdentifierCase = function() {
  return /** @type {proto.dac.social.GetProfileRequest.IdentifierCase} */(jspb.Message.computeOneofCase(this, proto.dac.social.GetProfileRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pseudonym: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    includeStats: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    includeBadges: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetProfileRequest}
 */
proto.dac.social.GetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetProfileRequest;
  return proto.dac.social.GetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetProfileRequest}
 */
proto.dac.social.GetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPseudonym(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeStats(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeBadges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIncludeStats();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIncludeBadges();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.GetProfileRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetProfileRequest} returns this
 */
proto.dac.social.GetProfileRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.dac.social.GetProfileRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.GetProfileRequest} returns this
 */
proto.dac.social.GetProfileRequest.prototype.clearProfileId = function() {
  return jspb.Message.setOneofField(this, 1, proto.dac.social.GetProfileRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.GetProfileRequest.prototype.hasProfileId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pseudonym = 2;
 * @return {string}
 */
proto.dac.social.GetProfileRequest.prototype.getPseudonym = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetProfileRequest} returns this
 */
proto.dac.social.GetProfileRequest.prototype.setPseudonym = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.dac.social.GetProfileRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.GetProfileRequest} returns this
 */
proto.dac.social.GetProfileRequest.prototype.clearPseudonym = function() {
  return jspb.Message.setOneofField(this, 2, proto.dac.social.GetProfileRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.GetProfileRequest.prototype.hasPseudonym = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 user_id = 3;
 * @return {number}
 */
proto.dac.social.GetProfileRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetProfileRequest} returns this
 */
proto.dac.social.GetProfileRequest.prototype.setUserId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.dac.social.GetProfileRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.GetProfileRequest} returns this
 */
proto.dac.social.GetProfileRequest.prototype.clearUserId = function() {
  return jspb.Message.setOneofField(this, 3, proto.dac.social.GetProfileRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.GetProfileRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool include_stats = 4;
 * @return {boolean}
 */
proto.dac.social.GetProfileRequest.prototype.getIncludeStats = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetProfileRequest} returns this
 */
proto.dac.social.GetProfileRequest.prototype.setIncludeStats = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool include_badges = 5;
 * @return {boolean}
 */
proto.dac.social.GetProfileRequest.prototype.getIncludeBadges = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetProfileRequest} returns this
 */
proto.dac.social.GetProfileRequest.prototype.setIncludeBadges = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.UpdateProfileRequest.repeatedFields_ = [4,5,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.UpdateProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.UpdateProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.UpdateProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UpdateProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bio: jspb.Message.getFieldWithDefault(msg, 3, ""),
    interestsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    skillsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    bannerUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    location: jspb.Message.getFieldWithDefault(msg, 8, ""),
    website: jspb.Message.getFieldWithDefault(msg, 9, ""),
    socialLinksList: jspb.Message.toObjectList(msg.getSocialLinksList(),
    proto.dac.social.SocialLink.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.UpdateProfileRequest}
 */
proto.dac.social.UpdateProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.UpdateProfileRequest;
  return proto.dac.social.UpdateProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.UpdateProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.UpdateProfileRequest}
 */
proto.dac.social.UpdateProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBio(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addInterests(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addSkills(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBannerUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebsite(value);
      break;
    case 10:
      var value = new proto.dac.social.SocialLink;
      reader.readMessage(value,proto.dac.social.SocialLink.deserializeBinaryFromReader);
      msg.addSocialLinks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.UpdateProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.UpdateProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.UpdateProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UpdateProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInterestsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSocialLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.dac.social.SocialLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.UpdateProfileRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.dac.social.UpdateProfileRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdateProfileRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string bio = 3;
 * @return {string}
 */
proto.dac.social.UpdateProfileRequest.prototype.getBio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.setBio = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.clearBio = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdateProfileRequest.prototype.hasBio = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string interests = 4;
 * @return {!Array<string>}
 */
proto.dac.social.UpdateProfileRequest.prototype.getInterestsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.setInterestsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.addInterests = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.clearInterestsList = function() {
  return this.setInterestsList([]);
};


/**
 * repeated string skills = 5;
 * @return {!Array<string>}
 */
proto.dac.social.UpdateProfileRequest.prototype.getSkillsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.setSkillsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.addSkills = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * optional string avatar_url = 6;
 * @return {string}
 */
proto.dac.social.UpdateProfileRequest.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.clearAvatarUrl = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdateProfileRequest.prototype.hasAvatarUrl = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string banner_url = 7;
 * @return {string}
 */
proto.dac.social.UpdateProfileRequest.prototype.getBannerUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.setBannerUrl = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.clearBannerUrl = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdateProfileRequest.prototype.hasBannerUrl = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string location = 8;
 * @return {string}
 */
proto.dac.social.UpdateProfileRequest.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.setLocation = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.clearLocation = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdateProfileRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string website = 9;
 * @return {string}
 */
proto.dac.social.UpdateProfileRequest.prototype.getWebsite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.setWebsite = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.clearWebsite = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdateProfileRequest.prototype.hasWebsite = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated SocialLink social_links = 10;
 * @return {!Array<!proto.dac.social.SocialLink>}
 */
proto.dac.social.UpdateProfileRequest.prototype.getSocialLinksList = function() {
  return /** @type{!Array<!proto.dac.social.SocialLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.SocialLink, 10));
};


/**
 * @param {!Array<!proto.dac.social.SocialLink>} value
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
*/
proto.dac.social.UpdateProfileRequest.prototype.setSocialLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.dac.social.SocialLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.SocialLink}
 */
proto.dac.social.UpdateProfileRequest.prototype.addSocialLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.dac.social.SocialLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.UpdateProfileRequest} returns this
 */
proto.dac.social.UpdateProfileRequest.prototype.clearSocialLinksList = function() {
  return this.setSocialLinksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.SearchProfilesRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.SearchProfilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.SearchProfilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.SearchProfilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SearchProfilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, ""),
    skillsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    interestsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    location: jspb.Message.getFieldWithDefault(msg, 4, ""),
    page: jspb.Message.getFieldWithDefault(msg, 5, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 6, 0),
    sort: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.SearchProfilesRequest}
 */
proto.dac.social.SearchProfilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.SearchProfilesRequest;
  return proto.dac.social.SearchProfilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.SearchProfilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.SearchProfilesRequest}
 */
proto.dac.social.SearchProfilesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSkills(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addInterests(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 7:
      var value = /** @type {!proto.dac.social.ProfileSearchSort} */ (reader.readEnum());
      msg.setSort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.SearchProfilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.SearchProfilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.SearchProfilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SearchProfilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getInterestsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getSort();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.dac.social.SearchProfilesRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string skills = 2;
 * @return {!Array<string>}
 */
proto.dac.social.SearchProfilesRequest.prototype.getSkillsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.setSkillsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.addSkills = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * repeated string interests = 3;
 * @return {!Array<string>}
 */
proto.dac.social.SearchProfilesRequest.prototype.getInterestsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.setInterestsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.addInterests = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.clearInterestsList = function() {
  return this.setInterestsList([]);
};


/**
 * optional string location = 4;
 * @return {string}
 */
proto.dac.social.SearchProfilesRequest.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.setLocation = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.clearLocation = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.SearchProfilesRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 page = 5;
 * @return {number}
 */
proto.dac.social.SearchProfilesRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 limit = 6;
 * @return {number}
 */
proto.dac.social.SearchProfilesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional ProfileSearchSort sort = 7;
 * @return {!proto.dac.social.ProfileSearchSort}
 */
proto.dac.social.SearchProfilesRequest.prototype.getSort = function() {
  return /** @type {!proto.dac.social.ProfileSearchSort} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.dac.social.ProfileSearchSort} value
 * @return {!proto.dac.social.SearchProfilesRequest} returns this
 */
proto.dac.social.SearchProfilesRequest.prototype.setSort = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.SearchProfilesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.SearchProfilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.SearchProfilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.SearchProfilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SearchProfilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    profilesList: jspb.Message.toObjectList(msg.getProfilesList(),
    proto.dac.social.SocialProfile.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hasNext: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.SearchProfilesResponse}
 */
proto.dac.social.SearchProfilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.SearchProfilesResponse;
  return proto.dac.social.SearchProfilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.SearchProfilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.SearchProfilesResponse}
 */
proto.dac.social.SearchProfilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.social.SocialProfile;
      reader.readMessage(value,proto.dac.social.SocialProfile.deserializeBinaryFromReader);
      msg.addProfiles(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.SearchProfilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.SearchProfilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.SearchProfilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SearchProfilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.social.SocialProfile.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getHasNext();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * repeated SocialProfile profiles = 1;
 * @return {!Array<!proto.dac.social.SocialProfile>}
 */
proto.dac.social.SearchProfilesResponse.prototype.getProfilesList = function() {
  return /** @type{!Array<!proto.dac.social.SocialProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.SocialProfile, 1));
};


/**
 * @param {!Array<!proto.dac.social.SocialProfile>} value
 * @return {!proto.dac.social.SearchProfilesResponse} returns this
*/
proto.dac.social.SearchProfilesResponse.prototype.setProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.social.SocialProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.SocialProfile}
 */
proto.dac.social.SearchProfilesResponse.prototype.addProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.social.SocialProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.SearchProfilesResponse} returns this
 */
proto.dac.social.SearchProfilesResponse.prototype.clearProfilesList = function() {
  return this.setProfilesList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.social.SearchProfilesResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.SearchProfilesResponse} returns this
 */
proto.dac.social.SearchProfilesResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.dac.social.SearchProfilesResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.SearchProfilesResponse} returns this
 */
proto.dac.social.SearchProfilesResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.social.SearchProfilesResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.SearchProfilesResponse} returns this
 */
proto.dac.social.SearchProfilesResponse.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool has_next = 5;
 * @return {boolean}
 */
proto.dac.social.SearchProfilesResponse.prototype.getHasNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.SearchProfilesResponse} returns this
 */
proto.dac.social.SearchProfilesResponse.prototype.setHasNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.CreatePostRequest.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.CreatePostRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.CreatePostRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.CreatePostRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.CreatePostRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mediaList: jspb.Message.toObjectList(msg.getMediaList(),
    proto.dac.social.PostMedia.toObject, includeInstance),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    visibility: jspb.Message.getFieldWithDefault(msg, 6, 0),
    isPinned: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.CreatePostRequest}
 */
proto.dac.social.CreatePostRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.CreatePostRequest;
  return proto.dac.social.CreatePostRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.CreatePostRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.CreatePostRequest}
 */
proto.dac.social.CreatePostRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.social.PostType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new proto.dac.social.PostMedia;
      reader.readMessage(value,proto.dac.social.PostMedia.deserializeBinaryFromReader);
      msg.addMedia(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 6:
      var value = /** @type {!proto.dac.social.PostVisibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPinned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.CreatePostRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.CreatePostRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.CreatePostRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.CreatePostRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMediaList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.social.PostMedia.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getVisibility();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getIsPinned();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.CreatePostRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.CreatePostRequest} returns this
 */
proto.dac.social.CreatePostRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.dac.social.CreatePostRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.CreatePostRequest} returns this
 */
proto.dac.social.CreatePostRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PostType type = 3;
 * @return {!proto.dac.social.PostType}
 */
proto.dac.social.CreatePostRequest.prototype.getType = function() {
  return /** @type {!proto.dac.social.PostType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.social.PostType} value
 * @return {!proto.dac.social.CreatePostRequest} returns this
 */
proto.dac.social.CreatePostRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated PostMedia media = 4;
 * @return {!Array<!proto.dac.social.PostMedia>}
 */
proto.dac.social.CreatePostRequest.prototype.getMediaList = function() {
  return /** @type{!Array<!proto.dac.social.PostMedia>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.PostMedia, 4));
};


/**
 * @param {!Array<!proto.dac.social.PostMedia>} value
 * @return {!proto.dac.social.CreatePostRequest} returns this
*/
proto.dac.social.CreatePostRequest.prototype.setMediaList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.social.PostMedia=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.PostMedia}
 */
proto.dac.social.CreatePostRequest.prototype.addMedia = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.social.PostMedia, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.CreatePostRequest} returns this
 */
proto.dac.social.CreatePostRequest.prototype.clearMediaList = function() {
  return this.setMediaList([]);
};


/**
 * repeated string tags = 5;
 * @return {!Array<string>}
 */
proto.dac.social.CreatePostRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.CreatePostRequest} returns this
 */
proto.dac.social.CreatePostRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.CreatePostRequest} returns this
 */
proto.dac.social.CreatePostRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.CreatePostRequest} returns this
 */
proto.dac.social.CreatePostRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional PostVisibility visibility = 6;
 * @return {!proto.dac.social.PostVisibility}
 */
proto.dac.social.CreatePostRequest.prototype.getVisibility = function() {
  return /** @type {!proto.dac.social.PostVisibility} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.dac.social.PostVisibility} value
 * @return {!proto.dac.social.CreatePostRequest} returns this
 */
proto.dac.social.CreatePostRequest.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional bool is_pinned = 7;
 * @return {boolean}
 */
proto.dac.social.CreatePostRequest.prototype.getIsPinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.CreatePostRequest} returns this
 */
proto.dac.social.CreatePostRequest.prototype.setIsPinned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetPostRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetPostRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetPostRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetPostRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    postId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeComments: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    includeMetrics: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetPostRequest}
 */
proto.dac.social.GetPostRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetPostRequest;
  return proto.dac.social.GetPostRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetPostRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetPostRequest}
 */
proto.dac.social.GetPostRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeComments(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeMetrics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetPostRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetPostRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetPostRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetPostRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeComments();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIncludeMetrics();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string post_id = 1;
 * @return {string}
 */
proto.dac.social.GetPostRequest.prototype.getPostId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetPostRequest} returns this
 */
proto.dac.social.GetPostRequest.prototype.setPostId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_comments = 2;
 * @return {boolean}
 */
proto.dac.social.GetPostRequest.prototype.getIncludeComments = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetPostRequest} returns this
 */
proto.dac.social.GetPostRequest.prototype.setIncludeComments = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool include_metrics = 3;
 * @return {boolean}
 */
proto.dac.social.GetPostRequest.prototype.getIncludeMetrics = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetPostRequest} returns this
 */
proto.dac.social.GetPostRequest.prototype.setIncludeMetrics = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.UpdatePostRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.UpdatePostRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.UpdatePostRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.UpdatePostRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UpdatePostRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    postId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    visibility: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isPinned: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.UpdatePostRequest}
 */
proto.dac.social.UpdatePostRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.UpdatePostRequest;
  return proto.dac.social.UpdatePostRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.UpdatePostRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.UpdatePostRequest}
 */
proto.dac.social.UpdatePostRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 4:
      var value = /** @type {!proto.dac.social.PostVisibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPinned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.UpdatePostRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.UpdatePostRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.UpdatePostRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UpdatePostRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = /** @type {!proto.dac.social.PostVisibility} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string post_id = 1;
 * @return {string}
 */
proto.dac.social.UpdatePostRequest.prototype.getPostId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdatePostRequest} returns this
 */
proto.dac.social.UpdatePostRequest.prototype.setPostId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.dac.social.UpdatePostRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdatePostRequest} returns this
 */
proto.dac.social.UpdatePostRequest.prototype.setContent = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.UpdatePostRequest} returns this
 */
proto.dac.social.UpdatePostRequest.prototype.clearContent = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdatePostRequest.prototype.hasContent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string tags = 3;
 * @return {!Array<string>}
 */
proto.dac.social.UpdatePostRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.UpdatePostRequest} returns this
 */
proto.dac.social.UpdatePostRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.UpdatePostRequest} returns this
 */
proto.dac.social.UpdatePostRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.UpdatePostRequest} returns this
 */
proto.dac.social.UpdatePostRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional PostVisibility visibility = 4;
 * @return {!proto.dac.social.PostVisibility}
 */
proto.dac.social.UpdatePostRequest.prototype.getVisibility = function() {
  return /** @type {!proto.dac.social.PostVisibility} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.social.PostVisibility} value
 * @return {!proto.dac.social.UpdatePostRequest} returns this
 */
proto.dac.social.UpdatePostRequest.prototype.setVisibility = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.UpdatePostRequest} returns this
 */
proto.dac.social.UpdatePostRequest.prototype.clearVisibility = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdatePostRequest.prototype.hasVisibility = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_pinned = 5;
 * @return {boolean}
 */
proto.dac.social.UpdatePostRequest.prototype.getIsPinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.UpdatePostRequest} returns this
 */
proto.dac.social.UpdatePostRequest.prototype.setIsPinned = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.UpdatePostRequest} returns this
 */
proto.dac.social.UpdatePostRequest.prototype.clearIsPinned = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdatePostRequest.prototype.hasIsPinned = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.DeletePostRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.DeletePostRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.DeletePostRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.DeletePostRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    postId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.DeletePostRequest}
 */
proto.dac.social.DeletePostRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.DeletePostRequest;
  return proto.dac.social.DeletePostRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.DeletePostRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.DeletePostRequest}
 */
proto.dac.social.DeletePostRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.DeletePostRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.DeletePostRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.DeletePostRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.DeletePostRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string post_id = 1;
 * @return {string}
 */
proto.dac.social.DeletePostRequest.prototype.getPostId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.DeletePostRequest} returns this
 */
proto.dac.social.DeletePostRequest.prototype.setPostId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.dac.social.DeletePostRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.DeletePostRequest} returns this
 */
proto.dac.social.DeletePostRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetFeedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetFeedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetFeedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetFeedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    feedType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cursor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    filter: (f = msg.getFilter()) && proto.dac.social.FeedFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetFeedRequest}
 */
proto.dac.social.GetFeedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetFeedRequest;
  return proto.dac.social.GetFeedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetFeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetFeedRequest}
 */
proto.dac.social.GetFeedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.social.FeedType} */ (reader.readEnum());
      msg.setFeedType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 5:
      var value = new proto.dac.social.FeedFilter;
      reader.readMessage(value,proto.dac.social.FeedFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetFeedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetFeedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetFeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetFeedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeedType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.dac.social.FeedFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.GetFeedRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetFeedRequest} returns this
 */
proto.dac.social.GetFeedRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional FeedType feed_type = 2;
 * @return {!proto.dac.social.FeedType}
 */
proto.dac.social.GetFeedRequest.prototype.getFeedType = function() {
  return /** @type {!proto.dac.social.FeedType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.social.FeedType} value
 * @return {!proto.dac.social.GetFeedRequest} returns this
 */
proto.dac.social.GetFeedRequest.prototype.setFeedType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string cursor = 3;
 * @return {string}
 */
proto.dac.social.GetFeedRequest.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetFeedRequest} returns this
 */
proto.dac.social.GetFeedRequest.prototype.setCursor = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.GetFeedRequest} returns this
 */
proto.dac.social.GetFeedRequest.prototype.clearCursor = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.GetFeedRequest.prototype.hasCursor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.social.GetFeedRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFeedRequest} returns this
 */
proto.dac.social.GetFeedRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional FeedFilter filter = 5;
 * @return {?proto.dac.social.FeedFilter}
 */
proto.dac.social.GetFeedRequest.prototype.getFilter = function() {
  return /** @type{?proto.dac.social.FeedFilter} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.FeedFilter, 5));
};


/**
 * @param {?proto.dac.social.FeedFilter|undefined} value
 * @return {!proto.dac.social.GetFeedRequest} returns this
*/
proto.dac.social.GetFeedRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.GetFeedRequest} returns this
 */
proto.dac.social.GetFeedRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.GetFeedRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.FeedFilter.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.FeedFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.FeedFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.FeedFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.FeedFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    postTypesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    tagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    since: (f = msg.getSince()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    until: (f = msg.getUntil()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.FeedFilter}
 */
proto.dac.social.FeedFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.FeedFilter;
  return proto.dac.social.FeedFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.FeedFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.FeedFilter}
 */
proto.dac.social.FeedFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.dac.social.PostType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPostTypes(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSince(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUntil(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.FeedFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.FeedFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.FeedFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.FeedFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSince();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUntil();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PostType post_types = 1;
 * @return {!Array<!proto.dac.social.PostType>}
 */
proto.dac.social.FeedFilter.prototype.getPostTypesList = function() {
  return /** @type {!Array<!proto.dac.social.PostType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.dac.social.PostType>} value
 * @return {!proto.dac.social.FeedFilter} returns this
 */
proto.dac.social.FeedFilter.prototype.setPostTypesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.dac.social.PostType} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.FeedFilter} returns this
 */
proto.dac.social.FeedFilter.prototype.addPostTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.FeedFilter} returns this
 */
proto.dac.social.FeedFilter.prototype.clearPostTypesList = function() {
  return this.setPostTypesList([]);
};


/**
 * repeated string tags = 2;
 * @return {!Array<string>}
 */
proto.dac.social.FeedFilter.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.FeedFilter} returns this
 */
proto.dac.social.FeedFilter.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.FeedFilter} returns this
 */
proto.dac.social.FeedFilter.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.FeedFilter} returns this
 */
proto.dac.social.FeedFilter.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional google.protobuf.Timestamp since = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.FeedFilter.prototype.getSince = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.FeedFilter} returns this
*/
proto.dac.social.FeedFilter.prototype.setSince = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.FeedFilter} returns this
 */
proto.dac.social.FeedFilter.prototype.clearSince = function() {
  return this.setSince(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.FeedFilter.prototype.hasSince = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp until = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.FeedFilter.prototype.getUntil = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.FeedFilter} returns this
*/
proto.dac.social.FeedFilter.prototype.setUntil = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.FeedFilter} returns this
 */
proto.dac.social.FeedFilter.prototype.clearUntil = function() {
  return this.setUntil(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.FeedFilter.prototype.hasUntil = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetUserPostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetUserPostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetUserPostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetUserPostsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    includePinned: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetUserPostsRequest}
 */
proto.dac.social.GetUserPostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetUserPostsRequest;
  return proto.dac.social.GetUserPostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetUserPostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetUserPostsRequest}
 */
proto.dac.social.GetUserPostsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.social.PostType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludePinned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetUserPostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetUserPostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetUserPostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetUserPostsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.dac.social.PostType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getIncludePinned();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.GetUserPostsRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetUserPostsRequest} returns this
 */
proto.dac.social.GetUserPostsRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PostType type = 2;
 * @return {!proto.dac.social.PostType}
 */
proto.dac.social.GetUserPostsRequest.prototype.getType = function() {
  return /** @type {!proto.dac.social.PostType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.social.PostType} value
 * @return {!proto.dac.social.GetUserPostsRequest} returns this
 */
proto.dac.social.GetUserPostsRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.GetUserPostsRequest} returns this
 */
proto.dac.social.GetUserPostsRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.GetUserPostsRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.dac.social.GetUserPostsRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetUserPostsRequest} returns this
 */
proto.dac.social.GetUserPostsRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.social.GetUserPostsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetUserPostsRequest} returns this
 */
proto.dac.social.GetUserPostsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool include_pinned = 5;
 * @return {boolean}
 */
proto.dac.social.GetUserPostsRequest.prototype.getIncludePinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetUserPostsRequest} returns this
 */
proto.dac.social.GetUserPostsRequest.prototype.setIncludePinned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.GetUserPostsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetUserPostsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetUserPostsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetUserPostsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetUserPostsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postsList: jspb.Message.toObjectList(msg.getPostsList(),
    proto.dac.social.Post.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hasNext: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetUserPostsResponse}
 */
proto.dac.social.GetUserPostsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetUserPostsResponse;
  return proto.dac.social.GetUserPostsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetUserPostsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetUserPostsResponse}
 */
proto.dac.social.GetUserPostsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.social.Post;
      reader.readMessage(value,proto.dac.social.Post.deserializeBinaryFromReader);
      msg.addPosts(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetUserPostsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetUserPostsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetUserPostsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetUserPostsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.social.Post.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getHasNext();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * repeated Post posts = 1;
 * @return {!Array<!proto.dac.social.Post>}
 */
proto.dac.social.GetUserPostsResponse.prototype.getPostsList = function() {
  return /** @type{!Array<!proto.dac.social.Post>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.Post, 1));
};


/**
 * @param {!Array<!proto.dac.social.Post>} value
 * @return {!proto.dac.social.GetUserPostsResponse} returns this
*/
proto.dac.social.GetUserPostsResponse.prototype.setPostsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.social.Post=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.Post}
 */
proto.dac.social.GetUserPostsResponse.prototype.addPosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.social.Post, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.GetUserPostsResponse} returns this
 */
proto.dac.social.GetUserPostsResponse.prototype.clearPostsList = function() {
  return this.setPostsList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.social.GetUserPostsResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetUserPostsResponse} returns this
 */
proto.dac.social.GetUserPostsResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.dac.social.GetUserPostsResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetUserPostsResponse} returns this
 */
proto.dac.social.GetUserPostsResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.social.GetUserPostsResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetUserPostsResponse} returns this
 */
proto.dac.social.GetUserPostsResponse.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool has_next = 5;
 * @return {boolean}
 */
proto.dac.social.GetUserPostsResponse.prototype.getHasNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetUserPostsResponse} returns this
 */
proto.dac.social.GetUserPostsResponse.prototype.setHasNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.FollowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.FollowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.FollowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.FollowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    followerProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    followedProfileId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.FollowRequest}
 */
proto.dac.social.FollowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.FollowRequest;
  return proto.dac.social.FollowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.FollowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.FollowRequest}
 */
proto.dac.social.FollowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowerProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowedProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.FollowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.FollowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.FollowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.FollowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowerProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFollowedProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string follower_profile_id = 1;
 * @return {string}
 */
proto.dac.social.FollowRequest.prototype.getFollowerProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.FollowRequest} returns this
 */
proto.dac.social.FollowRequest.prototype.setFollowerProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string followed_profile_id = 2;
 * @return {string}
 */
proto.dac.social.FollowRequest.prototype.getFollowedProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.FollowRequest} returns this
 */
proto.dac.social.FollowRequest.prototype.setFollowedProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.FollowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.FollowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.FollowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.FollowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.FollowResponse}
 */
proto.dac.social.FollowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.FollowResponse;
  return proto.dac.social.FollowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.FollowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.FollowResponse}
 */
proto.dac.social.FollowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.social.FollowStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.FollowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.FollowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.FollowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.FollowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.dac.social.FollowResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.FollowResponse} returns this
 */
proto.dac.social.FollowResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional FollowStatus status = 2;
 * @return {!proto.dac.social.FollowStatus}
 */
proto.dac.social.FollowResponse.prototype.getStatus = function() {
  return /** @type {!proto.dac.social.FollowStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.social.FollowStatus} value
 * @return {!proto.dac.social.FollowResponse} returns this
 */
proto.dac.social.FollowResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.dac.social.FollowResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.FollowResponse} returns this
 */
proto.dac.social.FollowResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.UnfollowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.UnfollowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.UnfollowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UnfollowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    followerProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    followedProfileId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.UnfollowRequest}
 */
proto.dac.social.UnfollowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.UnfollowRequest;
  return proto.dac.social.UnfollowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.UnfollowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.UnfollowRequest}
 */
proto.dac.social.UnfollowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowerProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowedProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.UnfollowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.UnfollowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.UnfollowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UnfollowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowerProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFollowedProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string follower_profile_id = 1;
 * @return {string}
 */
proto.dac.social.UnfollowRequest.prototype.getFollowerProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UnfollowRequest} returns this
 */
proto.dac.social.UnfollowRequest.prototype.setFollowerProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string followed_profile_id = 2;
 * @return {string}
 */
proto.dac.social.UnfollowRequest.prototype.getFollowedProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UnfollowRequest} returns this
 */
proto.dac.social.UnfollowRequest.prototype.setFollowedProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetFollowersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetFollowersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetFollowersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetFollowersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    page: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetFollowersRequest}
 */
proto.dac.social.GetFollowersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetFollowersRequest;
  return proto.dac.social.GetFollowersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetFollowersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetFollowersRequest}
 */
proto.dac.social.GetFollowersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetFollowersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetFollowersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetFollowersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetFollowersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.GetFollowersRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetFollowersRequest} returns this
 */
proto.dac.social.GetFollowersRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page = 2;
 * @return {number}
 */
proto.dac.social.GetFollowersRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFollowersRequest} returns this
 */
proto.dac.social.GetFollowersRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 limit = 3;
 * @return {number}
 */
proto.dac.social.GetFollowersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFollowersRequest} returns this
 */
proto.dac.social.GetFollowersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.GetFollowersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetFollowersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetFollowersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetFollowersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetFollowersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    followersList: jspb.Message.toObjectList(msg.getFollowersList(),
    proto.dac.social.Follow.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hasNext: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetFollowersResponse}
 */
proto.dac.social.GetFollowersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetFollowersResponse;
  return proto.dac.social.GetFollowersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetFollowersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetFollowersResponse}
 */
proto.dac.social.GetFollowersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.social.Follow;
      reader.readMessage(value,proto.dac.social.Follow.deserializeBinaryFromReader);
      msg.addFollowers(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetFollowersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetFollowersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetFollowersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetFollowersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.social.Follow.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getHasNext();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * repeated Follow followers = 1;
 * @return {!Array<!proto.dac.social.Follow>}
 */
proto.dac.social.GetFollowersResponse.prototype.getFollowersList = function() {
  return /** @type{!Array<!proto.dac.social.Follow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.Follow, 1));
};


/**
 * @param {!Array<!proto.dac.social.Follow>} value
 * @return {!proto.dac.social.GetFollowersResponse} returns this
*/
proto.dac.social.GetFollowersResponse.prototype.setFollowersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.social.Follow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.Follow}
 */
proto.dac.social.GetFollowersResponse.prototype.addFollowers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.social.Follow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.GetFollowersResponse} returns this
 */
proto.dac.social.GetFollowersResponse.prototype.clearFollowersList = function() {
  return this.setFollowersList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.social.GetFollowersResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFollowersResponse} returns this
 */
proto.dac.social.GetFollowersResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.dac.social.GetFollowersResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFollowersResponse} returns this
 */
proto.dac.social.GetFollowersResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.social.GetFollowersResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFollowersResponse} returns this
 */
proto.dac.social.GetFollowersResponse.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool has_next = 5;
 * @return {boolean}
 */
proto.dac.social.GetFollowersResponse.prototype.getHasNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetFollowersResponse} returns this
 */
proto.dac.social.GetFollowersResponse.prototype.setHasNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetFollowingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetFollowingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetFollowingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetFollowingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    page: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetFollowingRequest}
 */
proto.dac.social.GetFollowingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetFollowingRequest;
  return proto.dac.social.GetFollowingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetFollowingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetFollowingRequest}
 */
proto.dac.social.GetFollowingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetFollowingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetFollowingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetFollowingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetFollowingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.GetFollowingRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetFollowingRequest} returns this
 */
proto.dac.social.GetFollowingRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page = 2;
 * @return {number}
 */
proto.dac.social.GetFollowingRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFollowingRequest} returns this
 */
proto.dac.social.GetFollowingRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 limit = 3;
 * @return {number}
 */
proto.dac.social.GetFollowingRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFollowingRequest} returns this
 */
proto.dac.social.GetFollowingRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.GetFollowingResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetFollowingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetFollowingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetFollowingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetFollowingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    followingList: jspb.Message.toObjectList(msg.getFollowingList(),
    proto.dac.social.Follow.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hasNext: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetFollowingResponse}
 */
proto.dac.social.GetFollowingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetFollowingResponse;
  return proto.dac.social.GetFollowingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetFollowingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetFollowingResponse}
 */
proto.dac.social.GetFollowingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.social.Follow;
      reader.readMessage(value,proto.dac.social.Follow.deserializeBinaryFromReader);
      msg.addFollowing(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetFollowingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetFollowingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetFollowingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetFollowingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.social.Follow.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getHasNext();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * repeated Follow following = 1;
 * @return {!Array<!proto.dac.social.Follow>}
 */
proto.dac.social.GetFollowingResponse.prototype.getFollowingList = function() {
  return /** @type{!Array<!proto.dac.social.Follow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.Follow, 1));
};


/**
 * @param {!Array<!proto.dac.social.Follow>} value
 * @return {!proto.dac.social.GetFollowingResponse} returns this
*/
proto.dac.social.GetFollowingResponse.prototype.setFollowingList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.social.Follow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.Follow}
 */
proto.dac.social.GetFollowingResponse.prototype.addFollowing = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.social.Follow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.GetFollowingResponse} returns this
 */
proto.dac.social.GetFollowingResponse.prototype.clearFollowingList = function() {
  return this.setFollowingList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.social.GetFollowingResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFollowingResponse} returns this
 */
proto.dac.social.GetFollowingResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.dac.social.GetFollowingResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFollowingResponse} returns this
 */
proto.dac.social.GetFollowingResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.social.GetFollowingResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetFollowingResponse} returns this
 */
proto.dac.social.GetFollowingResponse.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool has_next = 5;
 * @return {boolean}
 */
proto.dac.social.GetFollowingResponse.prototype.getHasNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetFollowingResponse} returns this
 */
proto.dac.social.GetFollowingResponse.prototype.setHasNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.CheckFollowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.CheckFollowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.CheckFollowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.CheckFollowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    followerProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    followedProfileId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.CheckFollowRequest}
 */
proto.dac.social.CheckFollowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.CheckFollowRequest;
  return proto.dac.social.CheckFollowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.CheckFollowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.CheckFollowRequest}
 */
proto.dac.social.CheckFollowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowerProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowedProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.CheckFollowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.CheckFollowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.CheckFollowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.CheckFollowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowerProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFollowedProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string follower_profile_id = 1;
 * @return {string}
 */
proto.dac.social.CheckFollowRequest.prototype.getFollowerProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.CheckFollowRequest} returns this
 */
proto.dac.social.CheckFollowRequest.prototype.setFollowerProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string followed_profile_id = 2;
 * @return {string}
 */
proto.dac.social.CheckFollowRequest.prototype.getFollowedProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.CheckFollowRequest} returns this
 */
proto.dac.social.CheckFollowRequest.prototype.setFollowedProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.CheckFollowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.CheckFollowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.CheckFollowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.CheckFollowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isFollowing: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    followedAt: (f = msg.getFollowedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.CheckFollowResponse}
 */
proto.dac.social.CheckFollowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.CheckFollowResponse;
  return proto.dac.social.CheckFollowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.CheckFollowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.CheckFollowResponse}
 */
proto.dac.social.CheckFollowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFollowing(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.social.FollowStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFollowedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.CheckFollowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.CheckFollowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.CheckFollowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.CheckFollowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsFollowing();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFollowedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool is_following = 1;
 * @return {boolean}
 */
proto.dac.social.CheckFollowResponse.prototype.getIsFollowing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.CheckFollowResponse} returns this
 */
proto.dac.social.CheckFollowResponse.prototype.setIsFollowing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional FollowStatus status = 2;
 * @return {!proto.dac.social.FollowStatus}
 */
proto.dac.social.CheckFollowResponse.prototype.getStatus = function() {
  return /** @type {!proto.dac.social.FollowStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.social.FollowStatus} value
 * @return {!proto.dac.social.CheckFollowResponse} returns this
 */
proto.dac.social.CheckFollowResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp followed_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.CheckFollowResponse.prototype.getFollowedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.CheckFollowResponse} returns this
*/
proto.dac.social.CheckFollowResponse.prototype.setFollowedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.CheckFollowResponse} returns this
 */
proto.dac.social.CheckFollowResponse.prototype.clearFollowedAt = function() {
  return this.setFollowedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.CheckFollowResponse.prototype.hasFollowedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.SendMessageRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.SendMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.SendMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.SendMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SendMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    senderProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recipientProfileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.dac.social.MessageAttachment.toObject, includeInstance),
    encrypt: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.SendMessageRequest}
 */
proto.dac.social.SendMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.SendMessageRequest;
  return proto.dac.social.SendMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.SendMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.SendMessageRequest}
 */
proto.dac.social.SendMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientProfileId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {!proto.dac.social.MessageType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = new proto.dac.social.MessageAttachment;
      reader.readMessage(value,proto.dac.social.MessageAttachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEncrypt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.SendMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.SendMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.SendMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SendMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSenderProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecipientProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.dac.social.MessageAttachment.serializeBinaryToWriter
    );
  }
  f = message.getEncrypt();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string sender_profile_id = 1;
 * @return {string}
 */
proto.dac.social.SendMessageRequest.prototype.getSenderProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SendMessageRequest} returns this
 */
proto.dac.social.SendMessageRequest.prototype.setSenderProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string recipient_profile_id = 2;
 * @return {string}
 */
proto.dac.social.SendMessageRequest.prototype.getRecipientProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SendMessageRequest} returns this
 */
proto.dac.social.SendMessageRequest.prototype.setRecipientProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.dac.social.SendMessageRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SendMessageRequest} returns this
 */
proto.dac.social.SendMessageRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional MessageType type = 4;
 * @return {!proto.dac.social.MessageType}
 */
proto.dac.social.SendMessageRequest.prototype.getType = function() {
  return /** @type {!proto.dac.social.MessageType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.social.MessageType} value
 * @return {!proto.dac.social.SendMessageRequest} returns this
 */
proto.dac.social.SendMessageRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated MessageAttachment attachments = 5;
 * @return {!Array<!proto.dac.social.MessageAttachment>}
 */
proto.dac.social.SendMessageRequest.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.dac.social.MessageAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.MessageAttachment, 5));
};


/**
 * @param {!Array<!proto.dac.social.MessageAttachment>} value
 * @return {!proto.dac.social.SendMessageRequest} returns this
*/
proto.dac.social.SendMessageRequest.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.dac.social.MessageAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.MessageAttachment}
 */
proto.dac.social.SendMessageRequest.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.dac.social.MessageAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.SendMessageRequest} returns this
 */
proto.dac.social.SendMessageRequest.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional bool encrypt = 6;
 * @return {boolean}
 */
proto.dac.social.SendMessageRequest.prototype.getEncrypt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.SendMessageRequest} returns this
 */
proto.dac.social.SendMessageRequest.prototype.setEncrypt = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.MessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.MessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.MessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.MessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: (f = msg.getMessage()) && proto.dac.social.Message.toObject(includeInstance, f),
    conversationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.MessageResponse}
 */
proto.dac.social.MessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.MessageResponse;
  return proto.dac.social.MessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.MessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.MessageResponse}
 */
proto.dac.social.MessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = new proto.dac.social.Message;
      reader.readMessage(value,proto.dac.social.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.MessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.MessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.MessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.MessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.social.Message.serializeBinaryToWriter
    );
  }
  f = message.getConversationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.dac.social.MessageResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.MessageResponse} returns this
 */
proto.dac.social.MessageResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Message message = 2;
 * @return {?proto.dac.social.Message}
 */
proto.dac.social.MessageResponse.prototype.getMessage = function() {
  return /** @type{?proto.dac.social.Message} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.Message, 2));
};


/**
 * @param {?proto.dac.social.Message|undefined} value
 * @return {!proto.dac.social.MessageResponse} returns this
*/
proto.dac.social.MessageResponse.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.MessageResponse} returns this
 */
proto.dac.social.MessageResponse.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.MessageResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string conversation_id = 3;
 * @return {string}
 */
proto.dac.social.MessageResponse.prototype.getConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MessageResponse} returns this
 */
proto.dac.social.MessageResponse.prototype.setConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string error_message = 4;
 * @return {string}
 */
proto.dac.social.MessageResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MessageResponse} returns this
 */
proto.dac.social.MessageResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.MessageResponse} returns this
 */
proto.dac.social.MessageResponse.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.MessageResponse.prototype.hasErrorMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetConversationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetConversationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetConversationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetConversationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestingProfileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cursor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetConversationRequest}
 */
proto.dac.social.GetConversationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetConversationRequest;
  return proto.dac.social.GetConversationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetConversationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetConversationRequest}
 */
proto.dac.social.GetConversationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestingProfileId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetConversationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetConversationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetConversationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetConversationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestingProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string conversation_id = 1;
 * @return {string}
 */
proto.dac.social.GetConversationRequest.prototype.getConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetConversationRequest} returns this
 */
proto.dac.social.GetConversationRequest.prototype.setConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string requesting_profile_id = 2;
 * @return {string}
 */
proto.dac.social.GetConversationRequest.prototype.getRequestingProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetConversationRequest} returns this
 */
proto.dac.social.GetConversationRequest.prototype.setRequestingProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cursor = 3;
 * @return {string}
 */
proto.dac.social.GetConversationRequest.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetConversationRequest} returns this
 */
proto.dac.social.GetConversationRequest.prototype.setCursor = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.GetConversationRequest} returns this
 */
proto.dac.social.GetConversationRequest.prototype.clearCursor = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.GetConversationRequest.prototype.hasCursor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.social.GetConversationRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetConversationRequest} returns this
 */
proto.dac.social.GetConversationRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetInboxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetInboxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetInboxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetInboxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    page: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    includeArchived: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetInboxRequest}
 */
proto.dac.social.GetInboxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetInboxRequest;
  return proto.dac.social.GetInboxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetInboxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetInboxRequest}
 */
proto.dac.social.GetInboxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeArchived(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetInboxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetInboxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetInboxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetInboxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIncludeArchived();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.GetInboxRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetInboxRequest} returns this
 */
proto.dac.social.GetInboxRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page = 2;
 * @return {number}
 */
proto.dac.social.GetInboxRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetInboxRequest} returns this
 */
proto.dac.social.GetInboxRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 limit = 3;
 * @return {number}
 */
proto.dac.social.GetInboxRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetInboxRequest} returns this
 */
proto.dac.social.GetInboxRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool include_archived = 4;
 * @return {boolean}
 */
proto.dac.social.GetInboxRequest.prototype.getIncludeArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetInboxRequest} returns this
 */
proto.dac.social.GetInboxRequest.prototype.setIncludeArchived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.GetInboxResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetInboxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetInboxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetInboxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetInboxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationsList: jspb.Message.toObjectList(msg.getConversationsList(),
    proto.dac.social.Conversation.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unreadCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    page: jspb.Message.getFieldWithDefault(msg, 4, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    hasNext: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetInboxResponse}
 */
proto.dac.social.GetInboxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetInboxResponse;
  return proto.dac.social.GetInboxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetInboxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetInboxResponse}
 */
proto.dac.social.GetInboxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.social.Conversation;
      reader.readMessage(value,proto.dac.social.Conversation.deserializeBinaryFromReader);
      msg.addConversations(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUnreadCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetInboxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetInboxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetInboxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetInboxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.social.Conversation.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUnreadCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getHasNext();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * repeated Conversation conversations = 1;
 * @return {!Array<!proto.dac.social.Conversation>}
 */
proto.dac.social.GetInboxResponse.prototype.getConversationsList = function() {
  return /** @type{!Array<!proto.dac.social.Conversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.Conversation, 1));
};


/**
 * @param {!Array<!proto.dac.social.Conversation>} value
 * @return {!proto.dac.social.GetInboxResponse} returns this
*/
proto.dac.social.GetInboxResponse.prototype.setConversationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.social.Conversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.Conversation}
 */
proto.dac.social.GetInboxResponse.prototype.addConversations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.social.Conversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.GetInboxResponse} returns this
 */
proto.dac.social.GetInboxResponse.prototype.clearConversationsList = function() {
  return this.setConversationsList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.social.GetInboxResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetInboxResponse} returns this
 */
proto.dac.social.GetInboxResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 unread_count = 3;
 * @return {number}
 */
proto.dac.social.GetInboxResponse.prototype.getUnreadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetInboxResponse} returns this
 */
proto.dac.social.GetInboxResponse.prototype.setUnreadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.dac.social.GetInboxResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetInboxResponse} returns this
 */
proto.dac.social.GetInboxResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 limit = 5;
 * @return {number}
 */
proto.dac.social.GetInboxResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetInboxResponse} returns this
 */
proto.dac.social.GetInboxResponse.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool has_next = 6;
 * @return {boolean}
 */
proto.dac.social.GetInboxResponse.prototype.getHasNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetInboxResponse} returns this
 */
proto.dac.social.GetInboxResponse.prototype.setHasNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.MarkReadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.MarkReadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.MarkReadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.MarkReadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    readerProfileId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.MarkReadRequest}
 */
proto.dac.social.MarkReadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.MarkReadRequest;
  return proto.dac.social.MarkReadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.MarkReadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.MarkReadRequest}
 */
proto.dac.social.MarkReadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReaderProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.MarkReadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.MarkReadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.MarkReadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.MarkReadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReaderProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string message_id = 1;
 * @return {string}
 */
proto.dac.social.MarkReadRequest.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MarkReadRequest} returns this
 */
proto.dac.social.MarkReadRequest.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reader_profile_id = 2;
 * @return {string}
 */
proto.dac.social.MarkReadRequest.prototype.getReaderProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MarkReadRequest} returns this
 */
proto.dac.social.MarkReadRequest.prototype.setReaderProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.MarkAllReadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.MarkAllReadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.MarkAllReadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.MarkAllReadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    readerProfileId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.MarkAllReadRequest}
 */
proto.dac.social.MarkAllReadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.MarkAllReadRequest;
  return proto.dac.social.MarkAllReadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.MarkAllReadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.MarkAllReadRequest}
 */
proto.dac.social.MarkAllReadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReaderProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.MarkAllReadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.MarkAllReadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.MarkAllReadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.MarkAllReadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReaderProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string conversation_id = 1;
 * @return {string}
 */
proto.dac.social.MarkAllReadRequest.prototype.getConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MarkAllReadRequest} returns this
 */
proto.dac.social.MarkAllReadRequest.prototype.setConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reader_profile_id = 2;
 * @return {string}
 */
proto.dac.social.MarkAllReadRequest.prototype.getReaderProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.MarkAllReadRequest} returns this
 */
proto.dac.social.MarkAllReadRequest.prototype.setReaderProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.EndorsementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.EndorsementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.EndorsementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.EndorsementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    endorserProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endorsedProfileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    skill: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.EndorsementRequest}
 */
proto.dac.social.EndorsementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.EndorsementRequest;
  return proto.dac.social.EndorsementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.EndorsementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.EndorsementRequest}
 */
proto.dac.social.EndorsementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndorserProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndorsedProfileId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkill(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {!proto.dac.social.EndorsementType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.EndorsementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.EndorsementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.EndorsementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.EndorsementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndorserProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndorsedProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSkill();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string endorser_profile_id = 1;
 * @return {string}
 */
proto.dac.social.EndorsementRequest.prototype.getEndorserProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.EndorsementRequest} returns this
 */
proto.dac.social.EndorsementRequest.prototype.setEndorserProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string endorsed_profile_id = 2;
 * @return {string}
 */
proto.dac.social.EndorsementRequest.prototype.getEndorsedProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.EndorsementRequest} returns this
 */
proto.dac.social.EndorsementRequest.prototype.setEndorsedProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string skill = 3;
 * @return {string}
 */
proto.dac.social.EndorsementRequest.prototype.getSkill = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.EndorsementRequest} returns this
 */
proto.dac.social.EndorsementRequest.prototype.setSkill = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.dac.social.EndorsementRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.EndorsementRequest} returns this
 */
proto.dac.social.EndorsementRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional EndorsementType type = 5;
 * @return {!proto.dac.social.EndorsementType}
 */
proto.dac.social.EndorsementRequest.prototype.getType = function() {
  return /** @type {!proto.dac.social.EndorsementType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.dac.social.EndorsementType} value
 * @return {!proto.dac.social.EndorsementRequest} returns this
 */
proto.dac.social.EndorsementRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetEndorsementsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetEndorsementsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetEndorsementsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetEndorsementsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    skill: jspb.Message.getFieldWithDefault(msg, 2, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 3, 0),
    page: jspb.Message.getFieldWithDefault(msg, 4, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetEndorsementsRequest}
 */
proto.dac.social.GetEndorsementsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetEndorsementsRequest;
  return proto.dac.social.GetEndorsementsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetEndorsementsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetEndorsementsRequest}
 */
proto.dac.social.GetEndorsementsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkill(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.social.EndorsementDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetEndorsementsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetEndorsementsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetEndorsementsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetEndorsementsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.GetEndorsementsRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetEndorsementsRequest} returns this
 */
proto.dac.social.GetEndorsementsRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string skill = 2;
 * @return {string}
 */
proto.dac.social.GetEndorsementsRequest.prototype.getSkill = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetEndorsementsRequest} returns this
 */
proto.dac.social.GetEndorsementsRequest.prototype.setSkill = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.GetEndorsementsRequest} returns this
 */
proto.dac.social.GetEndorsementsRequest.prototype.clearSkill = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.GetEndorsementsRequest.prototype.hasSkill = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EndorsementDirection direction = 3;
 * @return {!proto.dac.social.EndorsementDirection}
 */
proto.dac.social.GetEndorsementsRequest.prototype.getDirection = function() {
  return /** @type {!proto.dac.social.EndorsementDirection} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.social.EndorsementDirection} value
 * @return {!proto.dac.social.GetEndorsementsRequest} returns this
 */
proto.dac.social.GetEndorsementsRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.dac.social.GetEndorsementsRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetEndorsementsRequest} returns this
 */
proto.dac.social.GetEndorsementsRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 limit = 5;
 * @return {number}
 */
proto.dac.social.GetEndorsementsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetEndorsementsRequest} returns this
 */
proto.dac.social.GetEndorsementsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.GetEndorsementsResponse.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetEndorsementsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetEndorsementsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetEndorsementsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetEndorsementsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    endorsementsList: jspb.Message.toObjectList(msg.getEndorsementsList(),
    proto.dac.social.Endorsement.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    skillSummariesList: jspb.Message.toObjectList(msg.getSkillSummariesList(),
    proto.dac.social.SkillEndorsementSummary.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetEndorsementsResponse}
 */
proto.dac.social.GetEndorsementsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetEndorsementsResponse;
  return proto.dac.social.GetEndorsementsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetEndorsementsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetEndorsementsResponse}
 */
proto.dac.social.GetEndorsementsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.social.Endorsement;
      reader.readMessage(value,proto.dac.social.Endorsement.deserializeBinaryFromReader);
      msg.addEndorsements(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
      break;
    case 3:
      var value = new proto.dac.social.SkillEndorsementSummary;
      reader.readMessage(value,proto.dac.social.SkillEndorsementSummary.deserializeBinaryFromReader);
      msg.addSkillSummaries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetEndorsementsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetEndorsementsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetEndorsementsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetEndorsementsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndorsementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.social.Endorsement.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSkillSummariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dac.social.SkillEndorsementSummary.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Endorsement endorsements = 1;
 * @return {!Array<!proto.dac.social.Endorsement>}
 */
proto.dac.social.GetEndorsementsResponse.prototype.getEndorsementsList = function() {
  return /** @type{!Array<!proto.dac.social.Endorsement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.Endorsement, 1));
};


/**
 * @param {!Array<!proto.dac.social.Endorsement>} value
 * @return {!proto.dac.social.GetEndorsementsResponse} returns this
*/
proto.dac.social.GetEndorsementsResponse.prototype.setEndorsementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.social.Endorsement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.Endorsement}
 */
proto.dac.social.GetEndorsementsResponse.prototype.addEndorsements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.social.Endorsement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.GetEndorsementsResponse} returns this
 */
proto.dac.social.GetEndorsementsResponse.prototype.clearEndorsementsList = function() {
  return this.setEndorsementsList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.social.GetEndorsementsResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetEndorsementsResponse} returns this
 */
proto.dac.social.GetEndorsementsResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated SkillEndorsementSummary skill_summaries = 3;
 * @return {!Array<!proto.dac.social.SkillEndorsementSummary>}
 */
proto.dac.social.GetEndorsementsResponse.prototype.getSkillSummariesList = function() {
  return /** @type{!Array<!proto.dac.social.SkillEndorsementSummary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.SkillEndorsementSummary, 3));
};


/**
 * @param {!Array<!proto.dac.social.SkillEndorsementSummary>} value
 * @return {!proto.dac.social.GetEndorsementsResponse} returns this
*/
proto.dac.social.GetEndorsementsResponse.prototype.setSkillSummariesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dac.social.SkillEndorsementSummary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.SkillEndorsementSummary}
 */
proto.dac.social.GetEndorsementsResponse.prototype.addSkillSummaries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dac.social.SkillEndorsementSummary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.GetEndorsementsResponse} returns this
 */
proto.dac.social.GetEndorsementsResponse.prototype.clearSkillSummariesList = function() {
  return this.setSkillSummariesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.SkillEndorsementSummary.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.SkillEndorsementSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.SkillEndorsementSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.SkillEndorsementSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SkillEndorsementSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    skill: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endorsementCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    averageWeight: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    topEndorsersList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.SkillEndorsementSummary}
 */
proto.dac.social.SkillEndorsementSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.SkillEndorsementSummary;
  return proto.dac.social.SkillEndorsementSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.SkillEndorsementSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.SkillEndorsementSummary}
 */
proto.dac.social.SkillEndorsementSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkill(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndorsementCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageWeight(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTopEndorsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.SkillEndorsementSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.SkillEndorsementSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.SkillEndorsementSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.SkillEndorsementSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkill();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndorsementCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAverageWeight();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTopEndorsersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string skill = 1;
 * @return {string}
 */
proto.dac.social.SkillEndorsementSummary.prototype.getSkill = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.SkillEndorsementSummary} returns this
 */
proto.dac.social.SkillEndorsementSummary.prototype.setSkill = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 endorsement_count = 2;
 * @return {number}
 */
proto.dac.social.SkillEndorsementSummary.prototype.getEndorsementCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.SkillEndorsementSummary} returns this
 */
proto.dac.social.SkillEndorsementSummary.prototype.setEndorsementCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double average_weight = 3;
 * @return {number}
 */
proto.dac.social.SkillEndorsementSummary.prototype.getAverageWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.SkillEndorsementSummary} returns this
 */
proto.dac.social.SkillEndorsementSummary.prototype.setAverageWeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated string top_endorsers = 4;
 * @return {!Array<string>}
 */
proto.dac.social.SkillEndorsementSummary.prototype.getTopEndorsersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.SkillEndorsementSummary} returns this
 */
proto.dac.social.SkillEndorsementSummary.prototype.setTopEndorsersList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.SkillEndorsementSummary} returns this
 */
proto.dac.social.SkillEndorsementSummary.prototype.addTopEndorsers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.SkillEndorsementSummary} returns this
 */
proto.dac.social.SkillEndorsementSummary.prototype.clearTopEndorsersList = function() {
  return this.setTopEndorsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.UpdateReputationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.UpdateReputationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.UpdateReputationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UpdateReputationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scoreChange: jspb.Message.getFieldWithDefault(msg, 2, 0),
    source: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 4, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.UpdateReputationRequest}
 */
proto.dac.social.UpdateReputationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.UpdateReputationRequest;
  return proto.dac.social.UpdateReputationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.UpdateReputationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.UpdateReputationRequest}
 */
proto.dac.social.UpdateReputationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScoreChange(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.social.ReputationSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.UpdateReputationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.UpdateReputationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.UpdateReputationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UpdateReputationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScoreChange();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.UpdateReputationRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdateReputationRequest} returns this
 */
proto.dac.social.UpdateReputationRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 score_change = 2;
 * @return {number}
 */
proto.dac.social.UpdateReputationRequest.prototype.getScoreChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.UpdateReputationRequest} returns this
 */
proto.dac.social.UpdateReputationRequest.prototype.setScoreChange = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ReputationSource source = 3;
 * @return {!proto.dac.social.ReputationSource}
 */
proto.dac.social.UpdateReputationRequest.prototype.getSource = function() {
  return /** @type {!proto.dac.social.ReputationSource} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.social.ReputationSource} value
 * @return {!proto.dac.social.UpdateReputationRequest} returns this
 */
proto.dac.social.UpdateReputationRequest.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.dac.social.UpdateReputationRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdateReputationRequest} returns this
 */
proto.dac.social.UpdateReputationRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string transaction_id = 5;
 * @return {string}
 */
proto.dac.social.UpdateReputationRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdateReputationRequest} returns this
 */
proto.dac.social.UpdateReputationRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.UpdateReputationRequest} returns this
 */
proto.dac.social.UpdateReputationRequest.prototype.clearTransactionId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdateReputationRequest.prototype.hasTransactionId = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ReputationHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ReputationHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ReputationHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReputationHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    page: jspb.Message.getFieldWithDefault(msg, 4, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ReputationHistoryRequest}
 */
proto.dac.social.ReputationHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ReputationHistoryRequest;
  return proto.dac.social.ReputationHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ReputationHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ReputationHistoryRequest}
 */
proto.dac.social.ReputationHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDate(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndDate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ReputationHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ReputationHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ReputationHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReputationHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.ReputationHistoryRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ReputationHistoryRequest} returns this
 */
proto.dac.social.ReputationHistoryRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.ReputationHistoryRequest.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.ReputationHistoryRequest} returns this
*/
proto.dac.social.ReputationHistoryRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.ReputationHistoryRequest} returns this
 */
proto.dac.social.ReputationHistoryRequest.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.ReputationHistoryRequest.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.ReputationHistoryRequest.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.ReputationHistoryRequest} returns this
*/
proto.dac.social.ReputationHistoryRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.ReputationHistoryRequest} returns this
 */
proto.dac.social.ReputationHistoryRequest.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.ReputationHistoryRequest.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.dac.social.ReputationHistoryRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationHistoryRequest} returns this
 */
proto.dac.social.ReputationHistoryRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 limit = 5;
 * @return {number}
 */
proto.dac.social.ReputationHistoryRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationHistoryRequest} returns this
 */
proto.dac.social.ReputationHistoryRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.ReputationHistoryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ReputationHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ReputationHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ReputationHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReputationHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    updatesList: jspb.Message.toObjectList(msg.getUpdatesList(),
    proto.dac.social.ReputationUpdate.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    summary: (f = msg.getSummary()) && proto.dac.social.ReputationSummary.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ReputationHistoryResponse}
 */
proto.dac.social.ReputationHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ReputationHistoryResponse;
  return proto.dac.social.ReputationHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ReputationHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ReputationHistoryResponse}
 */
proto.dac.social.ReputationHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.social.ReputationUpdate;
      reader.readMessage(value,proto.dac.social.ReputationUpdate.deserializeBinaryFromReader);
      msg.addUpdates(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
      break;
    case 3:
      var value = new proto.dac.social.ReputationSummary;
      reader.readMessage(value,proto.dac.social.ReputationSummary.deserializeBinaryFromReader);
      msg.setSummary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ReputationHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ReputationHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ReputationHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReputationHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.social.ReputationUpdate.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSummary();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dac.social.ReputationSummary.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ReputationUpdate updates = 1;
 * @return {!Array<!proto.dac.social.ReputationUpdate>}
 */
proto.dac.social.ReputationHistoryResponse.prototype.getUpdatesList = function() {
  return /** @type{!Array<!proto.dac.social.ReputationUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.ReputationUpdate, 1));
};


/**
 * @param {!Array<!proto.dac.social.ReputationUpdate>} value
 * @return {!proto.dac.social.ReputationHistoryResponse} returns this
*/
proto.dac.social.ReputationHistoryResponse.prototype.setUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.social.ReputationUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.ReputationUpdate}
 */
proto.dac.social.ReputationHistoryResponse.prototype.addUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.social.ReputationUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.ReputationHistoryResponse} returns this
 */
proto.dac.social.ReputationHistoryResponse.prototype.clearUpdatesList = function() {
  return this.setUpdatesList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.social.ReputationHistoryResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationHistoryResponse} returns this
 */
proto.dac.social.ReputationHistoryResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ReputationSummary summary = 3;
 * @return {?proto.dac.social.ReputationSummary}
 */
proto.dac.social.ReputationHistoryResponse.prototype.getSummary = function() {
  return /** @type{?proto.dac.social.ReputationSummary} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.ReputationSummary, 3));
};


/**
 * @param {?proto.dac.social.ReputationSummary|undefined} value
 * @return {!proto.dac.social.ReputationHistoryResponse} returns this
*/
proto.dac.social.ReputationHistoryResponse.prototype.setSummary = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.ReputationHistoryResponse} returns this
 */
proto.dac.social.ReputationHistoryResponse.prototype.clearSummary = function() {
  return this.setSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.ReputationHistoryResponse.prototype.hasSummary = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ReputationSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ReputationSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ReputationSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReputationSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentScore: jspb.Message.getFieldWithDefault(msg, 1, 0),
    highestScore: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lowestScore: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalChanges: jspb.Message.getFieldWithDefault(msg, 4, 0),
    averageMonthlyChange: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ReputationSummary}
 */
proto.dac.social.ReputationSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ReputationSummary;
  return proto.dac.social.ReputationSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ReputationSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ReputationSummary}
 */
proto.dac.social.ReputationSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentScore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHighestScore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLowestScore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalChanges(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageMonthlyChange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ReputationSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ReputationSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ReputationSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReputationSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentScore();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getHighestScore();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLowestScore();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTotalChanges();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAverageMonthlyChange();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional int32 current_score = 1;
 * @return {number}
 */
proto.dac.social.ReputationSummary.prototype.getCurrentScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationSummary} returns this
 */
proto.dac.social.ReputationSummary.prototype.setCurrentScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 highest_score = 2;
 * @return {number}
 */
proto.dac.social.ReputationSummary.prototype.getHighestScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationSummary} returns this
 */
proto.dac.social.ReputationSummary.prototype.setHighestScore = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 lowest_score = 3;
 * @return {number}
 */
proto.dac.social.ReputationSummary.prototype.getLowestScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationSummary} returns this
 */
proto.dac.social.ReputationSummary.prototype.setLowestScore = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 total_changes = 4;
 * @return {number}
 */
proto.dac.social.ReputationSummary.prototype.getTotalChanges = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationSummary} returns this
 */
proto.dac.social.ReputationSummary.prototype.setTotalChanges = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double average_monthly_change = 5;
 * @return {number}
 */
proto.dac.social.ReputationSummary.prototype.getAverageMonthlyChange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.ReputationSummary} returns this
 */
proto.dac.social.ReputationSummary.prototype.setAverageMonthlyChange = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.ReportContentRequest.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ReportContentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ReportContentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ReportContentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReportContentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reporterProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    contentId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 4, 0),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    evidenceUrlsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ReportContentRequest}
 */
proto.dac.social.ReportContentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ReportContentRequest;
  return proto.dac.social.ReportContentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ReportContentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ReportContentRequest}
 */
proto.dac.social.ReportContentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReporterProfileId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.social.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentId(value);
      break;
    case 4:
      var value = /** @type {!proto.dac.social.ReportReason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addEvidenceUrls(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ReportContentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ReportContentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ReportContentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReportContentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReporterProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getContentId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEvidenceUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string reporter_profile_id = 1;
 * @return {string}
 */
proto.dac.social.ReportContentRequest.prototype.getReporterProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ReportContentRequest} returns this
 */
proto.dac.social.ReportContentRequest.prototype.setReporterProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContentType content_type = 2;
 * @return {!proto.dac.social.ContentType}
 */
proto.dac.social.ReportContentRequest.prototype.getContentType = function() {
  return /** @type {!proto.dac.social.ContentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.social.ContentType} value
 * @return {!proto.dac.social.ReportContentRequest} returns this
 */
proto.dac.social.ReportContentRequest.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string content_id = 3;
 * @return {string}
 */
proto.dac.social.ReportContentRequest.prototype.getContentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ReportContentRequest} returns this
 */
proto.dac.social.ReportContentRequest.prototype.setContentId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ReportReason reason = 4;
 * @return {!proto.dac.social.ReportReason}
 */
proto.dac.social.ReportContentRequest.prototype.getReason = function() {
  return /** @type {!proto.dac.social.ReportReason} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.social.ReportReason} value
 * @return {!proto.dac.social.ReportContentRequest} returns this
 */
proto.dac.social.ReportContentRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.dac.social.ReportContentRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ReportContentRequest} returns this
 */
proto.dac.social.ReportContentRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string evidence_urls = 6;
 * @return {!Array<string>}
 */
proto.dac.social.ReportContentRequest.prototype.getEvidenceUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.social.ReportContentRequest} returns this
 */
proto.dac.social.ReportContentRequest.prototype.setEvidenceUrlsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.social.ReportContentRequest} returns this
 */
proto.dac.social.ReportContentRequest.prototype.addEvidenceUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.ReportContentRequest} returns this
 */
proto.dac.social.ReportContentRequest.prototype.clearEvidenceUrlsList = function() {
  return this.setEvidenceUrlsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    reportId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ReportResponse}
 */
proto.dac.social.ReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ReportResponse;
  return proto.dac.social.ReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ReportResponse}
 */
proto.dac.social.ReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getReportId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.dac.social.ReportResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.ReportResponse} returns this
 */
proto.dac.social.ReportResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string report_id = 2;
 * @return {string}
 */
proto.dac.social.ReportResponse.prototype.getReportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ReportResponse} returns this
 */
proto.dac.social.ReportResponse.prototype.setReportId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.dac.social.ReportResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ReportResponse} returns this
 */
proto.dac.social.ReportResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ModerateContentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ModerateContentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ModerateContentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ModerateContentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    moderatorProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    action: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ModerateContentRequest}
 */
proto.dac.social.ModerateContentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ModerateContentRequest;
  return proto.dac.social.ModerateContentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ModerateContentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ModerateContentRequest}
 */
proto.dac.social.ModerateContentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModeratorProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentId(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.social.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 4:
      var value = /** @type {!proto.dac.social.ModerationAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ModerateContentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ModerateContentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ModerateContentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ModerateContentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModeratorProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string moderator_profile_id = 1;
 * @return {string}
 */
proto.dac.social.ModerateContentRequest.prototype.getModeratorProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ModerateContentRequest} returns this
 */
proto.dac.social.ModerateContentRequest.prototype.setModeratorProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content_id = 2;
 * @return {string}
 */
proto.dac.social.ModerateContentRequest.prototype.getContentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ModerateContentRequest} returns this
 */
proto.dac.social.ModerateContentRequest.prototype.setContentId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ContentType content_type = 3;
 * @return {!proto.dac.social.ContentType}
 */
proto.dac.social.ModerateContentRequest.prototype.getContentType = function() {
  return /** @type {!proto.dac.social.ContentType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.social.ContentType} value
 * @return {!proto.dac.social.ModerateContentRequest} returns this
 */
proto.dac.social.ModerateContentRequest.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional ModerationAction action = 4;
 * @return {!proto.dac.social.ModerationAction}
 */
proto.dac.social.ModerateContentRequest.prototype.getAction = function() {
  return /** @type {!proto.dac.social.ModerationAction} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.social.ModerationAction} value
 * @return {!proto.dac.social.ModerateContentRequest} returns this
 */
proto.dac.social.ModerateContentRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.dac.social.ModerateContentRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ModerateContentRequest} returns this
 */
proto.dac.social.ModerateContentRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ModerationResult.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ModerationResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ModerationResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ModerationResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    actionTaken: jspb.Message.getFieldWithDefault(msg, 2, 0),
    contentId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    moderatedAt: (f = msg.getModeratedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ModerationResult}
 */
proto.dac.social.ModerationResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ModerationResult;
  return proto.dac.social.ModerationResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ModerationResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ModerationResult}
 */
proto.dac.social.ModerationResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.social.ModerationAction} */ (reader.readEnum());
      msg.setActionTaken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModeratedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ModerationResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ModerationResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ModerationResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ModerationResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getActionTaken();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getContentId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModeratedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.dac.social.ModerationResult.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.ModerationResult} returns this
 */
proto.dac.social.ModerationResult.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional ModerationAction action_taken = 2;
 * @return {!proto.dac.social.ModerationAction}
 */
proto.dac.social.ModerationResult.prototype.getActionTaken = function() {
  return /** @type {!proto.dac.social.ModerationAction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.social.ModerationAction} value
 * @return {!proto.dac.social.ModerationResult} returns this
 */
proto.dac.social.ModerationResult.prototype.setActionTaken = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string content_id = 3;
 * @return {string}
 */
proto.dac.social.ModerationResult.prototype.getContentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ModerationResult} returns this
 */
proto.dac.social.ModerationResult.prototype.setContentId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp moderated_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.ModerationResult.prototype.getModeratedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.ModerationResult} returns this
*/
proto.dac.social.ModerationResult.prototype.setModeratedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.ModerationResult} returns this
 */
proto.dac.social.ModerationResult.prototype.clearModeratedAt = function() {
  return this.setModeratedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.ModerationResult.prototype.hasModeratedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetModerationQueueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetModerationQueueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetModerationQueueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetModerationQueueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    moderatorProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reportReason: jspb.Message.getFieldWithDefault(msg, 3, 0),
    page: jspb.Message.getFieldWithDefault(msg, 4, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetModerationQueueRequest}
 */
proto.dac.social.GetModerationQueueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetModerationQueueRequest;
  return proto.dac.social.GetModerationQueueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetModerationQueueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetModerationQueueRequest}
 */
proto.dac.social.GetModerationQueueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModeratorProfileId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.social.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.social.ReportReason} */ (reader.readEnum());
      msg.setReportReason(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetModerationQueueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetModerationQueueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetModerationQueueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetModerationQueueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModeratorProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.dac.social.ContentType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.dac.social.ReportReason} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string moderator_profile_id = 1;
 * @return {string}
 */
proto.dac.social.GetModerationQueueRequest.prototype.getModeratorProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetModerationQueueRequest} returns this
 */
proto.dac.social.GetModerationQueueRequest.prototype.setModeratorProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContentType content_type = 2;
 * @return {!proto.dac.social.ContentType}
 */
proto.dac.social.GetModerationQueueRequest.prototype.getContentType = function() {
  return /** @type {!proto.dac.social.ContentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.social.ContentType} value
 * @return {!proto.dac.social.GetModerationQueueRequest} returns this
 */
proto.dac.social.GetModerationQueueRequest.prototype.setContentType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.GetModerationQueueRequest} returns this
 */
proto.dac.social.GetModerationQueueRequest.prototype.clearContentType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.GetModerationQueueRequest.prototype.hasContentType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReportReason report_reason = 3;
 * @return {!proto.dac.social.ReportReason}
 */
proto.dac.social.GetModerationQueueRequest.prototype.getReportReason = function() {
  return /** @type {!proto.dac.social.ReportReason} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.social.ReportReason} value
 * @return {!proto.dac.social.GetModerationQueueRequest} returns this
 */
proto.dac.social.GetModerationQueueRequest.prototype.setReportReason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.social.GetModerationQueueRequest} returns this
 */
proto.dac.social.GetModerationQueueRequest.prototype.clearReportReason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.GetModerationQueueRequest.prototype.hasReportReason = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.dac.social.GetModerationQueueRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetModerationQueueRequest} returns this
 */
proto.dac.social.GetModerationQueueRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 limit = 5;
 * @return {number}
 */
proto.dac.social.GetModerationQueueRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetModerationQueueRequest} returns this
 */
proto.dac.social.GetModerationQueueRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.GetModerationQueueResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetModerationQueueResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetModerationQueueResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetModerationQueueResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetModerationQueueResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.dac.social.ModerationItem.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hasNext: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetModerationQueueResponse}
 */
proto.dac.social.GetModerationQueueResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetModerationQueueResponse;
  return proto.dac.social.GetModerationQueueResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetModerationQueueResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetModerationQueueResponse}
 */
proto.dac.social.GetModerationQueueResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.social.ModerationItem;
      reader.readMessage(value,proto.dac.social.ModerationItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetModerationQueueResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetModerationQueueResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetModerationQueueResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetModerationQueueResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.social.ModerationItem.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getHasNext();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * repeated ModerationItem items = 1;
 * @return {!Array<!proto.dac.social.ModerationItem>}
 */
proto.dac.social.GetModerationQueueResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.dac.social.ModerationItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.ModerationItem, 1));
};


/**
 * @param {!Array<!proto.dac.social.ModerationItem>} value
 * @return {!proto.dac.social.GetModerationQueueResponse} returns this
*/
proto.dac.social.GetModerationQueueResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.social.ModerationItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.ModerationItem}
 */
proto.dac.social.GetModerationQueueResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.social.ModerationItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.GetModerationQueueResponse} returns this
 */
proto.dac.social.GetModerationQueueResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.social.GetModerationQueueResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetModerationQueueResponse} returns this
 */
proto.dac.social.GetModerationQueueResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.dac.social.GetModerationQueueResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetModerationQueueResponse} returns this
 */
proto.dac.social.GetModerationQueueResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.social.GetModerationQueueResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetModerationQueueResponse} returns this
 */
proto.dac.social.GetModerationQueueResponse.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool has_next = 5;
 * @return {boolean}
 */
proto.dac.social.GetModerationQueueResponse.prototype.getHasNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.GetModerationQueueResponse} returns this
 */
proto.dac.social.GetModerationQueueResponse.prototype.setHasNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.ModerationItem.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.ModerationItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.ModerationItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ModerationItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    contentId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    reportedContent: jspb.Message.getFieldWithDefault(msg, 4, ""),
    reporterProfileId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 6, 0),
    description: jspb.Message.getFieldWithDefault(msg, 7, ""),
    reportedAt: (f = msg.getReportedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    priority: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.ModerationItem}
 */
proto.dac.social.ModerationItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.ModerationItem;
  return proto.dac.social.ModerationItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.ModerationItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.ModerationItem}
 */
proto.dac.social.ModerationItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.social.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportedContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReporterProfileId(value);
      break;
    case 6:
      var value = /** @type {!proto.dac.social.ReportReason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReportedAt(value);
      break;
    case 9:
      var value = /** @type {!proto.dac.social.ModerationPriority} */ (reader.readEnum());
      msg.setPriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.ModerationItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.ModerationItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.ModerationItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.ModerationItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getContentId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReportedContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReporterProfileId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getReportedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPriority();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string item_id = 1;
 * @return {string}
 */
proto.dac.social.ModerationItem.prototype.getItemId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ModerationItem} returns this
 */
proto.dac.social.ModerationItem.prototype.setItemId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContentType content_type = 2;
 * @return {!proto.dac.social.ContentType}
 */
proto.dac.social.ModerationItem.prototype.getContentType = function() {
  return /** @type {!proto.dac.social.ContentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.social.ContentType} value
 * @return {!proto.dac.social.ModerationItem} returns this
 */
proto.dac.social.ModerationItem.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string content_id = 3;
 * @return {string}
 */
proto.dac.social.ModerationItem.prototype.getContentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ModerationItem} returns this
 */
proto.dac.social.ModerationItem.prototype.setContentId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reported_content = 4;
 * @return {string}
 */
proto.dac.social.ModerationItem.prototype.getReportedContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ModerationItem} returns this
 */
proto.dac.social.ModerationItem.prototype.setReportedContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string reporter_profile_id = 5;
 * @return {string}
 */
proto.dac.social.ModerationItem.prototype.getReporterProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ModerationItem} returns this
 */
proto.dac.social.ModerationItem.prototype.setReporterProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional ReportReason reason = 6;
 * @return {!proto.dac.social.ReportReason}
 */
proto.dac.social.ModerationItem.prototype.getReason = function() {
  return /** @type {!proto.dac.social.ReportReason} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.dac.social.ReportReason} value
 * @return {!proto.dac.social.ModerationItem} returns this
 */
proto.dac.social.ModerationItem.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.dac.social.ModerationItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.ModerationItem} returns this
 */
proto.dac.social.ModerationItem.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp reported_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.ModerationItem.prototype.getReportedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.ModerationItem} returns this
*/
proto.dac.social.ModerationItem.prototype.setReportedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.ModerationItem} returns this
 */
proto.dac.social.ModerationItem.prototype.clearReportedAt = function() {
  return this.setReportedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.ModerationItem.prototype.hasReportedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ModerationPriority priority = 9;
 * @return {!proto.dac.social.ModerationPriority}
 */
proto.dac.social.ModerationItem.prototype.getPriority = function() {
  return /** @type {!proto.dac.social.ModerationPriority} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.dac.social.ModerationPriority} value
 * @return {!proto.dac.social.ModerationItem} returns this
 */
proto.dac.social.ModerationItem.prototype.setPriority = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.UpdatePrivacyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.UpdatePrivacyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.UpdatePrivacyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UpdatePrivacyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    settings: (f = msg.getSettings()) && proto.dac.social.PrivacySettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.UpdatePrivacyRequest}
 */
proto.dac.social.UpdatePrivacyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.UpdatePrivacyRequest;
  return proto.dac.social.UpdatePrivacyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.UpdatePrivacyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.UpdatePrivacyRequest}
 */
proto.dac.social.UpdatePrivacyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = new proto.dac.social.PrivacySettings;
      reader.readMessage(value,proto.dac.social.PrivacySettings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.UpdatePrivacyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.UpdatePrivacyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.UpdatePrivacyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UpdatePrivacyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.social.PrivacySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.UpdatePrivacyRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UpdatePrivacyRequest} returns this
 */
proto.dac.social.UpdatePrivacyRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PrivacySettings settings = 2;
 * @return {?proto.dac.social.PrivacySettings}
 */
proto.dac.social.UpdatePrivacyRequest.prototype.getSettings = function() {
  return /** @type{?proto.dac.social.PrivacySettings} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.PrivacySettings, 2));
};


/**
 * @param {?proto.dac.social.PrivacySettings|undefined} value
 * @return {!proto.dac.social.UpdatePrivacyRequest} returns this
*/
proto.dac.social.UpdatePrivacyRequest.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.UpdatePrivacyRequest} returns this
 */
proto.dac.social.UpdatePrivacyRequest.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.UpdatePrivacyRequest.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.PrivacySettings.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.PrivacySettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.PrivacySettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.PrivacySettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileVisibility: jspb.Message.getFieldWithDefault(msg, 1, 0),
    allowDirectMessages: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    showOnlineStatus: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    showFollowers: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    showFollowing: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    showEndorsements: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    allowTags: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    messagePrivacy: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.PrivacySettings}
 */
proto.dac.social.PrivacySettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.PrivacySettings;
  return proto.dac.social.PrivacySettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.PrivacySettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.PrivacySettings}
 */
proto.dac.social.PrivacySettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dac.social.PrivacyLevel} */ (reader.readEnum());
      msg.setProfileVisibility(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowDirectMessages(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowOnlineStatus(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowFollowers(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowFollowing(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowEndorsements(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowTags(value);
      break;
    case 8:
      var value = /** @type {!proto.dac.social.MessagePrivacy} */ (reader.readEnum());
      msg.setMessagePrivacy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.PrivacySettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.PrivacySettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.PrivacySettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.PrivacySettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileVisibility();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAllowDirectMessages();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getShowOnlineStatus();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getShowFollowers();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getShowFollowing();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getShowEndorsements();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getAllowTags();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getMessagePrivacy();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional PrivacyLevel profile_visibility = 1;
 * @return {!proto.dac.social.PrivacyLevel}
 */
proto.dac.social.PrivacySettings.prototype.getProfileVisibility = function() {
  return /** @type {!proto.dac.social.PrivacyLevel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dac.social.PrivacyLevel} value
 * @return {!proto.dac.social.PrivacySettings} returns this
 */
proto.dac.social.PrivacySettings.prototype.setProfileVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool allow_direct_messages = 2;
 * @return {boolean}
 */
proto.dac.social.PrivacySettings.prototype.getAllowDirectMessages = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.PrivacySettings} returns this
 */
proto.dac.social.PrivacySettings.prototype.setAllowDirectMessages = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool show_online_status = 3;
 * @return {boolean}
 */
proto.dac.social.PrivacySettings.prototype.getShowOnlineStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.PrivacySettings} returns this
 */
proto.dac.social.PrivacySettings.prototype.setShowOnlineStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool show_followers = 4;
 * @return {boolean}
 */
proto.dac.social.PrivacySettings.prototype.getShowFollowers = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.PrivacySettings} returns this
 */
proto.dac.social.PrivacySettings.prototype.setShowFollowers = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool show_following = 5;
 * @return {boolean}
 */
proto.dac.social.PrivacySettings.prototype.getShowFollowing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.PrivacySettings} returns this
 */
proto.dac.social.PrivacySettings.prototype.setShowFollowing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool show_endorsements = 6;
 * @return {boolean}
 */
proto.dac.social.PrivacySettings.prototype.getShowEndorsements = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.PrivacySettings} returns this
 */
proto.dac.social.PrivacySettings.prototype.setShowEndorsements = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool allow_tags = 7;
 * @return {boolean}
 */
proto.dac.social.PrivacySettings.prototype.getAllowTags = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.social.PrivacySettings} returns this
 */
proto.dac.social.PrivacySettings.prototype.setAllowTags = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional MessagePrivacy message_privacy = 8;
 * @return {!proto.dac.social.MessagePrivacy}
 */
proto.dac.social.PrivacySettings.prototype.getMessagePrivacy = function() {
  return /** @type {!proto.dac.social.MessagePrivacy} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.dac.social.MessagePrivacy} value
 * @return {!proto.dac.social.PrivacySettings} returns this
 */
proto.dac.social.PrivacySettings.prototype.setMessagePrivacy = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.BlockUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.BlockUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.BlockUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.BlockUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockerProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockedProfileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.BlockUserRequest}
 */
proto.dac.social.BlockUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.BlockUserRequest;
  return proto.dac.social.BlockUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.BlockUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.BlockUserRequest}
 */
proto.dac.social.BlockUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockerProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockedProfileId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.BlockUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.BlockUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.BlockUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.BlockUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockerProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockedProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string blocker_profile_id = 1;
 * @return {string}
 */
proto.dac.social.BlockUserRequest.prototype.getBlockerProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.BlockUserRequest} returns this
 */
proto.dac.social.BlockUserRequest.prototype.setBlockerProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blocked_profile_id = 2;
 * @return {string}
 */
proto.dac.social.BlockUserRequest.prototype.getBlockedProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.BlockUserRequest} returns this
 */
proto.dac.social.BlockUserRequest.prototype.setBlockedProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.dac.social.BlockUserRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.BlockUserRequest} returns this
 */
proto.dac.social.BlockUserRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.UnblockUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.UnblockUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.UnblockUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UnblockUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockerProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockedProfileId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.UnblockUserRequest}
 */
proto.dac.social.UnblockUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.UnblockUserRequest;
  return proto.dac.social.UnblockUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.UnblockUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.UnblockUserRequest}
 */
proto.dac.social.UnblockUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockerProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockedProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.UnblockUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.UnblockUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.UnblockUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.UnblockUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockerProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockedProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string blocker_profile_id = 1;
 * @return {string}
 */
proto.dac.social.UnblockUserRequest.prototype.getBlockerProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UnblockUserRequest} returns this
 */
proto.dac.social.UnblockUserRequest.prototype.setBlockerProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blocked_profile_id = 2;
 * @return {string}
 */
proto.dac.social.UnblockUserRequest.prototype.getBlockedProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.UnblockUserRequest} returns this
 */
proto.dac.social.UnblockUserRequest.prototype.setBlockedProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetBlockedUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetBlockedUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetBlockedUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetBlockedUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    page: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetBlockedUsersRequest}
 */
proto.dac.social.GetBlockedUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetBlockedUsersRequest;
  return proto.dac.social.GetBlockedUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetBlockedUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetBlockedUsersRequest}
 */
proto.dac.social.GetBlockedUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetBlockedUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetBlockedUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetBlockedUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetBlockedUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string profile_id = 1;
 * @return {string}
 */
proto.dac.social.GetBlockedUsersRequest.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.GetBlockedUsersRequest} returns this
 */
proto.dac.social.GetBlockedUsersRequest.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page = 2;
 * @return {number}
 */
proto.dac.social.GetBlockedUsersRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetBlockedUsersRequest} returns this
 */
proto.dac.social.GetBlockedUsersRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 limit = 3;
 * @return {number}
 */
proto.dac.social.GetBlockedUsersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetBlockedUsersRequest} returns this
 */
proto.dac.social.GetBlockedUsersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.social.GetBlockedUsersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.GetBlockedUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.GetBlockedUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.GetBlockedUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetBlockedUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockedUsersList: jspb.Message.toObjectList(msg.getBlockedUsersList(),
    proto.dac.social.BlockedUser.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.GetBlockedUsersResponse}
 */
proto.dac.social.GetBlockedUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.GetBlockedUsersResponse;
  return proto.dac.social.GetBlockedUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.GetBlockedUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.GetBlockedUsersResponse}
 */
proto.dac.social.GetBlockedUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.social.BlockedUser;
      reader.readMessage(value,proto.dac.social.BlockedUser.deserializeBinaryFromReader);
      msg.addBlockedUsers(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.GetBlockedUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.GetBlockedUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.GetBlockedUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.GetBlockedUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockedUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.social.BlockedUser.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated BlockedUser blocked_users = 1;
 * @return {!Array<!proto.dac.social.BlockedUser>}
 */
proto.dac.social.GetBlockedUsersResponse.prototype.getBlockedUsersList = function() {
  return /** @type{!Array<!proto.dac.social.BlockedUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.social.BlockedUser, 1));
};


/**
 * @param {!Array<!proto.dac.social.BlockedUser>} value
 * @return {!proto.dac.social.GetBlockedUsersResponse} returns this
*/
proto.dac.social.GetBlockedUsersResponse.prototype.setBlockedUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.social.BlockedUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.social.BlockedUser}
 */
proto.dac.social.GetBlockedUsersResponse.prototype.addBlockedUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.social.BlockedUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.social.GetBlockedUsersResponse} returns this
 */
proto.dac.social.GetBlockedUsersResponse.prototype.clearBlockedUsersList = function() {
  return this.setBlockedUsersList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.social.GetBlockedUsersResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.social.GetBlockedUsersResponse} returns this
 */
proto.dac.social.GetBlockedUsersResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dac.social.BlockedUser.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.social.BlockedUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.social.BlockedUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.BlockedUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockedProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profile: (f = msg.getProfile()) && proto.dac.social.SocialProfile.toObject(includeInstance, f),
    reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockedAt: (f = msg.getBlockedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dac.social.BlockedUser}
 */
proto.dac.social.BlockedUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.social.BlockedUser;
  return proto.dac.social.BlockedUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.social.BlockedUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.social.BlockedUser}
 */
proto.dac.social.BlockedUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockedProfileId(value);
      break;
    case 2:
      var value = new proto.dac.social.SocialProfile;
      reader.readMessage(value,proto.dac.social.SocialProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBlockedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dac.social.BlockedUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.social.BlockedUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.social.BlockedUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.social.BlockedUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockedProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.social.SocialProfile.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlockedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string blocked_profile_id = 1;
 * @return {string}
 */
proto.dac.social.BlockedUser.prototype.getBlockedProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.BlockedUser} returns this
 */
proto.dac.social.BlockedUser.prototype.setBlockedProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SocialProfile profile = 2;
 * @return {?proto.dac.social.SocialProfile}
 */
proto.dac.social.BlockedUser.prototype.getProfile = function() {
  return /** @type{?proto.dac.social.SocialProfile} */ (
    jspb.Message.getWrapperField(this, proto.dac.social.SocialProfile, 2));
};


/**
 * @param {?proto.dac.social.SocialProfile|undefined} value
 * @return {!proto.dac.social.BlockedUser} returns this
*/
proto.dac.social.BlockedUser.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.BlockedUser} returns this
 */
proto.dac.social.BlockedUser.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.BlockedUser.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.dac.social.BlockedUser.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.social.BlockedUser} returns this
 */
proto.dac.social.BlockedUser.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp blocked_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.social.BlockedUser.prototype.getBlockedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.social.BlockedUser} returns this
*/
proto.dac.social.BlockedUser.prototype.setBlockedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.social.BlockedUser} returns this
 */
proto.dac.social.BlockedUser.prototype.clearBlockedAt = function() {
  return this.setBlockedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.social.BlockedUser.prototype.hasBlockedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * @enum {number}
 */
proto.dac.social.PrivacyLevel = {
  PRIVACY_LEVEL_UNSPECIFIED: 0,
  PRIVACY_LEVEL_OPEN: 1,
  PRIVACY_LEVEL_SELECTIVE: 2,
  PRIVACY_LEVEL_PRIVATE: 3
};

/**
 * @enum {number}
 */
proto.dac.social.VerificationStatus = {
  VERIFICATION_STATUS_UNSPECIFIED: 0,
  VERIFICATION_STATUS_UNVERIFIED: 1,
  VERIFICATION_STATUS_PENDING: 2,
  VERIFICATION_STATUS_VERIFIED: 3,
  VERIFICATION_STATUS_REJECTED: 4
};

/**
 * @enum {number}
 */
proto.dac.social.BadgeCategory = {
  BADGE_CATEGORY_UNSPECIFIED: 0,
  BADGE_CATEGORY_ACHIEVEMENT: 1,
  BADGE_CATEGORY_SKILL: 2,
  BADGE_CATEGORY_CONTRIBUTION: 3,
  BADGE_CATEGORY_REPUTATION: 4,
  BADGE_CATEGORY_SPECIAL: 5
};

/**
 * @enum {number}
 */
proto.dac.social.PostType = {
  POST_TYPE_UNSPECIFIED: 0,
  POST_TYPE_TEXT: 1,
  POST_TYPE_IMAGE: 2,
  POST_TYPE_VIDEO: 3,
  POST_TYPE_LINK: 4,
  POST_TYPE_POLL: 5,
  POST_TYPE_ARTICLE: 6
};

/**
 * @enum {number}
 */
proto.dac.social.PostVisibility = {
  POST_VISIBILITY_UNSPECIFIED: 0,
  POST_VISIBILITY_PUBLIC: 1,
  POST_VISIBILITY_FOLLOWERS: 2,
  POST_VISIBILITY_PRIVATE: 3,
  POST_VISIBILITY_UNLISTED: 4
};

/**
 * @enum {number}
 */
proto.dac.social.MediaType = {
  MEDIA_TYPE_UNSPECIFIED: 0,
  MEDIA_TYPE_IMAGE: 1,
  MEDIA_TYPE_VIDEO: 2,
  MEDIA_TYPE_AUDIO: 3,
  MEDIA_TYPE_DOCUMENT: 4
};

/**
 * @enum {number}
 */
proto.dac.social.MessageType = {
  MESSAGE_TYPE_UNSPECIFIED: 0,
  MESSAGE_TYPE_TEXT: 1,
  MESSAGE_TYPE_IMAGE: 2,
  MESSAGE_TYPE_VIDEO: 3,
  MESSAGE_TYPE_AUDIO: 4,
  MESSAGE_TYPE_FILE: 5,
  MESSAGE_TYPE_SYSTEM: 6
};

/**
 * @enum {number}
 */
proto.dac.social.AttachmentType = {
  ATTACHMENT_TYPE_UNSPECIFIED: 0,
  ATTACHMENT_TYPE_IMAGE: 1,
  ATTACHMENT_TYPE_VIDEO: 2,
  ATTACHMENT_TYPE_AUDIO: 3,
  ATTACHMENT_TYPE_DOCUMENT: 4,
  ATTACHMENT_TYPE_ARCHIVE: 5
};

/**
 * @enum {number}
 */
proto.dac.social.FollowStatus = {
  FOLLOW_STATUS_UNSPECIFIED: 0,
  FOLLOW_STATUS_FOLLOWING: 1,
  FOLLOW_STATUS_PENDING: 2,
  FOLLOW_STATUS_BLOCKED: 3,
  FOLLOW_STATUS_MUTED: 4
};

/**
 * @enum {number}
 */
proto.dac.social.EndorsementType = {
  ENDORSEMENT_TYPE_UNSPECIFIED: 0,
  ENDORSEMENT_TYPE_SKILL: 1,
  ENDORSEMENT_TYPE_CHARACTER: 2,
  ENDORSEMENT_TYPE_WORK_QUALITY: 3,
  ENDORSEMENT_TYPE_RELIABILITY: 4,
  ENDORSEMENT_TYPE_LEADERSHIP: 5
};

/**
 * @enum {number}
 */
proto.dac.social.EndorsementDirection = {
  ENDORSEMENT_DIRECTION_UNSPECIFIED: 0,
  ENDORSEMENT_DIRECTION_RECEIVED: 1,
  ENDORSEMENT_DIRECTION_GIVEN: 2,
  ENDORSEMENT_DIRECTION_BOTH: 3
};

/**
 * @enum {number}
 */
proto.dac.social.ReputationSource = {
  REPUTATION_SOURCE_UNSPECIFIED: 0,
  REPUTATION_SOURCE_ENDORSEMENT: 1,
  REPUTATION_SOURCE_GOVERNANCE_PARTICIPATION: 2,
  REPUTATION_SOURCE_TRANSACTION_COMPLETION: 3,
  REPUTATION_SOURCE_CONTENT_QUALITY: 4,
  REPUTATION_SOURCE_COMMUNITY_CONTRIBUTION: 5,
  REPUTATION_SOURCE_MODERATION_ACTION: 6
};

/**
 * @enum {number}
 */
proto.dac.social.ContentType = {
  CONTENT_TYPE_UNSPECIFIED: 0,
  CONTENT_TYPE_POST: 1,
  CONTENT_TYPE_COMMENT: 2,
  CONTENT_TYPE_MESSAGE: 3,
  CONTENT_TYPE_PROFILE: 4
};

/**
 * @enum {number}
 */
proto.dac.social.ReportReason = {
  REPORT_REASON_UNSPECIFIED: 0,
  REPORT_REASON_SPAM: 1,
  REPORT_REASON_HARASSMENT: 2,
  REPORT_REASON_HATE_SPEECH: 3,
  REPORT_REASON_MISINFORMATION: 4,
  REPORT_REASON_COPYRIGHT: 5,
  REPORT_REASON_INAPPROPRIATE_CONTENT: 6,
  REPORT_REASON_IMPERSONATION: 7,
  REPORT_REASON_OTHER: 8
};

/**
 * @enum {number}
 */
proto.dac.social.ModerationAction = {
  MODERATION_ACTION_UNSPECIFIED: 0,
  MODERATION_ACTION_APPROVE: 1,
  MODERATION_ACTION_REMOVE: 2,
  MODERATION_ACTION_HIDE: 3,
  MODERATION_ACTION_FLAG: 4,
  MODERATION_ACTION_WARN_USER: 5,
  MODERATION_ACTION_SUSPEND_USER: 6
};

/**
 * @enum {number}
 */
proto.dac.social.ModerationStatus = {
  MODERATION_STATUS_UNSPECIFIED: 0,
  MODERATION_STATUS_PENDING: 1,
  MODERATION_STATUS_APPROVED: 2,
  MODERATION_STATUS_REMOVED: 3,
  MODERATION_STATUS_FLAGGED: 4
};

/**
 * @enum {number}
 */
proto.dac.social.ModerationPriority = {
  MODERATION_PRIORITY_UNSPECIFIED: 0,
  MODERATION_PRIORITY_LOW: 1,
  MODERATION_PRIORITY_MEDIUM: 2,
  MODERATION_PRIORITY_HIGH: 3,
  MODERATION_PRIORITY_URGENT: 4
};

/**
 * @enum {number}
 */
proto.dac.social.ProfileSearchSort = {
  PROFILE_SEARCH_SORT_UNSPECIFIED: 0,
  PROFILE_SEARCH_SORT_RELEVANCE: 1,
  PROFILE_SEARCH_SORT_REPUTATION: 2,
  PROFILE_SEARCH_SORT_RECENT: 3,
  PROFILE_SEARCH_SORT_FOLLOWERS: 4
};

/**
 * @enum {number}
 */
proto.dac.social.FeedType = {
  FEED_TYPE_UNSPECIFIED: 0,
  FEED_TYPE_HOME: 1,
  FEED_TYPE_FOLLOWING: 2,
  FEED_TYPE_TRENDING: 3,
  FEED_TYPE_RECENT: 4
};

/**
 * @enum {number}
 */
proto.dac.social.MessagePrivacy = {
  MESSAGE_PRIVACY_UNSPECIFIED: 0,
  MESSAGE_PRIVACY_EVERYONE: 1,
  MESSAGE_PRIVACY_FOLLOWERS_ONLY: 2,
  MESSAGE_PRIVACY_CONNECTIONS_ONLY: 3,
  MESSAGE_PRIVACY_NO_ONE: 4
};

goog.object.extend(exports, proto.dac.social);
