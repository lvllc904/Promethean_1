// source: properties.proto
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
goog.exportSymbol('proto.dac.properties.Address', null, global);
goog.exportSymbol('proto.dac.properties.AgeGroup', null, global);
goog.exportSymbol('proto.dac.properties.AnalyticsMetric', null, global);
goog.exportSymbol('proto.dac.properties.AnalyticsRequest', null, global);
goog.exportSymbol('proto.dac.properties.CancelTransactionRequest', null, global);
goog.exportSymbol('proto.dac.properties.ComparableProperty', null, global);
goog.exportSymbol('proto.dac.properties.CompleteTransactionRequest', null, global);
goog.exportSymbol('proto.dac.properties.CompletionDocument', null, global);
goog.exportSymbol('proto.dac.properties.CreatePropertyRequest', null, global);
goog.exportSymbol('proto.dac.properties.DailyViews', null, global);
goog.exportSymbol('proto.dac.properties.DeletePropertyRequest', null, global);
goog.exportSymbol('proto.dac.properties.DemographicData', null, global);
goog.exportSymbol('proto.dac.properties.DocumentListResponse', null, global);
goog.exportSymbol('proto.dac.properties.DocumentMetadata', null, global);
goog.exportSymbol('proto.dac.properties.DocumentRequest', null, global);
goog.exportSymbol('proto.dac.properties.DocumentResponse', null, global);
goog.exportSymbol('proto.dac.properties.DocumentResponse.DataCase', null, global);
goog.exportSymbol('proto.dac.properties.DocumentType', null, global);
goog.exportSymbol('proto.dac.properties.DocumentUploadRequest', null, global);
goog.exportSymbol('proto.dac.properties.DocumentUploadRequest.DataCase', null, global);
goog.exportSymbol('proto.dac.properties.DocumentUploadResponse', null, global);
goog.exportSymbol('proto.dac.properties.FacetValue', null, global);
goog.exportSymbol('proto.dac.properties.FactorDirection', null, global);
goog.exportSymbol('proto.dac.properties.FeaturedPropertiesRequest', null, global);
goog.exportSymbol('proto.dac.properties.FeaturedPropertiesResponse', null, global);
goog.exportSymbol('proto.dac.properties.FinancialMetrics', null, global);
goog.exportSymbol('proto.dac.properties.GetPropertyRequest', null, global);
goog.exportSymbol('proto.dac.properties.HeatingCooling', null, global);
goog.exportSymbol('proto.dac.properties.ImageType', null, global);
goog.exportSymbol('proto.dac.properties.InquiryAnalytics', null, global);
goog.exportSymbol('proto.dac.properties.InsightType', null, global);
goog.exportSymbol('proto.dac.properties.ListDocumentsRequest', null, global);
goog.exportSymbol('proto.dac.properties.ListPropertiesRequest', null, global);
goog.exportSymbol('proto.dac.properties.LocationFilter', null, global);
goog.exportSymbol('proto.dac.properties.MaintenanceAnalytics', null, global);
goog.exportSymbol('proto.dac.properties.MaintenanceCategory', null, global);
goog.exportSymbol('proto.dac.properties.MarketInsight', null, global);
goog.exportSymbol('proto.dac.properties.MarketTrendData', null, global);
goog.exportSymbol('proto.dac.properties.MarketTrendsRequest', null, global);
goog.exportSymbol('proto.dac.properties.MarketTrendsResponse', null, global);
goog.exportSymbol('proto.dac.properties.MediaMetadata', null, global);
goog.exportSymbol('proto.dac.properties.MediaUploadRequest', null, global);
goog.exportSymbol('proto.dac.properties.MediaUploadRequest.DataCase', null, global);
goog.exportSymbol('proto.dac.properties.MediaUploadResponse', null, global);
goog.exportSymbol('proto.dac.properties.OwnerPropertiesRequest', null, global);
goog.exportSymbol('proto.dac.properties.OwnerPropertiesResponse', null, global);
goog.exportSymbol('proto.dac.properties.PerformanceMetrics', null, global);
goog.exportSymbol('proto.dac.properties.PriceAnalysis', null, global);
goog.exportSymbol('proto.dac.properties.PriceChangeReason', null, global);
goog.exportSymbol('proto.dac.properties.PriceHistory', null, global);
goog.exportSymbol('proto.dac.properties.PricePoint', null, global);
goog.exportSymbol('proto.dac.properties.PriceRange', null, global);
goog.exportSymbol('proto.dac.properties.PriceTrend', null, global);
goog.exportSymbol('proto.dac.properties.PricingInfo', null, global);
goog.exportSymbol('proto.dac.properties.Property', null, global);
goog.exportSymbol('proto.dac.properties.PropertyAnalytics', null, global);
goog.exportSymbol('proto.dac.properties.PropertyCondition', null, global);
goog.exportSymbol('proto.dac.properties.PropertyDetails', null, global);
goog.exportSymbol('proto.dac.properties.PropertyDocument', null, global);
goog.exportSymbol('proto.dac.properties.PropertyFilters', null, global);
goog.exportSymbol('proto.dac.properties.PropertyImage', null, global);
goog.exportSymbol('proto.dac.properties.PropertyMetrics', null, global);
goog.exportSymbol('proto.dac.properties.PropertyOwnerStats', null, global);
goog.exportSymbol('proto.dac.properties.PropertySearchRequest', null, global);
goog.exportSymbol('proto.dac.properties.PropertySearchResponse', null, global);
goog.exportSymbol('proto.dac.properties.PropertyStatus', null, global);
goog.exportSymbol('proto.dac.properties.PropertyType', null, global);
goog.exportSymbol('proto.dac.properties.RentalAnalytics', null, global);
goog.exportSymbol('proto.dac.properties.RentalAnalyticsRequest', null, global);
goog.exportSymbol('proto.dac.properties.RentalPerformance', null, global);
goog.exportSymbol('proto.dac.properties.SearchFacets', null, global);
goog.exportSymbol('proto.dac.properties.SearchSort', null, global);
goog.exportSymbol('proto.dac.properties.StepStatus', null, global);
goog.exportSymbol('proto.dac.properties.SupplyDemandAnalysis', null, global);
goog.exportSymbol('proto.dac.properties.TenantAnalytics', null, global);
goog.exportSymbol('proto.dac.properties.TokenDistribution', null, global);
goog.exportSymbol('proto.dac.properties.TokenHolder', null, global);
goog.exportSymbol('proto.dac.properties.TokenHoldersRequest', null, global);
goog.exportSymbol('proto.dac.properties.TokenHoldersResponse', null, global);
goog.exportSymbol('proto.dac.properties.TokenInfo', null, global);
goog.exportSymbol('proto.dac.properties.TokenInfoRequest', null, global);
goog.exportSymbol('proto.dac.properties.TokenMetrics', null, global);
goog.exportSymbol('proto.dac.properties.TokenTransferRequest', null, global);
goog.exportSymbol('proto.dac.properties.TokenTransferResponse', null, global);
goog.exportSymbol('proto.dac.properties.TokenizationInfo', null, global);
goog.exportSymbol('proto.dac.properties.TokenizationParameters', null, global);
goog.exportSymbol('proto.dac.properties.TokenizationRequest', null, global);
goog.exportSymbol('proto.dac.properties.TokenizationResponse', null, global);
goog.exportSymbol('proto.dac.properties.TokenizationStatus', null, global);
goog.exportSymbol('proto.dac.properties.TransactionRequest', null, global);
goog.exportSymbol('proto.dac.properties.TransactionResponse', null, global);
goog.exportSymbol('proto.dac.properties.TransactionResult', null, global);
goog.exportSymbol('proto.dac.properties.TransactionState', null, global);
goog.exportSymbol('proto.dac.properties.TransactionStatus', null, global);
goog.exportSymbol('proto.dac.properties.TransactionStatusRequest', null, global);
goog.exportSymbol('proto.dac.properties.TransactionStep', null, global);
goog.exportSymbol('proto.dac.properties.TransactionType', null, global);
goog.exportSymbol('proto.dac.properties.UpdatePropertyRequest', null, global);
goog.exportSymbol('proto.dac.properties.UpdateValuationRequest', null, global);
goog.exportSymbol('proto.dac.properties.User', null, global);
goog.exportSymbol('proto.dac.properties.Valuation', null, global);
goog.exportSymbol('proto.dac.properties.ValuationFactor', null, global);
goog.exportSymbol('proto.dac.properties.ValuationHistoryRequest', null, global);
goog.exportSymbol('proto.dac.properties.ValuationHistoryResponse', null, global);
goog.exportSymbol('proto.dac.properties.ValuationMethod', null, global);
goog.exportSymbol('proto.dac.properties.ValuationRequest', null, global);
goog.exportSymbol('proto.dac.properties.ValuationResponse', null, global);
goog.exportSymbol('proto.dac.properties.ValuationStatus', null, global);
goog.exportSymbol('proto.dac.properties.ValuationTrend', null, global);
goog.exportSymbol('proto.dac.properties.ValueRange', null, global);
goog.exportSymbol('proto.dac.properties.ViewAnalytics', null, global);
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
proto.dac.properties.Property = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.Property.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.Property, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.Property.displayName = 'proto.dac.properties.Property';
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
proto.dac.properties.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.Address.displayName = 'proto.dac.properties.Address';
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
proto.dac.properties.PropertyDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.PropertyDetails.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.PropertyDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PropertyDetails.displayName = 'proto.dac.properties.PropertyDetails';
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
proto.dac.properties.HeatingCooling = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.HeatingCooling, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.HeatingCooling.displayName = 'proto.dac.properties.HeatingCooling';
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
proto.dac.properties.PricingInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.PricingInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PricingInfo.displayName = 'proto.dac.properties.PricingInfo';
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
proto.dac.properties.PriceHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.PriceHistory.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.PriceHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PriceHistory.displayName = 'proto.dac.properties.PriceHistory';
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
proto.dac.properties.PricePoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.PricePoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PricePoint.displayName = 'proto.dac.properties.PricePoint';
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
proto.dac.properties.PropertyImage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.PropertyImage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PropertyImage.displayName = 'proto.dac.properties.PropertyImage';
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
proto.dac.properties.PropertyDocument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.PropertyDocument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PropertyDocument.displayName = 'proto.dac.properties.PropertyDocument';
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
proto.dac.properties.PropertyMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.PropertyMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PropertyMetrics.displayName = 'proto.dac.properties.PropertyMetrics';
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
proto.dac.properties.TokenizationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.TokenizationInfo.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.TokenizationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenizationInfo.displayName = 'proto.dac.properties.TokenizationInfo';
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
proto.dac.properties.TokenHolder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TokenHolder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenHolder.displayName = 'proto.dac.properties.TokenHolder';
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
proto.dac.properties.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.User.displayName = 'proto.dac.properties.User';
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
proto.dac.properties.CreatePropertyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.CreatePropertyRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.CreatePropertyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.CreatePropertyRequest.displayName = 'proto.dac.properties.CreatePropertyRequest';
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
proto.dac.properties.GetPropertyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.GetPropertyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.GetPropertyRequest.displayName = 'proto.dac.properties.GetPropertyRequest';
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
proto.dac.properties.UpdatePropertyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.UpdatePropertyRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.UpdatePropertyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.UpdatePropertyRequest.displayName = 'proto.dac.properties.UpdatePropertyRequest';
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
proto.dac.properties.DeletePropertyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.DeletePropertyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.DeletePropertyRequest.displayName = 'proto.dac.properties.DeletePropertyRequest';
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
proto.dac.properties.ListPropertiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.ListPropertiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ListPropertiesRequest.displayName = 'proto.dac.properties.ListPropertiesRequest';
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
proto.dac.properties.PropertyFilters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.PropertyFilters.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.PropertyFilters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PropertyFilters.displayName = 'proto.dac.properties.PropertyFilters';
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
proto.dac.properties.PriceRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.PriceRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PriceRange.displayName = 'proto.dac.properties.PriceRange';
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
proto.dac.properties.LocationFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.LocationFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.LocationFilter.displayName = 'proto.dac.properties.LocationFilter';
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
proto.dac.properties.PropertySearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.PropertySearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PropertySearchRequest.displayName = 'proto.dac.properties.PropertySearchRequest';
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
proto.dac.properties.PropertySearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.PropertySearchResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.PropertySearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PropertySearchResponse.displayName = 'proto.dac.properties.PropertySearchResponse';
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
proto.dac.properties.SearchFacets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.SearchFacets.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.SearchFacets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.SearchFacets.displayName = 'proto.dac.properties.SearchFacets';
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
proto.dac.properties.FacetValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.FacetValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.FacetValue.displayName = 'proto.dac.properties.FacetValue';
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
proto.dac.properties.FeaturedPropertiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.FeaturedPropertiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.FeaturedPropertiesRequest.displayName = 'proto.dac.properties.FeaturedPropertiesRequest';
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
proto.dac.properties.FeaturedPropertiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.FeaturedPropertiesResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.FeaturedPropertiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.FeaturedPropertiesResponse.displayName = 'proto.dac.properties.FeaturedPropertiesResponse';
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
proto.dac.properties.OwnerPropertiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.OwnerPropertiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.OwnerPropertiesRequest.displayName = 'proto.dac.properties.OwnerPropertiesRequest';
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
proto.dac.properties.OwnerPropertiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.OwnerPropertiesResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.OwnerPropertiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.OwnerPropertiesResponse.displayName = 'proto.dac.properties.OwnerPropertiesResponse';
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
proto.dac.properties.PropertyOwnerStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.PropertyOwnerStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PropertyOwnerStats.displayName = 'proto.dac.properties.PropertyOwnerStats';
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
proto.dac.properties.TransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.TransactionRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.TransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TransactionRequest.displayName = 'proto.dac.properties.TransactionRequest';
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
proto.dac.properties.TransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TransactionResponse.displayName = 'proto.dac.properties.TransactionResponse';
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
proto.dac.properties.TransactionStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TransactionStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TransactionStatusRequest.displayName = 'proto.dac.properties.TransactionStatusRequest';
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
proto.dac.properties.TransactionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.TransactionStatus.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.TransactionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TransactionStatus.displayName = 'proto.dac.properties.TransactionStatus';
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
proto.dac.properties.TransactionStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.TransactionStep.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.TransactionStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TransactionStep.displayName = 'proto.dac.properties.TransactionStep';
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
proto.dac.properties.CompleteTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.CompleteTransactionRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.CompleteTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.CompleteTransactionRequest.displayName = 'proto.dac.properties.CompleteTransactionRequest';
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
proto.dac.properties.CompletionDocument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.CompletionDocument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.CompletionDocument.displayName = 'proto.dac.properties.CompletionDocument';
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
proto.dac.properties.TransactionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TransactionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TransactionResult.displayName = 'proto.dac.properties.TransactionResult';
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
proto.dac.properties.CancelTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.CancelTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.CancelTransactionRequest.displayName = 'proto.dac.properties.CancelTransactionRequest';
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
proto.dac.properties.TokenizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TokenizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenizationRequest.displayName = 'proto.dac.properties.TokenizationRequest';
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
proto.dac.properties.TokenizationParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.TokenizationParameters.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.TokenizationParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenizationParameters.displayName = 'proto.dac.properties.TokenizationParameters';
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
proto.dac.properties.TokenizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.TokenizationResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.TokenizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenizationResponse.displayName = 'proto.dac.properties.TokenizationResponse';
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
proto.dac.properties.TokenInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TokenInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenInfoRequest.displayName = 'proto.dac.properties.TokenInfoRequest';
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
proto.dac.properties.TokenInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TokenInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenInfo.displayName = 'proto.dac.properties.TokenInfo';
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
proto.dac.properties.TokenMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TokenMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenMetrics.displayName = 'proto.dac.properties.TokenMetrics';
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
proto.dac.properties.TokenTransferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TokenTransferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenTransferRequest.displayName = 'proto.dac.properties.TokenTransferRequest';
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
proto.dac.properties.TokenTransferResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TokenTransferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenTransferResponse.displayName = 'proto.dac.properties.TokenTransferResponse';
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
proto.dac.properties.TokenHoldersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TokenHoldersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenHoldersRequest.displayName = 'proto.dac.properties.TokenHoldersRequest';
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
proto.dac.properties.TokenHoldersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.TokenHoldersResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.TokenHoldersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenHoldersResponse.displayName = 'proto.dac.properties.TokenHoldersResponse';
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
proto.dac.properties.TokenDistribution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TokenDistribution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TokenDistribution.displayName = 'proto.dac.properties.TokenDistribution';
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
proto.dac.properties.ValuationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.ValuationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ValuationRequest.displayName = 'proto.dac.properties.ValuationRequest';
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
proto.dac.properties.ValuationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.ValuationResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.ValuationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ValuationResponse.displayName = 'proto.dac.properties.ValuationResponse';
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
proto.dac.properties.Valuation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.Valuation.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.Valuation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.Valuation.displayName = 'proto.dac.properties.Valuation';
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
proto.dac.properties.ValueRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.ValueRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ValueRange.displayName = 'proto.dac.properties.ValueRange';
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
proto.dac.properties.ComparableProperty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.ComparableProperty.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.ComparableProperty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ComparableProperty.displayName = 'proto.dac.properties.ComparableProperty';
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
proto.dac.properties.ValuationFactor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.ValuationFactor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ValuationFactor.displayName = 'proto.dac.properties.ValuationFactor';
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
proto.dac.properties.ValuationHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.ValuationHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ValuationHistoryRequest.displayName = 'proto.dac.properties.ValuationHistoryRequest';
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
proto.dac.properties.ValuationHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.ValuationHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.ValuationHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ValuationHistoryResponse.displayName = 'proto.dac.properties.ValuationHistoryResponse';
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
proto.dac.properties.ValuationTrend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.ValuationTrend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ValuationTrend.displayName = 'proto.dac.properties.ValuationTrend';
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
proto.dac.properties.UpdateValuationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.UpdateValuationRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.UpdateValuationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.UpdateValuationRequest.displayName = 'proto.dac.properties.UpdateValuationRequest';
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
proto.dac.properties.DocumentUploadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.dac.properties.DocumentUploadRequest.oneofGroups_);
};
goog.inherits(proto.dac.properties.DocumentUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.DocumentUploadRequest.displayName = 'proto.dac.properties.DocumentUploadRequest';
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
proto.dac.properties.DocumentMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.DocumentMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.DocumentMetadata.displayName = 'proto.dac.properties.DocumentMetadata';
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
proto.dac.properties.DocumentUploadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.DocumentUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.DocumentUploadResponse.displayName = 'proto.dac.properties.DocumentUploadResponse';
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
proto.dac.properties.DocumentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.DocumentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.DocumentRequest.displayName = 'proto.dac.properties.DocumentRequest';
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
proto.dac.properties.DocumentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.dac.properties.DocumentResponse.oneofGroups_);
};
goog.inherits(proto.dac.properties.DocumentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.DocumentResponse.displayName = 'proto.dac.properties.DocumentResponse';
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
proto.dac.properties.ListDocumentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.ListDocumentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ListDocumentsRequest.displayName = 'proto.dac.properties.ListDocumentsRequest';
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
proto.dac.properties.DocumentListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.DocumentListResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.DocumentListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.DocumentListResponse.displayName = 'proto.dac.properties.DocumentListResponse';
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
proto.dac.properties.MediaUploadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.dac.properties.MediaUploadRequest.oneofGroups_);
};
goog.inherits(proto.dac.properties.MediaUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.MediaUploadRequest.displayName = 'proto.dac.properties.MediaUploadRequest';
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
proto.dac.properties.MediaMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.MediaMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.MediaMetadata.displayName = 'proto.dac.properties.MediaMetadata';
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
proto.dac.properties.MediaUploadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.MediaUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.MediaUploadResponse.displayName = 'proto.dac.properties.MediaUploadResponse';
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
proto.dac.properties.AnalyticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.AnalyticsRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.AnalyticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.AnalyticsRequest.displayName = 'proto.dac.properties.AnalyticsRequest';
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
proto.dac.properties.PropertyAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.PropertyAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PropertyAnalytics.displayName = 'proto.dac.properties.PropertyAnalytics';
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
proto.dac.properties.ViewAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.ViewAnalytics.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.ViewAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.ViewAnalytics.displayName = 'proto.dac.properties.ViewAnalytics';
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
proto.dac.properties.DailyViews = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.DailyViews, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.DailyViews.displayName = 'proto.dac.properties.DailyViews';
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
proto.dac.properties.InquiryAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.InquiryAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.InquiryAnalytics.displayName = 'proto.dac.properties.InquiryAnalytics';
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
proto.dac.properties.PerformanceMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.PerformanceMetrics.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.PerformanceMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PerformanceMetrics.displayName = 'proto.dac.properties.PerformanceMetrics';
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
proto.dac.properties.DemographicData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.DemographicData.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.DemographicData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.DemographicData.displayName = 'proto.dac.properties.DemographicData';
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
proto.dac.properties.AgeGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.AgeGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.AgeGroup.displayName = 'proto.dac.properties.AgeGroup';
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
proto.dac.properties.MarketTrendsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.MarketTrendsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.MarketTrendsRequest.displayName = 'proto.dac.properties.MarketTrendsRequest';
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
proto.dac.properties.MarketTrendsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.MarketTrendsResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.MarketTrendsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.MarketTrendsResponse.displayName = 'proto.dac.properties.MarketTrendsResponse';
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
proto.dac.properties.MarketTrendData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.MarketTrendData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.MarketTrendData.displayName = 'proto.dac.properties.MarketTrendData';
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
proto.dac.properties.PriceAnalysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.PriceAnalysis.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.PriceAnalysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PriceAnalysis.displayName = 'proto.dac.properties.PriceAnalysis';
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
proto.dac.properties.PriceTrend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.PriceTrend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.PriceTrend.displayName = 'proto.dac.properties.PriceTrend';
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
proto.dac.properties.SupplyDemandAnalysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.SupplyDemandAnalysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.SupplyDemandAnalysis.displayName = 'proto.dac.properties.SupplyDemandAnalysis';
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
proto.dac.properties.MarketInsight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.MarketInsight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.MarketInsight.displayName = 'proto.dac.properties.MarketInsight';
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
proto.dac.properties.RentalAnalyticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.RentalAnalyticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.RentalAnalyticsRequest.displayName = 'proto.dac.properties.RentalAnalyticsRequest';
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
proto.dac.properties.RentalAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.RentalAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.RentalAnalytics.displayName = 'proto.dac.properties.RentalAnalytics';
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
proto.dac.properties.RentalPerformance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.RentalPerformance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.RentalPerformance.displayName = 'proto.dac.properties.RentalPerformance';
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
proto.dac.properties.TenantAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.TenantAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.TenantAnalytics.displayName = 'proto.dac.properties.TenantAnalytics';
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
proto.dac.properties.FinancialMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.FinancialMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.FinancialMetrics.displayName = 'proto.dac.properties.FinancialMetrics';
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
proto.dac.properties.MaintenanceAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.properties.MaintenanceAnalytics.repeatedFields_, null);
};
goog.inherits(proto.dac.properties.MaintenanceAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.MaintenanceAnalytics.displayName = 'proto.dac.properties.MaintenanceAnalytics';
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
proto.dac.properties.MaintenanceCategory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.properties.MaintenanceCategory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.properties.MaintenanceCategory.displayName = 'proto.dac.properties.MaintenanceCategory';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.Property.repeatedFields_ = [10,11,16];



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
proto.dac.properties.Property.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.Property.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.Property} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.Property.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ownerId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    address: (f = msg.getAddress()) && proto.dac.properties.Address.toObject(includeInstance, f),
    details: (f = msg.getDetails()) && proto.dac.properties.PropertyDetails.toObject(includeInstance, f),
    pricing: (f = msg.getPricing()) && proto.dac.properties.PricingInfo.toObject(includeInstance, f),
    imagesList: jspb.Message.toObjectList(msg.getImagesList(),
    proto.dac.properties.PropertyImage.toObject, includeInstance),
    documentsList: jspb.Message.toObjectList(msg.getDocumentsList(),
    proto.dac.properties.PropertyDocument.toObject, includeInstance),
    metrics: (f = msg.getMetrics()) && proto.dac.properties.PropertyMetrics.toObject(includeInstance, f),
    tokenization: (f = msg.getTokenization()) && proto.dac.properties.TokenizationInfo.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    isFeatured: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    owner: (f = msg.getOwner()) && proto.dac.properties.User.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.Property}
 */
proto.dac.properties.Property.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.Property;
  return proto.dac.properties.Property.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.Property} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.Property}
 */
proto.dac.properties.Property.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.dac.properties.PropertyType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {!proto.dac.properties.PropertyStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOwnerId(value);
      break;
    case 7:
      var value = new proto.dac.properties.Address;
      reader.readMessage(value,proto.dac.properties.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 8:
      var value = new proto.dac.properties.PropertyDetails;
      reader.readMessage(value,proto.dac.properties.PropertyDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 9:
      var value = new proto.dac.properties.PricingInfo;
      reader.readMessage(value,proto.dac.properties.PricingInfo.deserializeBinaryFromReader);
      msg.setPricing(value);
      break;
    case 10:
      var value = new proto.dac.properties.PropertyImage;
      reader.readMessage(value,proto.dac.properties.PropertyImage.deserializeBinaryFromReader);
      msg.addImages(value);
      break;
    case 11:
      var value = new proto.dac.properties.PropertyDocument;
      reader.readMessage(value,proto.dac.properties.PropertyDocument.deserializeBinaryFromReader);
      msg.addDocuments(value);
      break;
    case 12:
      var value = new proto.dac.properties.PropertyMetrics;
      reader.readMessage(value,proto.dac.properties.PropertyMetrics.deserializeBinaryFromReader);
      msg.setMetrics(value);
      break;
    case 13:
      var value = new proto.dac.properties.TokenizationInfo;
      reader.readMessage(value,proto.dac.properties.TokenizationInfo.deserializeBinaryFromReader);
      msg.setTokenization(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFeatured(value);
      break;
    case 18:
      var value = new proto.dac.properties.User;
      reader.readMessage(value,proto.dac.properties.User.deserializeBinaryFromReader);
      msg.setOwner(value);
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
proto.dac.properties.Property.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.Property.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.Property} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.Property.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
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
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getOwnerId();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.dac.properties.Address.serializeBinaryToWriter
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.dac.properties.PropertyDetails.serializeBinaryToWriter
    );
  }
  f = message.getPricing();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.dac.properties.PricingInfo.serializeBinaryToWriter
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.dac.properties.PropertyImage.serializeBinaryToWriter
    );
  }
  f = message.getDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.dac.properties.PropertyDocument.serializeBinaryToWriter
    );
  }
  f = message.getMetrics();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.dac.properties.PropertyMetrics.serializeBinaryToWriter
    );
  }
  f = message.getTokenization();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.dac.properties.TokenizationInfo.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getIsFeatured();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.dac.properties.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.dac.properties.Property.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.dac.properties.Property.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.dac.properties.Property.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional PropertyType type = 4;
 * @return {!proto.dac.properties.PropertyType}
 */
proto.dac.properties.Property.prototype.getType = function() {
  return /** @type {!proto.dac.properties.PropertyType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.properties.PropertyType} value
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional PropertyStatus status = 5;
 * @return {!proto.dac.properties.PropertyStatus}
 */
proto.dac.properties.Property.prototype.getStatus = function() {
  return /** @type {!proto.dac.properties.PropertyStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.dac.properties.PropertyStatus} value
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional int32 owner_id = 6;
 * @return {number}
 */
proto.dac.properties.Property.prototype.getOwnerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Address address = 7;
 * @return {?proto.dac.properties.Address}
 */
proto.dac.properties.Property.prototype.getAddress = function() {
  return /** @type{?proto.dac.properties.Address} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.Address, 7));
};


/**
 * @param {?proto.dac.properties.Address|undefined} value
 * @return {!proto.dac.properties.Property} returns this
*/
proto.dac.properties.Property.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.Property.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PropertyDetails details = 8;
 * @return {?proto.dac.properties.PropertyDetails}
 */
proto.dac.properties.Property.prototype.getDetails = function() {
  return /** @type{?proto.dac.properties.PropertyDetails} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PropertyDetails, 8));
};


/**
 * @param {?proto.dac.properties.PropertyDetails|undefined} value
 * @return {!proto.dac.properties.Property} returns this
*/
proto.dac.properties.Property.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.Property.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PricingInfo pricing = 9;
 * @return {?proto.dac.properties.PricingInfo}
 */
proto.dac.properties.Property.prototype.getPricing = function() {
  return /** @type{?proto.dac.properties.PricingInfo} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PricingInfo, 9));
};


/**
 * @param {?proto.dac.properties.PricingInfo|undefined} value
 * @return {!proto.dac.properties.Property} returns this
*/
proto.dac.properties.Property.prototype.setPricing = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearPricing = function() {
  return this.setPricing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.Property.prototype.hasPricing = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated PropertyImage images = 10;
 * @return {!Array<!proto.dac.properties.PropertyImage>}
 */
proto.dac.properties.Property.prototype.getImagesList = function() {
  return /** @type{!Array<!proto.dac.properties.PropertyImage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.PropertyImage, 10));
};


/**
 * @param {!Array<!proto.dac.properties.PropertyImage>} value
 * @return {!proto.dac.properties.Property} returns this
*/
proto.dac.properties.Property.prototype.setImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.dac.properties.PropertyImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.PropertyImage}
 */
proto.dac.properties.Property.prototype.addImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.dac.properties.PropertyImage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};


/**
 * repeated PropertyDocument documents = 11;
 * @return {!Array<!proto.dac.properties.PropertyDocument>}
 */
proto.dac.properties.Property.prototype.getDocumentsList = function() {
  return /** @type{!Array<!proto.dac.properties.PropertyDocument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.PropertyDocument, 11));
};


/**
 * @param {!Array<!proto.dac.properties.PropertyDocument>} value
 * @return {!proto.dac.properties.Property} returns this
*/
proto.dac.properties.Property.prototype.setDocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.dac.properties.PropertyDocument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.PropertyDocument}
 */
proto.dac.properties.Property.prototype.addDocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.dac.properties.PropertyDocument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearDocumentsList = function() {
  return this.setDocumentsList([]);
};


/**
 * optional PropertyMetrics metrics = 12;
 * @return {?proto.dac.properties.PropertyMetrics}
 */
proto.dac.properties.Property.prototype.getMetrics = function() {
  return /** @type{?proto.dac.properties.PropertyMetrics} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PropertyMetrics, 12));
};


/**
 * @param {?proto.dac.properties.PropertyMetrics|undefined} value
 * @return {!proto.dac.properties.Property} returns this
*/
proto.dac.properties.Property.prototype.setMetrics = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearMetrics = function() {
  return this.setMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.Property.prototype.hasMetrics = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional TokenizationInfo tokenization = 13;
 * @return {?proto.dac.properties.TokenizationInfo}
 */
proto.dac.properties.Property.prototype.getTokenization = function() {
  return /** @type{?proto.dac.properties.TokenizationInfo} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.TokenizationInfo, 13));
};


/**
 * @param {?proto.dac.properties.TokenizationInfo|undefined} value
 * @return {!proto.dac.properties.Property} returns this
*/
proto.dac.properties.Property.prototype.setTokenization = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearTokenization = function() {
  return this.setTokenization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.Property.prototype.hasTokenization = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.Property.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.Property} returns this
*/
proto.dac.properties.Property.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.Property.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.Property.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.Property} returns this
*/
proto.dac.properties.Property.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.Property.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated string tags = 16;
 * @return {!Array<string>}
 */
proto.dac.properties.Property.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional bool is_featured = 17;
 * @return {boolean}
 */
proto.dac.properties.Property.prototype.getIsFeatured = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.setIsFeatured = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional User owner = 18;
 * @return {?proto.dac.properties.User}
 */
proto.dac.properties.Property.prototype.getOwner = function() {
  return /** @type{?proto.dac.properties.User} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.User, 18));
};


/**
 * @param {?proto.dac.properties.User|undefined} value
 * @return {!proto.dac.properties.Property} returns this
*/
proto.dac.properties.Property.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.Property} returns this
 */
proto.dac.properties.Property.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.Property.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 18) != null;
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
proto.dac.properties.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    streetAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    city: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    country: jspb.Message.getFieldWithDefault(msg, 5, ""),
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    neighborhood: jspb.Message.getFieldWithDefault(msg, 8, ""),
    schoolDistrict: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.dac.properties.Address}
 */
proto.dac.properties.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.Address;
  return proto.dac.properties.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.Address}
 */
proto.dac.properties.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreetAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNeighborhood(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchoolDistrict(value);
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
proto.dac.properties.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreetAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getNeighborhood();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSchoolDistrict();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string street_address = 1;
 * @return {string}
 */
proto.dac.properties.Address.prototype.getStreetAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Address} returns this
 */
proto.dac.properties.Address.prototype.setStreetAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string city = 2;
 * @return {string}
 */
proto.dac.properties.Address.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Address} returns this
 */
proto.dac.properties.Address.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string state = 3;
 * @return {string}
 */
proto.dac.properties.Address.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Address} returns this
 */
proto.dac.properties.Address.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string postal_code = 4;
 * @return {string}
 */
proto.dac.properties.Address.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Address} returns this
 */
proto.dac.properties.Address.prototype.setPostalCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string country = 5;
 * @return {string}
 */
proto.dac.properties.Address.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Address} returns this
 */
proto.dac.properties.Address.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double latitude = 6;
 * @return {number}
 */
proto.dac.properties.Address.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.Address} returns this
 */
proto.dac.properties.Address.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double longitude = 7;
 * @return {number}
 */
proto.dac.properties.Address.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.Address} returns this
 */
proto.dac.properties.Address.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string neighborhood = 8;
 * @return {string}
 */
proto.dac.properties.Address.prototype.getNeighborhood = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Address} returns this
 */
proto.dac.properties.Address.prototype.setNeighborhood = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string school_district = 9;
 * @return {string}
 */
proto.dac.properties.Address.prototype.getSchoolDistrict = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Address} returns this
 */
proto.dac.properties.Address.prototype.setSchoolDistrict = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.PropertyDetails.repeatedFields_ = [7,8,15];



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
proto.dac.properties.PropertyDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PropertyDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PropertyDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    squareFootage: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    bedrooms: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bathrooms: jspb.Message.getFieldWithDefault(msg, 3, 0),
    yearBuilt: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lotSize: jspb.Message.getFieldWithDefault(msg, 5, ""),
    condition: jspb.Message.getFieldWithDefault(msg, 6, 0),
    featuresList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    amenitiesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    parkingType: jspb.Message.getFieldWithDefault(msg, 9, ""),
    parkingSpaces: jspb.Message.getFieldWithDefault(msg, 10, 0),
    hasGarage: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    hasPool: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    hasGarden: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    heatingCooling: (f = msg.getHeatingCooling()) && proto.dac.properties.HeatingCooling.toObject(includeInstance, f),
    flooringTypesList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f
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
 * @return {!proto.dac.properties.PropertyDetails}
 */
proto.dac.properties.PropertyDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PropertyDetails;
  return proto.dac.properties.PropertyDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PropertyDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PropertyDetails}
 */
proto.dac.properties.PropertyDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSquareFootage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBedrooms(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBathrooms(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYearBuilt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLotSize(value);
      break;
    case 6:
      var value = /** @type {!proto.dac.properties.PropertyCondition} */ (reader.readEnum());
      msg.setCondition(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addFeatures(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addAmenities(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setParkingType(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParkingSpaces(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasGarage(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasPool(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasGarden(value);
      break;
    case 14:
      var value = new proto.dac.properties.HeatingCooling;
      reader.readMessage(value,proto.dac.properties.HeatingCooling.deserializeBinaryFromReader);
      msg.setHeatingCooling(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addFlooringTypes(value);
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
proto.dac.properties.PropertyDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PropertyDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PropertyDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSquareFootage();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getBedrooms();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBathrooms();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getYearBuilt();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLotSize();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCondition();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getFeaturesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getAmenitiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getParkingType();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getParkingSpaces();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getHasGarage();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getHasPool();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getHasGarden();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getHeatingCooling();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.dac.properties.HeatingCooling.serializeBinaryToWriter
    );
  }
  f = message.getFlooringTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
};


/**
 * optional double square_footage = 1;
 * @return {number}
 */
proto.dac.properties.PropertyDetails.prototype.getSquareFootage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setSquareFootage = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional int32 bedrooms = 2;
 * @return {number}
 */
proto.dac.properties.PropertyDetails.prototype.getBedrooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setBedrooms = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 bathrooms = 3;
 * @return {number}
 */
proto.dac.properties.PropertyDetails.prototype.getBathrooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setBathrooms = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 year_built = 4;
 * @return {number}
 */
proto.dac.properties.PropertyDetails.prototype.getYearBuilt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setYearBuilt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string lot_size = 5;
 * @return {string}
 */
proto.dac.properties.PropertyDetails.prototype.getLotSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setLotSize = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional PropertyCondition condition = 6;
 * @return {!proto.dac.properties.PropertyCondition}
 */
proto.dac.properties.PropertyDetails.prototype.getCondition = function() {
  return /** @type {!proto.dac.properties.PropertyCondition} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.dac.properties.PropertyCondition} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setCondition = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated string features = 7;
 * @return {!Array<string>}
 */
proto.dac.properties.PropertyDetails.prototype.getFeaturesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setFeaturesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.addFeatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.clearFeaturesList = function() {
  return this.setFeaturesList([]);
};


/**
 * repeated string amenities = 8;
 * @return {!Array<string>}
 */
proto.dac.properties.PropertyDetails.prototype.getAmenitiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setAmenitiesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.addAmenities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.clearAmenitiesList = function() {
  return this.setAmenitiesList([]);
};


/**
 * optional string parking_type = 9;
 * @return {string}
 */
proto.dac.properties.PropertyDetails.prototype.getParkingType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setParkingType = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 parking_spaces = 10;
 * @return {number}
 */
proto.dac.properties.PropertyDetails.prototype.getParkingSpaces = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setParkingSpaces = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool has_garage = 11;
 * @return {boolean}
 */
proto.dac.properties.PropertyDetails.prototype.getHasGarage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setHasGarage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool has_pool = 12;
 * @return {boolean}
 */
proto.dac.properties.PropertyDetails.prototype.getHasPool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setHasPool = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool has_garden = 13;
 * @return {boolean}
 */
proto.dac.properties.PropertyDetails.prototype.getHasGarden = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setHasGarden = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional HeatingCooling heating_cooling = 14;
 * @return {?proto.dac.properties.HeatingCooling}
 */
proto.dac.properties.PropertyDetails.prototype.getHeatingCooling = function() {
  return /** @type{?proto.dac.properties.HeatingCooling} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.HeatingCooling, 14));
};


/**
 * @param {?proto.dac.properties.HeatingCooling|undefined} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
*/
proto.dac.properties.PropertyDetails.prototype.setHeatingCooling = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.clearHeatingCooling = function() {
  return this.setHeatingCooling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyDetails.prototype.hasHeatingCooling = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated string flooring_types = 15;
 * @return {!Array<string>}
 */
proto.dac.properties.PropertyDetails.prototype.getFlooringTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.setFlooringTypesList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.addFlooringTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.PropertyDetails} returns this
 */
proto.dac.properties.PropertyDetails.prototype.clearFlooringTypesList = function() {
  return this.setFlooringTypesList([]);
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
proto.dac.properties.HeatingCooling.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.HeatingCooling.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.HeatingCooling} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.HeatingCooling.toObject = function(includeInstance, msg) {
  var f, obj = {
    heatingType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coolingType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hvacAge: jspb.Message.getFieldWithDefault(msg, 3, 0),
    energyEfficiency: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.dac.properties.HeatingCooling}
 */
proto.dac.properties.HeatingCooling.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.HeatingCooling;
  return proto.dac.properties.HeatingCooling.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.HeatingCooling} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.HeatingCooling}
 */
proto.dac.properties.HeatingCooling.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeatingType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCoolingType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHvacAge(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnergyEfficiency(value);
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
proto.dac.properties.HeatingCooling.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.HeatingCooling.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.HeatingCooling} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.HeatingCooling.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeatingType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCoolingType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHvacAge();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getEnergyEfficiency();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string heating_type = 1;
 * @return {string}
 */
proto.dac.properties.HeatingCooling.prototype.getHeatingType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.HeatingCooling} returns this
 */
proto.dac.properties.HeatingCooling.prototype.setHeatingType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cooling_type = 2;
 * @return {string}
 */
proto.dac.properties.HeatingCooling.prototype.getCoolingType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.HeatingCooling} returns this
 */
proto.dac.properties.HeatingCooling.prototype.setCoolingType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 hvac_age = 3;
 * @return {number}
 */
proto.dac.properties.HeatingCooling.prototype.getHvacAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.HeatingCooling} returns this
 */
proto.dac.properties.HeatingCooling.prototype.setHvacAge = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string energy_efficiency = 4;
 * @return {string}
 */
proto.dac.properties.HeatingCooling.prototype.getEnergyEfficiency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.HeatingCooling} returns this
 */
proto.dac.properties.HeatingCooling.prototype.setEnergyEfficiency = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.dac.properties.PricingInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PricingInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PricingInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PricingInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    listingPrice: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pricePerSqft: jspb.Message.getFieldWithDefault(msg, 2, ""),
    estimatedValue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    monthlyRent: jspb.Message.getFieldWithDefault(msg, 4, ""),
    annualPropertyTax: jspb.Message.getFieldWithDefault(msg, 5, ""),
    hoaFees: jspb.Message.getFieldWithDefault(msg, 6, ""),
    insuranceCost: jspb.Message.getFieldWithDefault(msg, 7, ""),
    priceHistory: (f = msg.getPriceHistory()) && proto.dac.properties.PriceHistory.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.PricingInfo}
 */
proto.dac.properties.PricingInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PricingInfo;
  return proto.dac.properties.PricingInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PricingInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PricingInfo}
 */
proto.dac.properties.PricingInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setListingPrice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPricePerSqft(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEstimatedValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonthlyRent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnnualPropertyTax(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHoaFees(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsuranceCost(value);
      break;
    case 8:
      var value = new proto.dac.properties.PriceHistory;
      reader.readMessage(value,proto.dac.properties.PriceHistory.deserializeBinaryFromReader);
      msg.setPriceHistory(value);
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
proto.dac.properties.PricingInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PricingInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PricingInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PricingInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListingPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPricePerSqft();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEstimatedValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMonthlyRent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAnnualPropertyTax();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHoaFees();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInsuranceCost();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPriceHistory();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.dac.properties.PriceHistory.serializeBinaryToWriter
    );
  }
};


/**
 * optional string listing_price = 1;
 * @return {string}
 */
proto.dac.properties.PricingInfo.prototype.getListingPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PricingInfo} returns this
 */
proto.dac.properties.PricingInfo.prototype.setListingPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string price_per_sqft = 2;
 * @return {string}
 */
proto.dac.properties.PricingInfo.prototype.getPricePerSqft = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PricingInfo} returns this
 */
proto.dac.properties.PricingInfo.prototype.setPricePerSqft = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string estimated_value = 3;
 * @return {string}
 */
proto.dac.properties.PricingInfo.prototype.getEstimatedValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PricingInfo} returns this
 */
proto.dac.properties.PricingInfo.prototype.setEstimatedValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string monthly_rent = 4;
 * @return {string}
 */
proto.dac.properties.PricingInfo.prototype.getMonthlyRent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PricingInfo} returns this
 */
proto.dac.properties.PricingInfo.prototype.setMonthlyRent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string annual_property_tax = 5;
 * @return {string}
 */
proto.dac.properties.PricingInfo.prototype.getAnnualPropertyTax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PricingInfo} returns this
 */
proto.dac.properties.PricingInfo.prototype.setAnnualPropertyTax = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string hoa_fees = 6;
 * @return {string}
 */
proto.dac.properties.PricingInfo.prototype.getHoaFees = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PricingInfo} returns this
 */
proto.dac.properties.PricingInfo.prototype.setHoaFees = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string insurance_cost = 7;
 * @return {string}
 */
proto.dac.properties.PricingInfo.prototype.getInsuranceCost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PricingInfo} returns this
 */
proto.dac.properties.PricingInfo.prototype.setInsuranceCost = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional PriceHistory price_history = 8;
 * @return {?proto.dac.properties.PriceHistory}
 */
proto.dac.properties.PricingInfo.prototype.getPriceHistory = function() {
  return /** @type{?proto.dac.properties.PriceHistory} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PriceHistory, 8));
};


/**
 * @param {?proto.dac.properties.PriceHistory|undefined} value
 * @return {!proto.dac.properties.PricingInfo} returns this
*/
proto.dac.properties.PricingInfo.prototype.setPriceHistory = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PricingInfo} returns this
 */
proto.dac.properties.PricingInfo.prototype.clearPriceHistory = function() {
  return this.setPriceHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PricingInfo.prototype.hasPriceHistory = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.PriceHistory.repeatedFields_ = [1];



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
proto.dac.properties.PriceHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PriceHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PriceHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PriceHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    pricePointsList: jspb.Message.toObjectList(msg.getPricePointsList(),
    proto.dac.properties.PricePoint.toObject, includeInstance)
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
 * @return {!proto.dac.properties.PriceHistory}
 */
proto.dac.properties.PriceHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PriceHistory;
  return proto.dac.properties.PriceHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PriceHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PriceHistory}
 */
proto.dac.properties.PriceHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.PricePoint;
      reader.readMessage(value,proto.dac.properties.PricePoint.deserializeBinaryFromReader);
      msg.addPricePoints(value);
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
proto.dac.properties.PriceHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PriceHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PriceHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PriceHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPricePointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.properties.PricePoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PricePoint price_points = 1;
 * @return {!Array<!proto.dac.properties.PricePoint>}
 */
proto.dac.properties.PriceHistory.prototype.getPricePointsList = function() {
  return /** @type{!Array<!proto.dac.properties.PricePoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.PricePoint, 1));
};


/**
 * @param {!Array<!proto.dac.properties.PricePoint>} value
 * @return {!proto.dac.properties.PriceHistory} returns this
*/
proto.dac.properties.PriceHistory.prototype.setPricePointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.properties.PricePoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.PricePoint}
 */
proto.dac.properties.PriceHistory.prototype.addPricePoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.properties.PricePoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.PriceHistory} returns this
 */
proto.dac.properties.PriceHistory.prototype.clearPricePointsList = function() {
  return this.setPricePointsList([]);
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
proto.dac.properties.PricePoint.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PricePoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PricePoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PricePoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFieldWithDefault(msg, 1, ""),
    date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    reason: jspb.Message.getFieldWithDefault(msg, 3, 0),
    notes: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.dac.properties.PricePoint}
 */
proto.dac.properties.PricePoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PricePoint;
  return proto.dac.properties.PricePoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PricePoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PricePoint}
 */
proto.dac.properties.PricePoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.properties.PriceChangeReason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
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
proto.dac.properties.PricePoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PricePoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PricePoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PricePoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string price = 1;
 * @return {string}
 */
proto.dac.properties.PricePoint.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PricePoint} returns this
 */
proto.dac.properties.PricePoint.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.PricePoint.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.PricePoint} returns this
*/
proto.dac.properties.PricePoint.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PricePoint} returns this
 */
proto.dac.properties.PricePoint.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PricePoint.prototype.hasDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PriceChangeReason reason = 3;
 * @return {!proto.dac.properties.PriceChangeReason}
 */
proto.dac.properties.PricePoint.prototype.getReason = function() {
  return /** @type {!proto.dac.properties.PriceChangeReason} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.properties.PriceChangeReason} value
 * @return {!proto.dac.properties.PricePoint} returns this
 */
proto.dac.properties.PricePoint.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string notes = 4;
 * @return {string}
 */
proto.dac.properties.PricePoint.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PricePoint} returns this
 */
proto.dac.properties.PricePoint.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.dac.properties.PropertyImage.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PropertyImage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PropertyImage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyImage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    thumbnailUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    caption: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    orderIndex: jspb.Message.getFieldWithDefault(msg, 6, 0),
    uploadedAt: (f = msg.getUploadedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.PropertyImage}
 */
proto.dac.properties.PropertyImage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PropertyImage;
  return proto.dac.properties.PropertyImage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PropertyImage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PropertyImage}
 */
proto.dac.properties.PropertyImage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 5:
      var value = /** @type {!proto.dac.properties.ImageType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrderIndex(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUploadedAt(value);
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
proto.dac.properties.PropertyImage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PropertyImage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PropertyImage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyImage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
  f = message.getThumbnailUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCaption();
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
  f = message.getOrderIndex();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getUploadedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.dac.properties.PropertyImage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyImage} returns this
 */
proto.dac.properties.PropertyImage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.dac.properties.PropertyImage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyImage} returns this
 */
proto.dac.properties.PropertyImage.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string thumbnail_url = 3;
 * @return {string}
 */
proto.dac.properties.PropertyImage.prototype.getThumbnailUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyImage} returns this
 */
proto.dac.properties.PropertyImage.prototype.setThumbnailUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string caption = 4;
 * @return {string}
 */
proto.dac.properties.PropertyImage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyImage} returns this
 */
proto.dac.properties.PropertyImage.prototype.setCaption = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ImageType type = 5;
 * @return {!proto.dac.properties.ImageType}
 */
proto.dac.properties.PropertyImage.prototype.getType = function() {
  return /** @type {!proto.dac.properties.ImageType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.dac.properties.ImageType} value
 * @return {!proto.dac.properties.PropertyImage} returns this
 */
proto.dac.properties.PropertyImage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional int32 order_index = 6;
 * @return {number}
 */
proto.dac.properties.PropertyImage.prototype.getOrderIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyImage} returns this
 */
proto.dac.properties.PropertyImage.prototype.setOrderIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp uploaded_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.PropertyImage.prototype.getUploadedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.PropertyImage} returns this
*/
proto.dac.properties.PropertyImage.prototype.setUploadedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertyImage} returns this
 */
proto.dac.properties.PropertyImage.prototype.clearUploadedAt = function() {
  return this.setUploadedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyImage.prototype.hasUploadedAt = function() {
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
proto.dac.properties.PropertyDocument.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PropertyDocument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PropertyDocument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyDocument.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fileSize: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mimeType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    uploadedAt: (f = msg.getUploadedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    isPublic: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.dac.properties.PropertyDocument}
 */
proto.dac.properties.PropertyDocument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PropertyDocument;
  return proto.dac.properties.PropertyDocument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PropertyDocument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PropertyDocument}
 */
proto.dac.properties.PropertyDocument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
      var value = /** @type {!proto.dac.properties.DocumentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimeType(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUploadedAt(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPublic(value);
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
proto.dac.properties.PropertyDocument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PropertyDocument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PropertyDocument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyDocument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getUploadedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIsPublic();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.dac.properties.PropertyDocument.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyDocument} returns this
 */
proto.dac.properties.PropertyDocument.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.dac.properties.PropertyDocument.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyDocument} returns this
 */
proto.dac.properties.PropertyDocument.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.dac.properties.PropertyDocument.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyDocument} returns this
 */
proto.dac.properties.PropertyDocument.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional DocumentType type = 4;
 * @return {!proto.dac.properties.DocumentType}
 */
proto.dac.properties.PropertyDocument.prototype.getType = function() {
  return /** @type {!proto.dac.properties.DocumentType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.properties.DocumentType} value
 * @return {!proto.dac.properties.PropertyDocument} returns this
 */
proto.dac.properties.PropertyDocument.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string file_size = 5;
 * @return {string}
 */
proto.dac.properties.PropertyDocument.prototype.getFileSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyDocument} returns this
 */
proto.dac.properties.PropertyDocument.prototype.setFileSize = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string mime_type = 6;
 * @return {string}
 */
proto.dac.properties.PropertyDocument.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyDocument} returns this
 */
proto.dac.properties.PropertyDocument.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp uploaded_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.PropertyDocument.prototype.getUploadedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.PropertyDocument} returns this
*/
proto.dac.properties.PropertyDocument.prototype.setUploadedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertyDocument} returns this
 */
proto.dac.properties.PropertyDocument.prototype.clearUploadedAt = function() {
  return this.setUploadedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyDocument.prototype.hasUploadedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_public = 8;
 * @return {boolean}
 */
proto.dac.properties.PropertyDocument.prototype.getIsPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.PropertyDocument} returns this
 */
proto.dac.properties.PropertyDocument.prototype.setIsPublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.dac.properties.PropertyMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PropertyMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PropertyMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    walkabilityScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    transitScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    bikeScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    crimeRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    schoolRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    daysOnMarket: jspb.Message.getFieldWithDefault(msg, 6, 0),
    viewCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    inquiryCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    capRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    rentalYield: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0)
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
 * @return {!proto.dac.properties.PropertyMetrics}
 */
proto.dac.properties.PropertyMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PropertyMetrics;
  return proto.dac.properties.PropertyMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PropertyMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PropertyMetrics}
 */
proto.dac.properties.PropertyMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWalkabilityScore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransitScore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBikeScore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCrimeRate(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSchoolRating(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDaysOnMarket(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setViewCount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInquiryCount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCapRate(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRentalYield(value);
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
proto.dac.properties.PropertyMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PropertyMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PropertyMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalkabilityScore();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getTransitScore();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getBikeScore();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getCrimeRate();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getSchoolRating();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getDaysOnMarket();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getViewCount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getInquiryCount();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getCapRate();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getRentalYield();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
};


/**
 * optional double walkability_score = 1;
 * @return {number}
 */
proto.dac.properties.PropertyMetrics.prototype.getWalkabilityScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyMetrics} returns this
 */
proto.dac.properties.PropertyMetrics.prototype.setWalkabilityScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double transit_score = 2;
 * @return {number}
 */
proto.dac.properties.PropertyMetrics.prototype.getTransitScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyMetrics} returns this
 */
proto.dac.properties.PropertyMetrics.prototype.setTransitScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double bike_score = 3;
 * @return {number}
 */
proto.dac.properties.PropertyMetrics.prototype.getBikeScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyMetrics} returns this
 */
proto.dac.properties.PropertyMetrics.prototype.setBikeScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double crime_rate = 4;
 * @return {number}
 */
proto.dac.properties.PropertyMetrics.prototype.getCrimeRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyMetrics} returns this
 */
proto.dac.properties.PropertyMetrics.prototype.setCrimeRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double school_rating = 5;
 * @return {number}
 */
proto.dac.properties.PropertyMetrics.prototype.getSchoolRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyMetrics} returns this
 */
proto.dac.properties.PropertyMetrics.prototype.setSchoolRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int32 days_on_market = 6;
 * @return {number}
 */
proto.dac.properties.PropertyMetrics.prototype.getDaysOnMarket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyMetrics} returns this
 */
proto.dac.properties.PropertyMetrics.prototype.setDaysOnMarket = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 view_count = 7;
 * @return {number}
 */
proto.dac.properties.PropertyMetrics.prototype.getViewCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyMetrics} returns this
 */
proto.dac.properties.PropertyMetrics.prototype.setViewCount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 inquiry_count = 8;
 * @return {number}
 */
proto.dac.properties.PropertyMetrics.prototype.getInquiryCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyMetrics} returns this
 */
proto.dac.properties.PropertyMetrics.prototype.setInquiryCount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional double cap_rate = 9;
 * @return {number}
 */
proto.dac.properties.PropertyMetrics.prototype.getCapRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyMetrics} returns this
 */
proto.dac.properties.PropertyMetrics.prototype.setCapRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double rental_yield = 10;
 * @return {number}
 */
proto.dac.properties.PropertyMetrics.prototype.getRentalYield = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyMetrics} returns this
 */
proto.dac.properties.PropertyMetrics.prototype.setRentalYield = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.TokenizationInfo.repeatedFields_ = [7];



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
proto.dac.properties.TokenizationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenizationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenizationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenizationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    isTokenized: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    tokenContractAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalTokens: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tokensAvailable: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tokenPrice: jspb.Message.getFieldWithDefault(msg, 5, ""),
    minimumInvestment: jspb.Message.getFieldWithDefault(msg, 6, ""),
    tokenHoldersList: jspb.Message.toObjectList(msg.getTokenHoldersList(),
    proto.dac.properties.TokenHolder.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.dac.properties.TokenizationInfo}
 */
proto.dac.properties.TokenizationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenizationInfo;
  return proto.dac.properties.TokenizationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenizationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenizationInfo}
 */
proto.dac.properties.TokenizationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTokenized(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenContractAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalTokens(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokensAvailable(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenPrice(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinimumInvestment(value);
      break;
    case 7:
      var value = new proto.dac.properties.TokenHolder;
      reader.readMessage(value,proto.dac.properties.TokenHolder.deserializeBinaryFromReader);
      msg.addTokenHolders(value);
      break;
    case 8:
      var value = /** @type {!proto.dac.properties.TokenizationStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.dac.properties.TokenizationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenizationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenizationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenizationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsTokenized();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTokenContractAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalTokens();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTokensAvailable();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTokenPrice();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMinimumInvestment();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTokenHoldersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.dac.properties.TokenHolder.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional bool is_tokenized = 1;
 * @return {boolean}
 */
proto.dac.properties.TokenizationInfo.prototype.getIsTokenized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.TokenizationInfo} returns this
 */
proto.dac.properties.TokenizationInfo.prototype.setIsTokenized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string token_contract_address = 2;
 * @return {string}
 */
proto.dac.properties.TokenizationInfo.prototype.getTokenContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationInfo} returns this
 */
proto.dac.properties.TokenizationInfo.prototype.setTokenContractAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string total_tokens = 3;
 * @return {string}
 */
proto.dac.properties.TokenizationInfo.prototype.getTotalTokens = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationInfo} returns this
 */
proto.dac.properties.TokenizationInfo.prototype.setTotalTokens = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string tokens_available = 4;
 * @return {string}
 */
proto.dac.properties.TokenizationInfo.prototype.getTokensAvailable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationInfo} returns this
 */
proto.dac.properties.TokenizationInfo.prototype.setTokensAvailable = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string token_price = 5;
 * @return {string}
 */
proto.dac.properties.TokenizationInfo.prototype.getTokenPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationInfo} returns this
 */
proto.dac.properties.TokenizationInfo.prototype.setTokenPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string minimum_investment = 6;
 * @return {string}
 */
proto.dac.properties.TokenizationInfo.prototype.getMinimumInvestment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationInfo} returns this
 */
proto.dac.properties.TokenizationInfo.prototype.setMinimumInvestment = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated TokenHolder token_holders = 7;
 * @return {!Array<!proto.dac.properties.TokenHolder>}
 */
proto.dac.properties.TokenizationInfo.prototype.getTokenHoldersList = function() {
  return /** @type{!Array<!proto.dac.properties.TokenHolder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.TokenHolder, 7));
};


/**
 * @param {!Array<!proto.dac.properties.TokenHolder>} value
 * @return {!proto.dac.properties.TokenizationInfo} returns this
*/
proto.dac.properties.TokenizationInfo.prototype.setTokenHoldersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.dac.properties.TokenHolder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.TokenHolder}
 */
proto.dac.properties.TokenizationInfo.prototype.addTokenHolders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.dac.properties.TokenHolder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.TokenizationInfo} returns this
 */
proto.dac.properties.TokenizationInfo.prototype.clearTokenHoldersList = function() {
  return this.setTokenHoldersList([]);
};


/**
 * optional TokenizationStatus status = 8;
 * @return {!proto.dac.properties.TokenizationStatus}
 */
proto.dac.properties.TokenizationInfo.prototype.getStatus = function() {
  return /** @type {!proto.dac.properties.TokenizationStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.dac.properties.TokenizationStatus} value
 * @return {!proto.dac.properties.TokenizationInfo} returns this
 */
proto.dac.properties.TokenizationInfo.prototype.setStatus = function(value) {
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
proto.dac.properties.TokenHolder.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenHolder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenHolder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenHolder.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tokenAmount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ownershipPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    acquiredAt: (f = msg.getAcquiredAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.dac.properties.User.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.TokenHolder}
 */
proto.dac.properties.TokenHolder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenHolder;
  return proto.dac.properties.TokenHolder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenHolder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenHolder}
 */
proto.dac.properties.TokenHolder.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTokenAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOwnershipPercentage(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAcquiredAt(value);
      break;
    case 5:
      var value = new proto.dac.properties.User;
      reader.readMessage(value,proto.dac.properties.User.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.dac.properties.TokenHolder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenHolder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenHolder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenHolder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTokenAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOwnershipPercentage();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getAcquiredAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.dac.properties.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 user_id = 1;
 * @return {number}
 */
proto.dac.properties.TokenHolder.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenHolder} returns this
 */
proto.dac.properties.TokenHolder.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token_amount = 2;
 * @return {string}
 */
proto.dac.properties.TokenHolder.prototype.getTokenAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenHolder} returns this
 */
proto.dac.properties.TokenHolder.prototype.setTokenAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double ownership_percentage = 3;
 * @return {number}
 */
proto.dac.properties.TokenHolder.prototype.getOwnershipPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenHolder} returns this
 */
proto.dac.properties.TokenHolder.prototype.setOwnershipPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp acquired_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.TokenHolder.prototype.getAcquiredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.TokenHolder} returns this
*/
proto.dac.properties.TokenHolder.prototype.setAcquiredAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TokenHolder} returns this
 */
proto.dac.properties.TokenHolder.prototype.clearAcquiredAt = function() {
  return this.setAcquiredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TokenHolder.prototype.hasAcquiredAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional User user = 5;
 * @return {?proto.dac.properties.User}
 */
proto.dac.properties.TokenHolder.prototype.getUser = function() {
  return /** @type{?proto.dac.properties.User} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.User, 5));
};


/**
 * @param {?proto.dac.properties.User|undefined} value
 * @return {!proto.dac.properties.TokenHolder} returns this
*/
proto.dac.properties.TokenHolder.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TokenHolder} returns this
 */
proto.dac.properties.TokenHolder.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TokenHolder.prototype.hasUser = function() {
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
proto.dac.properties.User.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    membershipTier: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.dac.properties.User}
 */
proto.dac.properties.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.User;
  return proto.dac.properties.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.User}
 */
proto.dac.properties.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMembershipTier(value);
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
proto.dac.properties.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMembershipTier();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.dac.properties.User.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.User} returns this
 */
proto.dac.properties.User.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.dac.properties.User.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.User} returns this
 */
proto.dac.properties.User.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.dac.properties.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.User} returns this
 */
proto.dac.properties.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.dac.properties.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.User} returns this
 */
proto.dac.properties.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string avatar_url = 5;
 * @return {string}
 */
proto.dac.properties.User.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.User} returns this
 */
proto.dac.properties.User.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string membership_tier = 6;
 * @return {string}
 */
proto.dac.properties.User.prototype.getMembershipTier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.User} returns this
 */
proto.dac.properties.User.prototype.setMembershipTier = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.CreatePropertyRequest.repeatedFields_ = [8];



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
proto.dac.properties.CreatePropertyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.CreatePropertyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.CreatePropertyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.CreatePropertyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ownerId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    address: (f = msg.getAddress()) && proto.dac.properties.Address.toObject(includeInstance, f),
    details: (f = msg.getDetails()) && proto.dac.properties.PropertyDetails.toObject(includeInstance, f),
    pricing: (f = msg.getPricing()) && proto.dac.properties.PricingInfo.toObject(includeInstance, f),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    isFeatured: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
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
 * @return {!proto.dac.properties.CreatePropertyRequest}
 */
proto.dac.properties.CreatePropertyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.CreatePropertyRequest;
  return proto.dac.properties.CreatePropertyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.CreatePropertyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.CreatePropertyRequest}
 */
proto.dac.properties.CreatePropertyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.properties.PropertyType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOwnerId(value);
      break;
    case 5:
      var value = new proto.dac.properties.Address;
      reader.readMessage(value,proto.dac.properties.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 6:
      var value = new proto.dac.properties.PropertyDetails;
      reader.readMessage(value,proto.dac.properties.PropertyDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 7:
      var value = new proto.dac.properties.PricingInfo;
      reader.readMessage(value,proto.dac.properties.PricingInfo.deserializeBinaryFromReader);
      msg.setPricing(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFeatured(value);
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
proto.dac.properties.CreatePropertyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.CreatePropertyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.CreatePropertyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.CreatePropertyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
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
  f = message.getOwnerId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.dac.properties.Address.serializeBinaryToWriter
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.dac.properties.PropertyDetails.serializeBinaryToWriter
    );
  }
  f = message.getPricing();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.dac.properties.PricingInfo.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getIsFeatured();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.dac.properties.CreatePropertyRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dac.properties.CreatePropertyRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PropertyType type = 3;
 * @return {!proto.dac.properties.PropertyType}
 */
proto.dac.properties.CreatePropertyRequest.prototype.getType = function() {
  return /** @type {!proto.dac.properties.PropertyType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.properties.PropertyType} value
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 owner_id = 4;
 * @return {number}
 */
proto.dac.properties.CreatePropertyRequest.prototype.getOwnerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Address address = 5;
 * @return {?proto.dac.properties.Address}
 */
proto.dac.properties.CreatePropertyRequest.prototype.getAddress = function() {
  return /** @type{?proto.dac.properties.Address} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.Address, 5));
};


/**
 * @param {?proto.dac.properties.Address|undefined} value
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
*/
proto.dac.properties.CreatePropertyRequest.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.CreatePropertyRequest.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PropertyDetails details = 6;
 * @return {?proto.dac.properties.PropertyDetails}
 */
proto.dac.properties.CreatePropertyRequest.prototype.getDetails = function() {
  return /** @type{?proto.dac.properties.PropertyDetails} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PropertyDetails, 6));
};


/**
 * @param {?proto.dac.properties.PropertyDetails|undefined} value
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
*/
proto.dac.properties.CreatePropertyRequest.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.CreatePropertyRequest.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PricingInfo pricing = 7;
 * @return {?proto.dac.properties.PricingInfo}
 */
proto.dac.properties.CreatePropertyRequest.prototype.getPricing = function() {
  return /** @type{?proto.dac.properties.PricingInfo} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PricingInfo, 7));
};


/**
 * @param {?proto.dac.properties.PricingInfo|undefined} value
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
*/
proto.dac.properties.CreatePropertyRequest.prototype.setPricing = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.clearPricing = function() {
  return this.setPricing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.CreatePropertyRequest.prototype.hasPricing = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.dac.properties.CreatePropertyRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional bool is_featured = 9;
 * @return {boolean}
 */
proto.dac.properties.CreatePropertyRequest.prototype.getIsFeatured = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.CreatePropertyRequest} returns this
 */
proto.dac.properties.CreatePropertyRequest.prototype.setIsFeatured = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
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
proto.dac.properties.GetPropertyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.GetPropertyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.GetPropertyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.GetPropertyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    includeAnalytics: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    includeDocuments: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.dac.properties.GetPropertyRequest}
 */
proto.dac.properties.GetPropertyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.GetPropertyRequest;
  return proto.dac.properties.GetPropertyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.GetPropertyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.GetPropertyRequest}
 */
proto.dac.properties.GetPropertyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeAnalytics(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDocuments(value);
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
proto.dac.properties.GetPropertyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.GetPropertyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.GetPropertyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.GetPropertyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIncludeAnalytics();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIncludeDocuments();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.dac.properties.GetPropertyRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.GetPropertyRequest} returns this
 */
proto.dac.properties.GetPropertyRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool include_analytics = 2;
 * @return {boolean}
 */
proto.dac.properties.GetPropertyRequest.prototype.getIncludeAnalytics = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.GetPropertyRequest} returns this
 */
proto.dac.properties.GetPropertyRequest.prototype.setIncludeAnalytics = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool include_documents = 3;
 * @return {boolean}
 */
proto.dac.properties.GetPropertyRequest.prototype.getIncludeDocuments = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.GetPropertyRequest} returns this
 */
proto.dac.properties.GetPropertyRequest.prototype.setIncludeDocuments = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.UpdatePropertyRequest.repeatedFields_ = [7];



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
proto.dac.properties.UpdatePropertyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.UpdatePropertyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.UpdatePropertyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.UpdatePropertyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    details: (f = msg.getDetails()) && proto.dac.properties.PropertyDetails.toObject(includeInstance, f),
    pricing: (f = msg.getPricing()) && proto.dac.properties.PricingInfo.toObject(includeInstance, f),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    isFeatured: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.dac.properties.UpdatePropertyRequest}
 */
proto.dac.properties.UpdatePropertyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.UpdatePropertyRequest;
  return proto.dac.properties.UpdatePropertyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.UpdatePropertyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.UpdatePropertyRequest}
 */
proto.dac.properties.UpdatePropertyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.dac.properties.PropertyStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = new proto.dac.properties.PropertyDetails;
      reader.readMessage(value,proto.dac.properties.PropertyDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 6:
      var value = new proto.dac.properties.PricingInfo;
      reader.readMessage(value,proto.dac.properties.PricingInfo.deserializeBinaryFromReader);
      msg.setPricing(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFeatured(value);
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
proto.dac.properties.UpdatePropertyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.UpdatePropertyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.UpdatePropertyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.UpdatePropertyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
  f = /** @type {!proto.dac.properties.PropertyStatus} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.dac.properties.PropertyDetails.serializeBinaryToWriter
    );
  }
  f = message.getPricing();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.dac.properties.PricingInfo.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PropertyStatus status = 4;
 * @return {!proto.dac.properties.PropertyStatus}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.getStatus = function() {
  return /** @type {!proto.dac.properties.PropertyStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.properties.PropertyStatus} value
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PropertyDetails details = 5;
 * @return {?proto.dac.properties.PropertyDetails}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.getDetails = function() {
  return /** @type{?proto.dac.properties.PropertyDetails} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PropertyDetails, 5));
};


/**
 * @param {?proto.dac.properties.PropertyDetails|undefined} value
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
*/
proto.dac.properties.UpdatePropertyRequest.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PricingInfo pricing = 6;
 * @return {?proto.dac.properties.PricingInfo}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.getPricing = function() {
  return /** @type{?proto.dac.properties.PricingInfo} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PricingInfo, 6));
};


/**
 * @param {?proto.dac.properties.PricingInfo|undefined} value
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
*/
proto.dac.properties.UpdatePropertyRequest.prototype.setPricing = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.clearPricing = function() {
  return this.setPricing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.hasPricing = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string tags = 7;
 * @return {!Array<string>}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional bool is_featured = 8;
 * @return {boolean}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.getIsFeatured = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.setIsFeatured = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.UpdatePropertyRequest} returns this
 */
proto.dac.properties.UpdatePropertyRequest.prototype.clearIsFeatured = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.UpdatePropertyRequest.prototype.hasIsFeatured = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.dac.properties.DeletePropertyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.DeletePropertyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.DeletePropertyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DeletePropertyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.dac.properties.DeletePropertyRequest}
 */
proto.dac.properties.DeletePropertyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.DeletePropertyRequest;
  return proto.dac.properties.DeletePropertyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.DeletePropertyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.DeletePropertyRequest}
 */
proto.dac.properties.DeletePropertyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
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
proto.dac.properties.DeletePropertyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.DeletePropertyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.DeletePropertyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DeletePropertyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
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
 * optional int32 id = 1;
 * @return {number}
 */
proto.dac.properties.DeletePropertyRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.DeletePropertyRequest} returns this
 */
proto.dac.properties.DeletePropertyRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.dac.properties.DeletePropertyRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.DeletePropertyRequest} returns this
 */
proto.dac.properties.DeletePropertyRequest.prototype.setReason = function(value) {
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
proto.dac.properties.ListPropertiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ListPropertiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ListPropertiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ListPropertiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ownerId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    page: jspb.Message.getFieldWithDefault(msg, 4, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    sortBy: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sortOrder: jspb.Message.getFieldWithDefault(msg, 7, ""),
    filters: (f = msg.getFilters()) && proto.dac.properties.PropertyFilters.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.ListPropertiesRequest}
 */
proto.dac.properties.ListPropertiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ListPropertiesRequest;
  return proto.dac.properties.ListPropertiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ListPropertiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ListPropertiesRequest}
 */
proto.dac.properties.ListPropertiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dac.properties.PropertyType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.PropertyStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOwnerId(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setSortBy(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSortOrder(value);
      break;
    case 8:
      var value = new proto.dac.properties.PropertyFilters;
      reader.readMessage(value,proto.dac.properties.PropertyFilters.deserializeBinaryFromReader);
      msg.setFilters(value);
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
proto.dac.properties.ListPropertiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ListPropertiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ListPropertiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ListPropertiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.dac.properties.PropertyType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.dac.properties.PropertyStatus} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
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
  f = message.getSortBy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSortOrder();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.dac.properties.PropertyFilters.serializeBinaryToWriter
    );
  }
};


/**
 * optional PropertyType type = 1;
 * @return {!proto.dac.properties.PropertyType}
 */
proto.dac.properties.ListPropertiesRequest.prototype.getType = function() {
  return /** @type {!proto.dac.properties.PropertyType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.dac.properties.PropertyType} value
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.ListPropertiesRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PropertyStatus status = 2;
 * @return {!proto.dac.properties.PropertyStatus}
 */
proto.dac.properties.ListPropertiesRequest.prototype.getStatus = function() {
  return /** @type {!proto.dac.properties.PropertyStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.PropertyStatus} value
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.ListPropertiesRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 owner_id = 3;
 * @return {number}
 */
proto.dac.properties.ListPropertiesRequest.prototype.getOwnerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.setOwnerId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.clearOwnerId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.ListPropertiesRequest.prototype.hasOwnerId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.dac.properties.ListPropertiesRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 limit = 5;
 * @return {number}
 */
proto.dac.properties.ListPropertiesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string sort_by = 6;
 * @return {string}
 */
proto.dac.properties.ListPropertiesRequest.prototype.getSortBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.setSortBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string sort_order = 7;
 * @return {string}
 */
proto.dac.properties.ListPropertiesRequest.prototype.getSortOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.setSortOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional PropertyFilters filters = 8;
 * @return {?proto.dac.properties.PropertyFilters}
 */
proto.dac.properties.ListPropertiesRequest.prototype.getFilters = function() {
  return /** @type{?proto.dac.properties.PropertyFilters} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PropertyFilters, 8));
};


/**
 * @param {?proto.dac.properties.PropertyFilters|undefined} value
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
*/
proto.dac.properties.ListPropertiesRequest.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.ListPropertiesRequest} returns this
 */
proto.dac.properties.ListPropertiesRequest.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.ListPropertiesRequest.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.PropertyFilters.repeatedFields_ = [8];



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
proto.dac.properties.PropertyFilters.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PropertyFilters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PropertyFilters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyFilters.toObject = function(includeInstance, msg) {
  var f, obj = {
    priceRange: (f = msg.getPriceRange()) && proto.dac.properties.PriceRange.toObject(includeInstance, f),
    minBedrooms: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxBedrooms: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minBathrooms: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxBathrooms: jspb.Message.getFieldWithDefault(msg, 5, 0),
    minSqft: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    maxSqft: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    featuresList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    location: (f = msg.getLocation()) && proto.dac.properties.LocationFilter.toObject(includeInstance, f),
    isTokenized: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.dac.properties.PropertyFilters}
 */
proto.dac.properties.PropertyFilters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PropertyFilters;
  return proto.dac.properties.PropertyFilters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PropertyFilters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PropertyFilters}
 */
proto.dac.properties.PropertyFilters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.PriceRange;
      reader.readMessage(value,proto.dac.properties.PriceRange.deserializeBinaryFromReader);
      msg.setPriceRange(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinBedrooms(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxBedrooms(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinBathrooms(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxBathrooms(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinSqft(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxSqft(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addFeatures(value);
      break;
    case 9:
      var value = new proto.dac.properties.LocationFilter;
      reader.readMessage(value,proto.dac.properties.LocationFilter.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTokenized(value);
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
proto.dac.properties.PropertyFilters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PropertyFilters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PropertyFilters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyFilters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPriceRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.properties.PriceRange.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getFeaturesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.dac.properties.LocationFilter.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional PriceRange price_range = 1;
 * @return {?proto.dac.properties.PriceRange}
 */
proto.dac.properties.PropertyFilters.prototype.getPriceRange = function() {
  return /** @type{?proto.dac.properties.PriceRange} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PriceRange, 1));
};


/**
 * @param {?proto.dac.properties.PriceRange|undefined} value
 * @return {!proto.dac.properties.PropertyFilters} returns this
*/
proto.dac.properties.PropertyFilters.prototype.setPriceRange = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.clearPriceRange = function() {
  return this.setPriceRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyFilters.prototype.hasPriceRange = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 min_bedrooms = 2;
 * @return {number}
 */
proto.dac.properties.PropertyFilters.prototype.getMinBedrooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.setMinBedrooms = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.clearMinBedrooms = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyFilters.prototype.hasMinBedrooms = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 max_bedrooms = 3;
 * @return {number}
 */
proto.dac.properties.PropertyFilters.prototype.getMaxBedrooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.setMaxBedrooms = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.clearMaxBedrooms = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyFilters.prototype.hasMaxBedrooms = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 min_bathrooms = 4;
 * @return {number}
 */
proto.dac.properties.PropertyFilters.prototype.getMinBathrooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.setMinBathrooms = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.clearMinBathrooms = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyFilters.prototype.hasMinBathrooms = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 max_bathrooms = 5;
 * @return {number}
 */
proto.dac.properties.PropertyFilters.prototype.getMaxBathrooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.setMaxBathrooms = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.clearMaxBathrooms = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyFilters.prototype.hasMaxBathrooms = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double min_sqft = 6;
 * @return {number}
 */
proto.dac.properties.PropertyFilters.prototype.getMinSqft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.setMinSqft = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.clearMinSqft = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyFilters.prototype.hasMinSqft = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double max_sqft = 7;
 * @return {number}
 */
proto.dac.properties.PropertyFilters.prototype.getMaxSqft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.setMaxSqft = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.clearMaxSqft = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyFilters.prototype.hasMaxSqft = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string features = 8;
 * @return {!Array<string>}
 */
proto.dac.properties.PropertyFilters.prototype.getFeaturesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.setFeaturesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.addFeatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.clearFeaturesList = function() {
  return this.setFeaturesList([]);
};


/**
 * optional LocationFilter location = 9;
 * @return {?proto.dac.properties.LocationFilter}
 */
proto.dac.properties.PropertyFilters.prototype.getLocation = function() {
  return /** @type{?proto.dac.properties.LocationFilter} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.LocationFilter, 9));
};


/**
 * @param {?proto.dac.properties.LocationFilter|undefined} value
 * @return {!proto.dac.properties.PropertyFilters} returns this
*/
proto.dac.properties.PropertyFilters.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyFilters.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool is_tokenized = 10;
 * @return {boolean}
 */
proto.dac.properties.PropertyFilters.prototype.getIsTokenized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.setIsTokenized = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.PropertyFilters} returns this
 */
proto.dac.properties.PropertyFilters.prototype.clearIsTokenized = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyFilters.prototype.hasIsTokenized = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.dac.properties.PriceRange.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PriceRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PriceRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PriceRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    minPrice: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxPrice: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.dac.properties.PriceRange}
 */
proto.dac.properties.PriceRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PriceRange;
  return proto.dac.properties.PriceRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PriceRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PriceRange}
 */
proto.dac.properties.PriceRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPrice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxPrice(value);
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
proto.dac.properties.PriceRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PriceRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PriceRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PriceRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string min_price = 1;
 * @return {string}
 */
proto.dac.properties.PriceRange.prototype.getMinPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PriceRange} returns this
 */
proto.dac.properties.PriceRange.prototype.setMinPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string max_price = 2;
 * @return {string}
 */
proto.dac.properties.PriceRange.prototype.getMaxPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PriceRange} returns this
 */
proto.dac.properties.PriceRange.prototype.setMaxPrice = function(value) {
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
proto.dac.properties.LocationFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.LocationFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.LocationFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.LocationFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    city: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, ""),
    neighborhood: jspb.Message.getFieldWithDefault(msg, 3, ""),
    radiusMiles: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    centerLat: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    centerLng: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.dac.properties.LocationFilter}
 */
proto.dac.properties.LocationFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.LocationFilter;
  return proto.dac.properties.LocationFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.LocationFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.LocationFilter}
 */
proto.dac.properties.LocationFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNeighborhood(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRadiusMiles(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCenterLat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCenterLng(value);
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
proto.dac.properties.LocationFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.LocationFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.LocationFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.LocationFilter.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional string city = 1;
 * @return {string}
 */
proto.dac.properties.LocationFilter.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.setCity = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.clearCity = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.LocationFilter.prototype.hasCity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string state = 2;
 * @return {string}
 */
proto.dac.properties.LocationFilter.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.setState = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.clearState = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.LocationFilter.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string neighborhood = 3;
 * @return {string}
 */
proto.dac.properties.LocationFilter.prototype.getNeighborhood = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.setNeighborhood = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.clearNeighborhood = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.LocationFilter.prototype.hasNeighborhood = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double radius_miles = 4;
 * @return {number}
 */
proto.dac.properties.LocationFilter.prototype.getRadiusMiles = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.setRadiusMiles = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.clearRadiusMiles = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.LocationFilter.prototype.hasRadiusMiles = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double center_lat = 5;
 * @return {number}
 */
proto.dac.properties.LocationFilter.prototype.getCenterLat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.setCenterLat = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.clearCenterLat = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.LocationFilter.prototype.hasCenterLat = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double center_lng = 6;
 * @return {number}
 */
proto.dac.properties.LocationFilter.prototype.getCenterLng = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.setCenterLng = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.LocationFilter} returns this
 */
proto.dac.properties.LocationFilter.prototype.clearCenterLng = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.LocationFilter.prototype.hasCenterLng = function() {
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
proto.dac.properties.PropertySearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PropertySearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PropertySearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertySearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filters: (f = msg.getFilters()) && proto.dac.properties.PropertyFilters.toObject(includeInstance, f),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    sort: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.dac.properties.PropertySearchRequest}
 */
proto.dac.properties.PropertySearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PropertySearchRequest;
  return proto.dac.properties.PropertySearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PropertySearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PropertySearchRequest}
 */
proto.dac.properties.PropertySearchRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dac.properties.PropertyFilters;
      reader.readMessage(value,proto.dac.properties.PropertyFilters.deserializeBinaryFromReader);
      msg.setFilters(value);
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
      var value = /** @type {!proto.dac.properties.SearchSort} */ (reader.readEnum());
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
proto.dac.properties.PropertySearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PropertySearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PropertySearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertySearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.properties.PropertyFilters.serializeBinaryToWriter
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
  f = message.getSort();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.dac.properties.PropertySearchRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertySearchRequest} returns this
 */
proto.dac.properties.PropertySearchRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PropertyFilters filters = 2;
 * @return {?proto.dac.properties.PropertyFilters}
 */
proto.dac.properties.PropertySearchRequest.prototype.getFilters = function() {
  return /** @type{?proto.dac.properties.PropertyFilters} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PropertyFilters, 2));
};


/**
 * @param {?proto.dac.properties.PropertyFilters|undefined} value
 * @return {!proto.dac.properties.PropertySearchRequest} returns this
*/
proto.dac.properties.PropertySearchRequest.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertySearchRequest} returns this
 */
proto.dac.properties.PropertySearchRequest.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertySearchRequest.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.dac.properties.PropertySearchRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertySearchRequest} returns this
 */
proto.dac.properties.PropertySearchRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.properties.PropertySearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertySearchRequest} returns this
 */
proto.dac.properties.PropertySearchRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SearchSort sort = 5;
 * @return {!proto.dac.properties.SearchSort}
 */
proto.dac.properties.PropertySearchRequest.prototype.getSort = function() {
  return /** @type {!proto.dac.properties.SearchSort} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.dac.properties.SearchSort} value
 * @return {!proto.dac.properties.PropertySearchRequest} returns this
 */
proto.dac.properties.PropertySearchRequest.prototype.setSort = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.PropertySearchResponse.repeatedFields_ = [1];



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
proto.dac.properties.PropertySearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PropertySearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PropertySearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertySearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.dac.properties.Property.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hasNext: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    facets: (f = msg.getFacets()) && proto.dac.properties.SearchFacets.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.PropertySearchResponse}
 */
proto.dac.properties.PropertySearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PropertySearchResponse;
  return proto.dac.properties.PropertySearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PropertySearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PropertySearchResponse}
 */
proto.dac.properties.PropertySearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.Property;
      reader.readMessage(value,proto.dac.properties.Property.deserializeBinaryFromReader);
      msg.addProperties(value);
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
    case 6:
      var value = new proto.dac.properties.SearchFacets;
      reader.readMessage(value,proto.dac.properties.SearchFacets.deserializeBinaryFromReader);
      msg.setFacets(value);
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
proto.dac.properties.PropertySearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PropertySearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PropertySearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertySearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.properties.Property.serializeBinaryToWriter
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
  f = message.getFacets();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.dac.properties.SearchFacets.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Property properties = 1;
 * @return {!Array<!proto.dac.properties.Property>}
 */
proto.dac.properties.PropertySearchResponse.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.dac.properties.Property>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.Property, 1));
};


/**
 * @param {!Array<!proto.dac.properties.Property>} value
 * @return {!proto.dac.properties.PropertySearchResponse} returns this
*/
proto.dac.properties.PropertySearchResponse.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.properties.Property=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.Property}
 */
proto.dac.properties.PropertySearchResponse.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.properties.Property, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.PropertySearchResponse} returns this
 */
proto.dac.properties.PropertySearchResponse.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.properties.PropertySearchResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertySearchResponse} returns this
 */
proto.dac.properties.PropertySearchResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.dac.properties.PropertySearchResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertySearchResponse} returns this
 */
proto.dac.properties.PropertySearchResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.properties.PropertySearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertySearchResponse} returns this
 */
proto.dac.properties.PropertySearchResponse.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool has_next = 5;
 * @return {boolean}
 */
proto.dac.properties.PropertySearchResponse.prototype.getHasNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.PropertySearchResponse} returns this
 */
proto.dac.properties.PropertySearchResponse.prototype.setHasNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional SearchFacets facets = 6;
 * @return {?proto.dac.properties.SearchFacets}
 */
proto.dac.properties.PropertySearchResponse.prototype.getFacets = function() {
  return /** @type{?proto.dac.properties.SearchFacets} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.SearchFacets, 6));
};


/**
 * @param {?proto.dac.properties.SearchFacets|undefined} value
 * @return {!proto.dac.properties.PropertySearchResponse} returns this
*/
proto.dac.properties.PropertySearchResponse.prototype.setFacets = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertySearchResponse} returns this
 */
proto.dac.properties.PropertySearchResponse.prototype.clearFacets = function() {
  return this.setFacets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertySearchResponse.prototype.hasFacets = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.SearchFacets.repeatedFields_ = [1,2,3,4];



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
proto.dac.properties.SearchFacets.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.SearchFacets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.SearchFacets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.SearchFacets.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyTypesList: jspb.Message.toObjectList(msg.getPropertyTypesList(),
    proto.dac.properties.FacetValue.toObject, includeInstance),
    priceRangesList: jspb.Message.toObjectList(msg.getPriceRangesList(),
    proto.dac.properties.FacetValue.toObject, includeInstance),
    neighborhoodsList: jspb.Message.toObjectList(msg.getNeighborhoodsList(),
    proto.dac.properties.FacetValue.toObject, includeInstance),
    featuresList: jspb.Message.toObjectList(msg.getFeaturesList(),
    proto.dac.properties.FacetValue.toObject, includeInstance)
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
 * @return {!proto.dac.properties.SearchFacets}
 */
proto.dac.properties.SearchFacets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.SearchFacets;
  return proto.dac.properties.SearchFacets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.SearchFacets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.SearchFacets}
 */
proto.dac.properties.SearchFacets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.FacetValue;
      reader.readMessage(value,proto.dac.properties.FacetValue.deserializeBinaryFromReader);
      msg.addPropertyTypes(value);
      break;
    case 2:
      var value = new proto.dac.properties.FacetValue;
      reader.readMessage(value,proto.dac.properties.FacetValue.deserializeBinaryFromReader);
      msg.addPriceRanges(value);
      break;
    case 3:
      var value = new proto.dac.properties.FacetValue;
      reader.readMessage(value,proto.dac.properties.FacetValue.deserializeBinaryFromReader);
      msg.addNeighborhoods(value);
      break;
    case 4:
      var value = new proto.dac.properties.FacetValue;
      reader.readMessage(value,proto.dac.properties.FacetValue.deserializeBinaryFromReader);
      msg.addFeatures(value);
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
proto.dac.properties.SearchFacets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.SearchFacets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.SearchFacets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.SearchFacets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.properties.FacetValue.serializeBinaryToWriter
    );
  }
  f = message.getPriceRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.dac.properties.FacetValue.serializeBinaryToWriter
    );
  }
  f = message.getNeighborhoodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dac.properties.FacetValue.serializeBinaryToWriter
    );
  }
  f = message.getFeaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.properties.FacetValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FacetValue property_types = 1;
 * @return {!Array<!proto.dac.properties.FacetValue>}
 */
proto.dac.properties.SearchFacets.prototype.getPropertyTypesList = function() {
  return /** @type{!Array<!proto.dac.properties.FacetValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.FacetValue, 1));
};


/**
 * @param {!Array<!proto.dac.properties.FacetValue>} value
 * @return {!proto.dac.properties.SearchFacets} returns this
*/
proto.dac.properties.SearchFacets.prototype.setPropertyTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.properties.FacetValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.FacetValue}
 */
proto.dac.properties.SearchFacets.prototype.addPropertyTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.properties.FacetValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.SearchFacets} returns this
 */
proto.dac.properties.SearchFacets.prototype.clearPropertyTypesList = function() {
  return this.setPropertyTypesList([]);
};


/**
 * repeated FacetValue price_ranges = 2;
 * @return {!Array<!proto.dac.properties.FacetValue>}
 */
proto.dac.properties.SearchFacets.prototype.getPriceRangesList = function() {
  return /** @type{!Array<!proto.dac.properties.FacetValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.FacetValue, 2));
};


/**
 * @param {!Array<!proto.dac.properties.FacetValue>} value
 * @return {!proto.dac.properties.SearchFacets} returns this
*/
proto.dac.properties.SearchFacets.prototype.setPriceRangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dac.properties.FacetValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.FacetValue}
 */
proto.dac.properties.SearchFacets.prototype.addPriceRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dac.properties.FacetValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.SearchFacets} returns this
 */
proto.dac.properties.SearchFacets.prototype.clearPriceRangesList = function() {
  return this.setPriceRangesList([]);
};


/**
 * repeated FacetValue neighborhoods = 3;
 * @return {!Array<!proto.dac.properties.FacetValue>}
 */
proto.dac.properties.SearchFacets.prototype.getNeighborhoodsList = function() {
  return /** @type{!Array<!proto.dac.properties.FacetValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.FacetValue, 3));
};


/**
 * @param {!Array<!proto.dac.properties.FacetValue>} value
 * @return {!proto.dac.properties.SearchFacets} returns this
*/
proto.dac.properties.SearchFacets.prototype.setNeighborhoodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dac.properties.FacetValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.FacetValue}
 */
proto.dac.properties.SearchFacets.prototype.addNeighborhoods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dac.properties.FacetValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.SearchFacets} returns this
 */
proto.dac.properties.SearchFacets.prototype.clearNeighborhoodsList = function() {
  return this.setNeighborhoodsList([]);
};


/**
 * repeated FacetValue features = 4;
 * @return {!Array<!proto.dac.properties.FacetValue>}
 */
proto.dac.properties.SearchFacets.prototype.getFeaturesList = function() {
  return /** @type{!Array<!proto.dac.properties.FacetValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.FacetValue, 4));
};


/**
 * @param {!Array<!proto.dac.properties.FacetValue>} value
 * @return {!proto.dac.properties.SearchFacets} returns this
*/
proto.dac.properties.SearchFacets.prototype.setFeaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.properties.FacetValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.FacetValue}
 */
proto.dac.properties.SearchFacets.prototype.addFeatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.properties.FacetValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.SearchFacets} returns this
 */
proto.dac.properties.SearchFacets.prototype.clearFeaturesList = function() {
  return this.setFeaturesList([]);
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
proto.dac.properties.FacetValue.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.FacetValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.FacetValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.FacetValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.dac.properties.FacetValue}
 */
proto.dac.properties.FacetValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.FacetValue;
  return proto.dac.properties.FacetValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.FacetValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.FacetValue}
 */
proto.dac.properties.FacetValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
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
proto.dac.properties.FacetValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.FacetValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.FacetValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.FacetValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.dac.properties.FacetValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.FacetValue} returns this
 */
proto.dac.properties.FacetValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 count = 2;
 * @return {number}
 */
proto.dac.properties.FacetValue.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.FacetValue} returns this
 */
proto.dac.properties.FacetValue.prototype.setCount = function(value) {
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
proto.dac.properties.FeaturedPropertiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.FeaturedPropertiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.FeaturedPropertiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.FeaturedPropertiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.dac.properties.FeaturedPropertiesRequest}
 */
proto.dac.properties.FeaturedPropertiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.FeaturedPropertiesRequest;
  return proto.dac.properties.FeaturedPropertiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.FeaturedPropertiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.FeaturedPropertiesRequest}
 */
proto.dac.properties.FeaturedPropertiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.PropertyType} */ (reader.readEnum());
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
proto.dac.properties.FeaturedPropertiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.FeaturedPropertiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.FeaturedPropertiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.FeaturedPropertiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.dac.properties.PropertyType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int32 limit = 1;
 * @return {number}
 */
proto.dac.properties.FeaturedPropertiesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.FeaturedPropertiesRequest} returns this
 */
proto.dac.properties.FeaturedPropertiesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PropertyType type = 2;
 * @return {!proto.dac.properties.PropertyType}
 */
proto.dac.properties.FeaturedPropertiesRequest.prototype.getType = function() {
  return /** @type {!proto.dac.properties.PropertyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.PropertyType} value
 * @return {!proto.dac.properties.FeaturedPropertiesRequest} returns this
 */
proto.dac.properties.FeaturedPropertiesRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.FeaturedPropertiesRequest} returns this
 */
proto.dac.properties.FeaturedPropertiesRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.FeaturedPropertiesRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.FeaturedPropertiesResponse.repeatedFields_ = [1];



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
proto.dac.properties.FeaturedPropertiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.FeaturedPropertiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.FeaturedPropertiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.FeaturedPropertiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.dac.properties.Property.toObject, includeInstance)
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
 * @return {!proto.dac.properties.FeaturedPropertiesResponse}
 */
proto.dac.properties.FeaturedPropertiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.FeaturedPropertiesResponse;
  return proto.dac.properties.FeaturedPropertiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.FeaturedPropertiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.FeaturedPropertiesResponse}
 */
proto.dac.properties.FeaturedPropertiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.Property;
      reader.readMessage(value,proto.dac.properties.Property.deserializeBinaryFromReader);
      msg.addProperties(value);
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
proto.dac.properties.FeaturedPropertiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.FeaturedPropertiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.FeaturedPropertiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.FeaturedPropertiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.properties.Property.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Property properties = 1;
 * @return {!Array<!proto.dac.properties.Property>}
 */
proto.dac.properties.FeaturedPropertiesResponse.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.dac.properties.Property>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.Property, 1));
};


/**
 * @param {!Array<!proto.dac.properties.Property>} value
 * @return {!proto.dac.properties.FeaturedPropertiesResponse} returns this
*/
proto.dac.properties.FeaturedPropertiesResponse.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.properties.Property=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.Property}
 */
proto.dac.properties.FeaturedPropertiesResponse.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.properties.Property, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.FeaturedPropertiesResponse} returns this
 */
proto.dac.properties.FeaturedPropertiesResponse.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
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
proto.dac.properties.OwnerPropertiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.OwnerPropertiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.OwnerPropertiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.OwnerPropertiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.dac.properties.OwnerPropertiesRequest}
 */
proto.dac.properties.OwnerPropertiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.OwnerPropertiesRequest;
  return proto.dac.properties.OwnerPropertiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.OwnerPropertiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.OwnerPropertiesRequest}
 */
proto.dac.properties.OwnerPropertiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOwnerId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.PropertyStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
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
proto.dac.properties.OwnerPropertiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.OwnerPropertiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.OwnerPropertiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.OwnerPropertiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.dac.properties.PropertyStatus} */ (jspb.Message.getField(message, 2));
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
};


/**
 * optional int32 owner_id = 1;
 * @return {number}
 */
proto.dac.properties.OwnerPropertiesRequest.prototype.getOwnerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.OwnerPropertiesRequest} returns this
 */
proto.dac.properties.OwnerPropertiesRequest.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PropertyStatus status = 2;
 * @return {!proto.dac.properties.PropertyStatus}
 */
proto.dac.properties.OwnerPropertiesRequest.prototype.getStatus = function() {
  return /** @type {!proto.dac.properties.PropertyStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.PropertyStatus} value
 * @return {!proto.dac.properties.OwnerPropertiesRequest} returns this
 */
proto.dac.properties.OwnerPropertiesRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.OwnerPropertiesRequest} returns this
 */
proto.dac.properties.OwnerPropertiesRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.OwnerPropertiesRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.dac.properties.OwnerPropertiesRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.OwnerPropertiesRequest} returns this
 */
proto.dac.properties.OwnerPropertiesRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.dac.properties.OwnerPropertiesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.OwnerPropertiesRequest} returns this
 */
proto.dac.properties.OwnerPropertiesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.OwnerPropertiesResponse.repeatedFields_ = [1];



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
proto.dac.properties.OwnerPropertiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.OwnerPropertiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.OwnerPropertiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.OwnerPropertiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.dac.properties.Property.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stats: (f = msg.getStats()) && proto.dac.properties.PropertyOwnerStats.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.OwnerPropertiesResponse}
 */
proto.dac.properties.OwnerPropertiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.OwnerPropertiesResponse;
  return proto.dac.properties.OwnerPropertiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.OwnerPropertiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.OwnerPropertiesResponse}
 */
proto.dac.properties.OwnerPropertiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.Property;
      reader.readMessage(value,proto.dac.properties.Property.deserializeBinaryFromReader);
      msg.addProperties(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
      break;
    case 3:
      var value = new proto.dac.properties.PropertyOwnerStats;
      reader.readMessage(value,proto.dac.properties.PropertyOwnerStats.deserializeBinaryFromReader);
      msg.setStats(value);
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
proto.dac.properties.OwnerPropertiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.OwnerPropertiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.OwnerPropertiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.OwnerPropertiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.properties.Property.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStats();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dac.properties.PropertyOwnerStats.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Property properties = 1;
 * @return {!Array<!proto.dac.properties.Property>}
 */
proto.dac.properties.OwnerPropertiesResponse.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.dac.properties.Property>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.Property, 1));
};


/**
 * @param {!Array<!proto.dac.properties.Property>} value
 * @return {!proto.dac.properties.OwnerPropertiesResponse} returns this
*/
proto.dac.properties.OwnerPropertiesResponse.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.properties.Property=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.Property}
 */
proto.dac.properties.OwnerPropertiesResponse.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.properties.Property, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.OwnerPropertiesResponse} returns this
 */
proto.dac.properties.OwnerPropertiesResponse.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.dac.properties.OwnerPropertiesResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.OwnerPropertiesResponse} returns this
 */
proto.dac.properties.OwnerPropertiesResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional PropertyOwnerStats stats = 3;
 * @return {?proto.dac.properties.PropertyOwnerStats}
 */
proto.dac.properties.OwnerPropertiesResponse.prototype.getStats = function() {
  return /** @type{?proto.dac.properties.PropertyOwnerStats} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PropertyOwnerStats, 3));
};


/**
 * @param {?proto.dac.properties.PropertyOwnerStats|undefined} value
 * @return {!proto.dac.properties.OwnerPropertiesResponse} returns this
*/
proto.dac.properties.OwnerPropertiesResponse.prototype.setStats = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.OwnerPropertiesResponse} returns this
 */
proto.dac.properties.OwnerPropertiesResponse.prototype.clearStats = function() {
  return this.setStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.OwnerPropertiesResponse.prototype.hasStats = function() {
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
proto.dac.properties.PropertyOwnerStats.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PropertyOwnerStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PropertyOwnerStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyOwnerStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalProperties: jspb.Message.getFieldWithDefault(msg, 1, 0),
    activeListings: jspb.Message.getFieldWithDefault(msg, 2, 0),
    soldProperties: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalValue: jspb.Message.getFieldWithDefault(msg, 4, ""),
    averagePrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.dac.properties.PropertyOwnerStats}
 */
proto.dac.properties.PropertyOwnerStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PropertyOwnerStats;
  return proto.dac.properties.PropertyOwnerStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PropertyOwnerStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PropertyOwnerStats}
 */
proto.dac.properties.PropertyOwnerStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalProperties(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActiveListings(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSoldProperties(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalValue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAveragePrice(value);
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
proto.dac.properties.PropertyOwnerStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PropertyOwnerStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PropertyOwnerStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyOwnerStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalProperties();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getActiveListings();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSoldProperties();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTotalValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAveragePrice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional int32 total_properties = 1;
 * @return {number}
 */
proto.dac.properties.PropertyOwnerStats.prototype.getTotalProperties = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyOwnerStats} returns this
 */
proto.dac.properties.PropertyOwnerStats.prototype.setTotalProperties = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 active_listings = 2;
 * @return {number}
 */
proto.dac.properties.PropertyOwnerStats.prototype.getActiveListings = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyOwnerStats} returns this
 */
proto.dac.properties.PropertyOwnerStats.prototype.setActiveListings = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 sold_properties = 3;
 * @return {number}
 */
proto.dac.properties.PropertyOwnerStats.prototype.getSoldProperties = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyOwnerStats} returns this
 */
proto.dac.properties.PropertyOwnerStats.prototype.setSoldProperties = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string total_value = 4;
 * @return {string}
 */
proto.dac.properties.PropertyOwnerStats.prototype.getTotalValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PropertyOwnerStats} returns this
 */
proto.dac.properties.PropertyOwnerStats.prototype.setTotalValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double average_price = 5;
 * @return {number}
 */
proto.dac.properties.PropertyOwnerStats.prototype.getAveragePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyOwnerStats} returns this
 */
proto.dac.properties.PropertyOwnerStats.prototype.setAveragePrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.TransactionRequest.repeatedFields_ = [9];



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
proto.dac.properties.TransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    buyerId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sellerId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    offerPrice: jspb.Message.getFieldWithDefault(msg, 4, ""),
    transactionType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    downPayment: jspb.Message.getFieldWithDefault(msg, 6, ""),
    financingDetails: jspb.Message.getFieldWithDefault(msg, 7, ""),
    closingDate: (f = msg.getClosingDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    conditionsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.dac.properties.TransactionRequest}
 */
proto.dac.properties.TransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TransactionRequest;
  return proto.dac.properties.TransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TransactionRequest}
 */
proto.dac.properties.TransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBuyerId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSellerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfferPrice(value);
      break;
    case 5:
      var value = /** @type {!proto.dac.properties.TransactionType} */ (reader.readEnum());
      msg.setTransactionType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownPayment(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinancingDetails(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setClosingDate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addConditions(value);
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
proto.dac.properties.TransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBuyerId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSellerId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getOfferPrice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransactionType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDownPayment();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFinancingDetails();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getClosingDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.TransactionRequest.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 buyer_id = 2;
 * @return {number}
 */
proto.dac.properties.TransactionRequest.prototype.getBuyerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.setBuyerId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 seller_id = 3;
 * @return {number}
 */
proto.dac.properties.TransactionRequest.prototype.getSellerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.setSellerId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string offer_price = 4;
 * @return {string}
 */
proto.dac.properties.TransactionRequest.prototype.getOfferPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.setOfferPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TransactionType transaction_type = 5;
 * @return {!proto.dac.properties.TransactionType}
 */
proto.dac.properties.TransactionRequest.prototype.getTransactionType = function() {
  return /** @type {!proto.dac.properties.TransactionType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.dac.properties.TransactionType} value
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.setTransactionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string down_payment = 6;
 * @return {string}
 */
proto.dac.properties.TransactionRequest.prototype.getDownPayment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.setDownPayment = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string financing_details = 7;
 * @return {string}
 */
proto.dac.properties.TransactionRequest.prototype.getFinancingDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.setFinancingDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp closing_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.TransactionRequest.prototype.getClosingDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.TransactionRequest} returns this
*/
proto.dac.properties.TransactionRequest.prototype.setClosingDate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.clearClosingDate = function() {
  return this.setClosingDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TransactionRequest.prototype.hasClosingDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string conditions = 9;
 * @return {!Array<string>}
 */
proto.dac.properties.TransactionRequest.prototype.getConditionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.setConditionsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.addConditions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.TransactionRequest} returns this
 */
proto.dac.properties.TransactionRequest.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
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
proto.dac.properties.TransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: (f = msg.getStatus()) && proto.dac.properties.TransactionStatus.toObject(includeInstance, f),
    escrowAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.TransactionResponse}
 */
proto.dac.properties.TransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TransactionResponse;
  return proto.dac.properties.TransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TransactionResponse}
 */
proto.dac.properties.TransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 2:
      var value = new proto.dac.properties.TransactionStatus;
      reader.readMessage(value,proto.dac.properties.TransactionStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEscrowAddress(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
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
proto.dac.properties.TransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.properties.TransactionStatus.serializeBinaryToWriter
    );
  }
  f = message.getEscrowAddress();
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
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.dac.properties.TransactionResponse.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionResponse} returns this
 */
proto.dac.properties.TransactionResponse.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TransactionStatus status = 2;
 * @return {?proto.dac.properties.TransactionStatus}
 */
proto.dac.properties.TransactionResponse.prototype.getStatus = function() {
  return /** @type{?proto.dac.properties.TransactionStatus} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.TransactionStatus, 2));
};


/**
 * @param {?proto.dac.properties.TransactionStatus|undefined} value
 * @return {!proto.dac.properties.TransactionResponse} returns this
*/
proto.dac.properties.TransactionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TransactionResponse} returns this
 */
proto.dac.properties.TransactionResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TransactionResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string escrow_address = 3;
 * @return {string}
 */
proto.dac.properties.TransactionResponse.prototype.getEscrowAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionResponse} returns this
 */
proto.dac.properties.TransactionResponse.prototype.setEscrowAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.TransactionResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.TransactionResponse} returns this
*/
proto.dac.properties.TransactionResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TransactionResponse} returns this
 */
proto.dac.properties.TransactionResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TransactionResponse.prototype.hasCreatedAt = function() {
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
proto.dac.properties.TransactionStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TransactionStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TransactionStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.dac.properties.TransactionStatusRequest}
 */
proto.dac.properties.TransactionStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TransactionStatusRequest;
  return proto.dac.properties.TransactionStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TransactionStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TransactionStatusRequest}
 */
proto.dac.properties.TransactionStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.dac.properties.TransactionStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TransactionStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TransactionStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.dac.properties.TransactionStatusRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionStatusRequest} returns this
 */
proto.dac.properties.TransactionStatusRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.TransactionStatus.repeatedFields_ = [3];



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
proto.dac.properties.TransactionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TransactionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TransactionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stepsList: jspb.Message.toObjectList(msg.getStepsList(),
    proto.dac.properties.TransactionStep.toObject, includeInstance),
    currentStep: jspb.Message.getFieldWithDefault(msg, 4, ""),
    progressPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.dac.properties.TransactionStatus}
 */
proto.dac.properties.TransactionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TransactionStatus;
  return proto.dac.properties.TransactionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TransactionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TransactionStatus}
 */
proto.dac.properties.TransactionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.TransactionState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = new proto.dac.properties.TransactionStep;
      reader.readMessage(value,proto.dac.properties.TransactionStep.deserializeBinaryFromReader);
      msg.addSteps(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentStep(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProgressPercentage(value);
      break;
    case 6:
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
proto.dac.properties.TransactionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TransactionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TransactionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dac.properties.TransactionStep.serializeBinaryToWriter
    );
  }
  f = message.getCurrentStep();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProgressPercentage();
  if (f !== 0.0) {
    writer.writeDouble(
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
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.dac.properties.TransactionStatus.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionStatus} returns this
 */
proto.dac.properties.TransactionStatus.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TransactionState state = 2;
 * @return {!proto.dac.properties.TransactionState}
 */
proto.dac.properties.TransactionStatus.prototype.getState = function() {
  return /** @type {!proto.dac.properties.TransactionState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.TransactionState} value
 * @return {!proto.dac.properties.TransactionStatus} returns this
 */
proto.dac.properties.TransactionStatus.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated TransactionStep steps = 3;
 * @return {!Array<!proto.dac.properties.TransactionStep>}
 */
proto.dac.properties.TransactionStatus.prototype.getStepsList = function() {
  return /** @type{!Array<!proto.dac.properties.TransactionStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.TransactionStep, 3));
};


/**
 * @param {!Array<!proto.dac.properties.TransactionStep>} value
 * @return {!proto.dac.properties.TransactionStatus} returns this
*/
proto.dac.properties.TransactionStatus.prototype.setStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dac.properties.TransactionStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.TransactionStep}
 */
proto.dac.properties.TransactionStatus.prototype.addSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dac.properties.TransactionStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.TransactionStatus} returns this
 */
proto.dac.properties.TransactionStatus.prototype.clearStepsList = function() {
  return this.setStepsList([]);
};


/**
 * optional string current_step = 4;
 * @return {string}
 */
proto.dac.properties.TransactionStatus.prototype.getCurrentStep = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionStatus} returns this
 */
proto.dac.properties.TransactionStatus.prototype.setCurrentStep = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double progress_percentage = 5;
 * @return {number}
 */
proto.dac.properties.TransactionStatus.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TransactionStatus} returns this
 */
proto.dac.properties.TransactionStatus.prototype.setProgressPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string error_message = 6;
 * @return {string}
 */
proto.dac.properties.TransactionStatus.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionStatus} returns this
 */
proto.dac.properties.TransactionStatus.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.TransactionStatus} returns this
 */
proto.dac.properties.TransactionStatus.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TransactionStatus.prototype.hasErrorMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.TransactionStep.repeatedFields_ = [4];



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
proto.dac.properties.TransactionStep.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TransactionStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TransactionStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionStep.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    completedAt: (f = msg.getCompletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    requiredDocumentsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    notes: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.dac.properties.TransactionStep}
 */
proto.dac.properties.TransactionStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TransactionStep;
  return proto.dac.properties.TransactionStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TransactionStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TransactionStep}
 */
proto.dac.properties.TransactionStep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStepName(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.StepStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCompletedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequiredDocuments(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
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
proto.dac.properties.TransactionStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TransactionStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TransactionStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getCompletedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRequiredDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string step_name = 1;
 * @return {string}
 */
proto.dac.properties.TransactionStep.prototype.getStepName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionStep} returns this
 */
proto.dac.properties.TransactionStep.prototype.setStepName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional StepStatus status = 2;
 * @return {!proto.dac.properties.StepStatus}
 */
proto.dac.properties.TransactionStep.prototype.getStatus = function() {
  return /** @type {!proto.dac.properties.StepStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.StepStatus} value
 * @return {!proto.dac.properties.TransactionStep} returns this
 */
proto.dac.properties.TransactionStep.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp completed_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.TransactionStep.prototype.getCompletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.TransactionStep} returns this
*/
proto.dac.properties.TransactionStep.prototype.setCompletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TransactionStep} returns this
 */
proto.dac.properties.TransactionStep.prototype.clearCompletedAt = function() {
  return this.setCompletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TransactionStep.prototype.hasCompletedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string required_documents = 4;
 * @return {!Array<string>}
 */
proto.dac.properties.TransactionStep.prototype.getRequiredDocumentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.TransactionStep} returns this
 */
proto.dac.properties.TransactionStep.prototype.setRequiredDocumentsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.TransactionStep} returns this
 */
proto.dac.properties.TransactionStep.prototype.addRequiredDocuments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.TransactionStep} returns this
 */
proto.dac.properties.TransactionStep.prototype.clearRequiredDocumentsList = function() {
  return this.setRequiredDocumentsList([]);
};


/**
 * optional string notes = 5;
 * @return {string}
 */
proto.dac.properties.TransactionStep.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionStep} returns this
 */
proto.dac.properties.TransactionStep.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.CompleteTransactionRequest.repeatedFields_ = [3];



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
proto.dac.properties.CompleteTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.CompleteTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.CompleteTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.CompleteTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    finalPrice: jspb.Message.getFieldWithDefault(msg, 2, ""),
    documentsList: jspb.Message.toObjectList(msg.getDocumentsList(),
    proto.dac.properties.CompletionDocument.toObject, includeInstance),
    blockchainTxHash: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.dac.properties.CompleteTransactionRequest}
 */
proto.dac.properties.CompleteTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.CompleteTransactionRequest;
  return proto.dac.properties.CompleteTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.CompleteTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.CompleteTransactionRequest}
 */
proto.dac.properties.CompleteTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinalPrice(value);
      break;
    case 3:
      var value = new proto.dac.properties.CompletionDocument;
      reader.readMessage(value,proto.dac.properties.CompletionDocument.deserializeBinaryFromReader);
      msg.addDocuments(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockchainTxHash(value);
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
proto.dac.properties.CompleteTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.CompleteTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.CompleteTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.CompleteTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFinalPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dac.properties.CompletionDocument.serializeBinaryToWriter
    );
  }
  f = message.getBlockchainTxHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.dac.properties.CompleteTransactionRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.CompleteTransactionRequest} returns this
 */
proto.dac.properties.CompleteTransactionRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string final_price = 2;
 * @return {string}
 */
proto.dac.properties.CompleteTransactionRequest.prototype.getFinalPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.CompleteTransactionRequest} returns this
 */
proto.dac.properties.CompleteTransactionRequest.prototype.setFinalPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated CompletionDocument documents = 3;
 * @return {!Array<!proto.dac.properties.CompletionDocument>}
 */
proto.dac.properties.CompleteTransactionRequest.prototype.getDocumentsList = function() {
  return /** @type{!Array<!proto.dac.properties.CompletionDocument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.CompletionDocument, 3));
};


/**
 * @param {!Array<!proto.dac.properties.CompletionDocument>} value
 * @return {!proto.dac.properties.CompleteTransactionRequest} returns this
*/
proto.dac.properties.CompleteTransactionRequest.prototype.setDocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dac.properties.CompletionDocument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.CompletionDocument}
 */
proto.dac.properties.CompleteTransactionRequest.prototype.addDocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dac.properties.CompletionDocument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.CompleteTransactionRequest} returns this
 */
proto.dac.properties.CompleteTransactionRequest.prototype.clearDocumentsList = function() {
  return this.setDocumentsList([]);
};


/**
 * optional string blockchain_tx_hash = 4;
 * @return {string}
 */
proto.dac.properties.CompleteTransactionRequest.prototype.getBlockchainTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.CompleteTransactionRequest} returns this
 */
proto.dac.properties.CompleteTransactionRequest.prototype.setBlockchainTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.dac.properties.CompletionDocument.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.CompletionDocument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.CompletionDocument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.CompletionDocument.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    documentUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.dac.properties.CompletionDocument}
 */
proto.dac.properties.CompletionDocument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.CompletionDocument;
  return proto.dac.properties.CompletionDocument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.CompletionDocument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.CompletionDocument}
 */
proto.dac.properties.CompletionDocument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentUrl(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.properties.DocumentType} */ (reader.readEnum());
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
proto.dac.properties.CompletionDocument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.CompletionDocument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.CompletionDocument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.CompletionDocument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDocumentUrl();
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.dac.properties.CompletionDocument.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.CompletionDocument} returns this
 */
proto.dac.properties.CompletionDocument.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string document_url = 2;
 * @return {string}
 */
proto.dac.properties.CompletionDocument.prototype.getDocumentUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.CompletionDocument} returns this
 */
proto.dac.properties.CompletionDocument.prototype.setDocumentUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DocumentType type = 3;
 * @return {!proto.dac.properties.DocumentType}
 */
proto.dac.properties.CompletionDocument.prototype.getType = function() {
  return /** @type {!proto.dac.properties.DocumentType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.properties.DocumentType} value
 * @return {!proto.dac.properties.CompletionDocument} returns this
 */
proto.dac.properties.CompletionDocument.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.dac.properties.TransactionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TransactionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TransactionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    transactionHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newOwnerAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    completedAt: (f = msg.getCompletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deedUrl: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.dac.properties.TransactionResult}
 */
proto.dac.properties.TransactionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TransactionResult;
  return proto.dac.properties.TransactionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TransactionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TransactionResult}
 */
proto.dac.properties.TransactionResult.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTransactionHash(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewOwnerAddress(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCompletedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeedUrl(value);
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
proto.dac.properties.TransactionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TransactionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TransactionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TransactionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTransactionHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNewOwnerAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCompletedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeedUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.dac.properties.TransactionResult.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.TransactionResult} returns this
 */
proto.dac.properties.TransactionResult.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string transaction_hash = 2;
 * @return {string}
 */
proto.dac.properties.TransactionResult.prototype.getTransactionHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionResult} returns this
 */
proto.dac.properties.TransactionResult.prototype.setTransactionHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_owner_address = 3;
 * @return {string}
 */
proto.dac.properties.TransactionResult.prototype.getNewOwnerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionResult} returns this
 */
proto.dac.properties.TransactionResult.prototype.setNewOwnerAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp completed_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.TransactionResult.prototype.getCompletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.TransactionResult} returns this
*/
proto.dac.properties.TransactionResult.prototype.setCompletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TransactionResult} returns this
 */
proto.dac.properties.TransactionResult.prototype.clearCompletedAt = function() {
  return this.setCompletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TransactionResult.prototype.hasCompletedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string deed_url = 5;
 * @return {string}
 */
proto.dac.properties.TransactionResult.prototype.getDeedUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TransactionResult} returns this
 */
proto.dac.properties.TransactionResult.prototype.setDeedUrl = function(value) {
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
proto.dac.properties.CancelTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.CancelTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.CancelTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.CancelTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cancellationFee: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.dac.properties.CancelTransactionRequest}
 */
proto.dac.properties.CancelTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.CancelTransactionRequest;
  return proto.dac.properties.CancelTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.CancelTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.CancelTransactionRequest}
 */
proto.dac.properties.CancelTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCancellationFee(value);
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
proto.dac.properties.CancelTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.CancelTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.CancelTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.CancelTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
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
  f = message.getCancellationFee();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.dac.properties.CancelTransactionRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.CancelTransactionRequest} returns this
 */
proto.dac.properties.CancelTransactionRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.dac.properties.CancelTransactionRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.CancelTransactionRequest} returns this
 */
proto.dac.properties.CancelTransactionRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cancellation_fee = 3;
 * @return {string}
 */
proto.dac.properties.CancelTransactionRequest.prototype.getCancellationFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.CancelTransactionRequest} returns this
 */
proto.dac.properties.CancelTransactionRequest.prototype.setCancellationFee = function(value) {
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
proto.dac.properties.TokenizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalTokens: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tokenPrice: jspb.Message.getFieldWithDefault(msg, 3, ""),
    minimumInvestment: jspb.Message.getFieldWithDefault(msg, 4, ""),
    parameters: (f = msg.getParameters()) && proto.dac.properties.TokenizationParameters.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.TokenizationRequest}
 */
proto.dac.properties.TokenizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenizationRequest;
  return proto.dac.properties.TokenizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenizationRequest}
 */
proto.dac.properties.TokenizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalTokens(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenPrice(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinimumInvestment(value);
      break;
    case 5:
      var value = new proto.dac.properties.TokenizationParameters;
      reader.readMessage(value,proto.dac.properties.TokenizationParameters.deserializeBinaryFromReader);
      msg.setParameters(value);
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
proto.dac.properties.TokenizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTotalTokens();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTokenPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMinimumInvestment();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.dac.properties.TokenizationParameters.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.TokenizationRequest.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenizationRequest} returns this
 */
proto.dac.properties.TokenizationRequest.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string total_tokens = 2;
 * @return {string}
 */
proto.dac.properties.TokenizationRequest.prototype.getTotalTokens = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationRequest} returns this
 */
proto.dac.properties.TokenizationRequest.prototype.setTotalTokens = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token_price = 3;
 * @return {string}
 */
proto.dac.properties.TokenizationRequest.prototype.getTokenPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationRequest} returns this
 */
proto.dac.properties.TokenizationRequest.prototype.setTokenPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string minimum_investment = 4;
 * @return {string}
 */
proto.dac.properties.TokenizationRequest.prototype.getMinimumInvestment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationRequest} returns this
 */
proto.dac.properties.TokenizationRequest.prototype.setMinimumInvestment = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TokenizationParameters parameters = 5;
 * @return {?proto.dac.properties.TokenizationParameters}
 */
proto.dac.properties.TokenizationRequest.prototype.getParameters = function() {
  return /** @type{?proto.dac.properties.TokenizationParameters} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.TokenizationParameters, 5));
};


/**
 * @param {?proto.dac.properties.TokenizationParameters|undefined} value
 * @return {!proto.dac.properties.TokenizationRequest} returns this
*/
proto.dac.properties.TokenizationRequest.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TokenizationRequest} returns this
 */
proto.dac.properties.TokenizationRequest.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TokenizationRequest.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.TokenizationParameters.repeatedFields_ = [5];



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
proto.dac.properties.TokenizationParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenizationParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenizationParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenizationParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tokenSymbol: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dividendPercentage: jspb.Message.getFieldWithDefault(msg, 3, ""),
    managementFee: jspb.Message.getFieldWithDefault(msg, 4, ""),
    investorRightsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    lockPeriod: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.dac.properties.TokenizationParameters}
 */
proto.dac.properties.TokenizationParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenizationParameters;
  return proto.dac.properties.TokenizationParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenizationParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenizationParameters}
 */
proto.dac.properties.TokenizationParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenSymbol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDividendPercentage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setManagementFee(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addInvestorRights(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLockPeriod(value);
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
proto.dac.properties.TokenizationParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenizationParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenizationParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenizationParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTokenSymbol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDividendPercentage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getManagementFee();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInvestorRightsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getLockPeriod();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string token_name = 1;
 * @return {string}
 */
proto.dac.properties.TokenizationParameters.prototype.getTokenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationParameters} returns this
 */
proto.dac.properties.TokenizationParameters.prototype.setTokenName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token_symbol = 2;
 * @return {string}
 */
proto.dac.properties.TokenizationParameters.prototype.getTokenSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationParameters} returns this
 */
proto.dac.properties.TokenizationParameters.prototype.setTokenSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dividend_percentage = 3;
 * @return {string}
 */
proto.dac.properties.TokenizationParameters.prototype.getDividendPercentage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationParameters} returns this
 */
proto.dac.properties.TokenizationParameters.prototype.setDividendPercentage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string management_fee = 4;
 * @return {string}
 */
proto.dac.properties.TokenizationParameters.prototype.getManagementFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationParameters} returns this
 */
proto.dac.properties.TokenizationParameters.prototype.setManagementFee = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string investor_rights = 5;
 * @return {!Array<string>}
 */
proto.dac.properties.TokenizationParameters.prototype.getInvestorRightsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.TokenizationParameters} returns this
 */
proto.dac.properties.TokenizationParameters.prototype.setInvestorRightsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.TokenizationParameters} returns this
 */
proto.dac.properties.TokenizationParameters.prototype.addInvestorRights = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.TokenizationParameters} returns this
 */
proto.dac.properties.TokenizationParameters.prototype.clearInvestorRightsList = function() {
  return this.setInvestorRightsList([]);
};


/**
 * optional string lock_period = 6;
 * @return {string}
 */
proto.dac.properties.TokenizationParameters.prototype.getLockPeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationParameters} returns this
 */
proto.dac.properties.TokenizationParameters.prototype.setLockPeriod = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.TokenizationResponse.repeatedFields_ = [6];



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
proto.dac.properties.TokenizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    progressPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    tokenContractAddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 5, ""),
    processingStepsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.dac.properties.TokenizationResponse}
 */
proto.dac.properties.TokenizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenizationResponse;
  return proto.dac.properties.TokenizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenizationResponse}
 */
proto.dac.properties.TokenizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenizationId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.TokenizationStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProgressPercentage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenContractAddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addProcessingSteps(value);
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
proto.dac.properties.TokenizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenizationId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getProgressPercentage();
  if (f !== 0.0) {
    writer.writeDouble(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProcessingStepsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string tokenization_id = 1;
 * @return {string}
 */
proto.dac.properties.TokenizationResponse.prototype.getTokenizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationResponse} returns this
 */
proto.dac.properties.TokenizationResponse.prototype.setTokenizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TokenizationStatus status = 2;
 * @return {!proto.dac.properties.TokenizationStatus}
 */
proto.dac.properties.TokenizationResponse.prototype.getStatus = function() {
  return /** @type {!proto.dac.properties.TokenizationStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.TokenizationStatus} value
 * @return {!proto.dac.properties.TokenizationResponse} returns this
 */
proto.dac.properties.TokenizationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double progress_percentage = 3;
 * @return {number}
 */
proto.dac.properties.TokenizationResponse.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenizationResponse} returns this
 */
proto.dac.properties.TokenizationResponse.prototype.setProgressPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string token_contract_address = 4;
 * @return {string}
 */
proto.dac.properties.TokenizationResponse.prototype.getTokenContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationResponse} returns this
 */
proto.dac.properties.TokenizationResponse.prototype.setTokenContractAddress = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.TokenizationResponse} returns this
 */
proto.dac.properties.TokenizationResponse.prototype.clearTokenContractAddress = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TokenizationResponse.prototype.hasTokenContractAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string error_message = 5;
 * @return {string}
 */
proto.dac.properties.TokenizationResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenizationResponse} returns this
 */
proto.dac.properties.TokenizationResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.TokenizationResponse} returns this
 */
proto.dac.properties.TokenizationResponse.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TokenizationResponse.prototype.hasErrorMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string processing_steps = 6;
 * @return {!Array<string>}
 */
proto.dac.properties.TokenizationResponse.prototype.getProcessingStepsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.TokenizationResponse} returns this
 */
proto.dac.properties.TokenizationResponse.prototype.setProcessingStepsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.TokenizationResponse} returns this
 */
proto.dac.properties.TokenizationResponse.prototype.addProcessingSteps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.TokenizationResponse} returns this
 */
proto.dac.properties.TokenizationResponse.prototype.clearProcessingStepsList = function() {
  return this.setProcessingStepsList([]);
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
proto.dac.properties.TokenInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.dac.properties.TokenInfoRequest}
 */
proto.dac.properties.TokenInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenInfoRequest;
  return proto.dac.properties.TokenInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenInfoRequest}
 */
proto.dac.properties.TokenInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
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
proto.dac.properties.TokenInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.TokenInfoRequest.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenInfoRequest} returns this
 */
proto.dac.properties.TokenInfoRequest.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.dac.properties.TokenInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tokenName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tokenSymbol: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalSupply: jspb.Message.getFieldWithDefault(msg, 4, ""),
    availableTokens: jspb.Message.getFieldWithDefault(msg, 5, ""),
    currentPrice: jspb.Message.getFieldWithDefault(msg, 6, ""),
    marketCap: jspb.Message.getFieldWithDefault(msg, 7, ""),
    metrics: (f = msg.getMetrics()) && proto.dac.properties.TokenMetrics.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.TokenInfo}
 */
proto.dac.properties.TokenInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenInfo;
  return proto.dac.properties.TokenInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenInfo}
 */
proto.dac.properties.TokenInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenSymbol(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalSupply(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvailableTokens(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentPrice(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketCap(value);
      break;
    case 8:
      var value = new proto.dac.properties.TokenMetrics;
      reader.readMessage(value,proto.dac.properties.TokenMetrics.deserializeBinaryFromReader);
      msg.setMetrics(value);
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
proto.dac.properties.TokenInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTokenName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTokenSymbol();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalSupply();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAvailableTokens();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCurrentPrice();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMarketCap();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMetrics();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.dac.properties.TokenMetrics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string contract_address = 1;
 * @return {string}
 */
proto.dac.properties.TokenInfo.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenInfo} returns this
 */
proto.dac.properties.TokenInfo.prototype.setContractAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token_name = 2;
 * @return {string}
 */
proto.dac.properties.TokenInfo.prototype.getTokenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenInfo} returns this
 */
proto.dac.properties.TokenInfo.prototype.setTokenName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token_symbol = 3;
 * @return {string}
 */
proto.dac.properties.TokenInfo.prototype.getTokenSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenInfo} returns this
 */
proto.dac.properties.TokenInfo.prototype.setTokenSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string total_supply = 4;
 * @return {string}
 */
proto.dac.properties.TokenInfo.prototype.getTotalSupply = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenInfo} returns this
 */
proto.dac.properties.TokenInfo.prototype.setTotalSupply = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string available_tokens = 5;
 * @return {string}
 */
proto.dac.properties.TokenInfo.prototype.getAvailableTokens = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenInfo} returns this
 */
proto.dac.properties.TokenInfo.prototype.setAvailableTokens = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string current_price = 6;
 * @return {string}
 */
proto.dac.properties.TokenInfo.prototype.getCurrentPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenInfo} returns this
 */
proto.dac.properties.TokenInfo.prototype.setCurrentPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string market_cap = 7;
 * @return {string}
 */
proto.dac.properties.TokenInfo.prototype.getMarketCap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenInfo} returns this
 */
proto.dac.properties.TokenInfo.prototype.setMarketCap = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional TokenMetrics metrics = 8;
 * @return {?proto.dac.properties.TokenMetrics}
 */
proto.dac.properties.TokenInfo.prototype.getMetrics = function() {
  return /** @type{?proto.dac.properties.TokenMetrics} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.TokenMetrics, 8));
};


/**
 * @param {?proto.dac.properties.TokenMetrics|undefined} value
 * @return {!proto.dac.properties.TokenInfo} returns this
*/
proto.dac.properties.TokenInfo.prototype.setMetrics = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TokenInfo} returns this
 */
proto.dac.properties.TokenInfo.prototype.clearMetrics = function() {
  return this.setMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TokenInfo.prototype.hasMetrics = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.dac.properties.TokenMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    holderCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tradingVolume24h: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priceChange24h: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    dividendYield: jspb.Message.getFieldWithDefault(msg, 4, ""),
    liquidityRatio: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.dac.properties.TokenMetrics}
 */
proto.dac.properties.TokenMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenMetrics;
  return proto.dac.properties.TokenMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenMetrics}
 */
proto.dac.properties.TokenMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHolderCount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradingVolume24h(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceChange24h(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDividendYield(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLiquidityRatio(value);
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
proto.dac.properties.TokenMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHolderCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTradingVolume24h();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPriceChange24h();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getDividendYield();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLiquidityRatio();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional int32 holder_count = 1;
 * @return {number}
 */
proto.dac.properties.TokenMetrics.prototype.getHolderCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenMetrics} returns this
 */
proto.dac.properties.TokenMetrics.prototype.setHolderCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string trading_volume_24h = 2;
 * @return {string}
 */
proto.dac.properties.TokenMetrics.prototype.getTradingVolume24h = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenMetrics} returns this
 */
proto.dac.properties.TokenMetrics.prototype.setTradingVolume24h = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double price_change_24h = 3;
 * @return {number}
 */
proto.dac.properties.TokenMetrics.prototype.getPriceChange24h = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenMetrics} returns this
 */
proto.dac.properties.TokenMetrics.prototype.setPriceChange24h = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string dividend_yield = 4;
 * @return {string}
 */
proto.dac.properties.TokenMetrics.prototype.getDividendYield = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenMetrics} returns this
 */
proto.dac.properties.TokenMetrics.prototype.setDividendYield = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double liquidity_ratio = 5;
 * @return {number}
 */
proto.dac.properties.TokenMetrics.prototype.getLiquidityRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenMetrics} returns this
 */
proto.dac.properties.TokenMetrics.prototype.setLiquidityRatio = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
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
proto.dac.properties.TokenTransferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenTransferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenTransferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenTransferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenContractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fromUserId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    toUserId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tokenAmount: jspb.Message.getFieldWithDefault(msg, 4, ""),
    transferFee: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.dac.properties.TokenTransferRequest}
 */
proto.dac.properties.TokenTransferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenTransferRequest;
  return proto.dac.properties.TokenTransferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenTransferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenTransferRequest}
 */
proto.dac.properties.TokenTransferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenContractAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFromUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setToUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenAmount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferFee(value);
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
proto.dac.properties.TokenTransferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenTransferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenTransferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenTransferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFromUserId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getToUserId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTokenAmount();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransferFee();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string token_contract_address = 1;
 * @return {string}
 */
proto.dac.properties.TokenTransferRequest.prototype.getTokenContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenTransferRequest} returns this
 */
proto.dac.properties.TokenTransferRequest.prototype.setTokenContractAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 from_user_id = 2;
 * @return {number}
 */
proto.dac.properties.TokenTransferRequest.prototype.getFromUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenTransferRequest} returns this
 */
proto.dac.properties.TokenTransferRequest.prototype.setFromUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 to_user_id = 3;
 * @return {number}
 */
proto.dac.properties.TokenTransferRequest.prototype.getToUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenTransferRequest} returns this
 */
proto.dac.properties.TokenTransferRequest.prototype.setToUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string token_amount = 4;
 * @return {string}
 */
proto.dac.properties.TokenTransferRequest.prototype.getTokenAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenTransferRequest} returns this
 */
proto.dac.properties.TokenTransferRequest.prototype.setTokenAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string transfer_fee = 5;
 * @return {string}
 */
proto.dac.properties.TokenTransferRequest.prototype.getTransferFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenTransferRequest} returns this
 */
proto.dac.properties.TokenTransferRequest.prototype.setTransferFee = function(value) {
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
proto.dac.properties.TokenTransferResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenTransferResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenTransferResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenTransferResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    transactionHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transferId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    completedAt: (f = msg.getCompletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.TokenTransferResponse}
 */
proto.dac.properties.TokenTransferResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenTransferResponse;
  return proto.dac.properties.TokenTransferResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenTransferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenTransferResponse}
 */
proto.dac.properties.TokenTransferResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTransactionHash(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCompletedAt(value);
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
proto.dac.properties.TokenTransferResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenTransferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenTransferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenTransferResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTransactionHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransferId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCompletedAt();
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
proto.dac.properties.TokenTransferResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.TokenTransferResponse} returns this
 */
proto.dac.properties.TokenTransferResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string transaction_hash = 2;
 * @return {string}
 */
proto.dac.properties.TokenTransferResponse.prototype.getTransactionHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenTransferResponse} returns this
 */
proto.dac.properties.TokenTransferResponse.prototype.setTransactionHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string transfer_id = 3;
 * @return {string}
 */
proto.dac.properties.TokenTransferResponse.prototype.getTransferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.TokenTransferResponse} returns this
 */
proto.dac.properties.TokenTransferResponse.prototype.setTransferId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp completed_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.TokenTransferResponse.prototype.getCompletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.TokenTransferResponse} returns this
*/
proto.dac.properties.TokenTransferResponse.prototype.setCompletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TokenTransferResponse} returns this
 */
proto.dac.properties.TokenTransferResponse.prototype.clearCompletedAt = function() {
  return this.setCompletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TokenTransferResponse.prototype.hasCompletedAt = function() {
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
proto.dac.properties.TokenHoldersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenHoldersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenHoldersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenHoldersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.dac.properties.TokenHoldersRequest}
 */
proto.dac.properties.TokenHoldersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenHoldersRequest;
  return proto.dac.properties.TokenHoldersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenHoldersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenHoldersRequest}
 */
proto.dac.properties.TokenHoldersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
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
proto.dac.properties.TokenHoldersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenHoldersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenHoldersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenHoldersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
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
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.TokenHoldersRequest.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenHoldersRequest} returns this
 */
proto.dac.properties.TokenHoldersRequest.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page = 2;
 * @return {number}
 */
proto.dac.properties.TokenHoldersRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenHoldersRequest} returns this
 */
proto.dac.properties.TokenHoldersRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 limit = 3;
 * @return {number}
 */
proto.dac.properties.TokenHoldersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenHoldersRequest} returns this
 */
proto.dac.properties.TokenHoldersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.TokenHoldersResponse.repeatedFields_ = [1];



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
proto.dac.properties.TokenHoldersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenHoldersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenHoldersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenHoldersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    holdersList: jspb.Message.toObjectList(msg.getHoldersList(),
    proto.dac.properties.TokenHolder.toObject, includeInstance),
    totalHolders: jspb.Message.getFieldWithDefault(msg, 2, 0),
    distribution: (f = msg.getDistribution()) && proto.dac.properties.TokenDistribution.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.TokenHoldersResponse}
 */
proto.dac.properties.TokenHoldersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenHoldersResponse;
  return proto.dac.properties.TokenHoldersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenHoldersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenHoldersResponse}
 */
proto.dac.properties.TokenHoldersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.TokenHolder;
      reader.readMessage(value,proto.dac.properties.TokenHolder.deserializeBinaryFromReader);
      msg.addHolders(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalHolders(value);
      break;
    case 3:
      var value = new proto.dac.properties.TokenDistribution;
      reader.readMessage(value,proto.dac.properties.TokenDistribution.deserializeBinaryFromReader);
      msg.setDistribution(value);
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
proto.dac.properties.TokenHoldersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenHoldersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenHoldersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenHoldersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHoldersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.properties.TokenHolder.serializeBinaryToWriter
    );
  }
  f = message.getTotalHolders();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDistribution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dac.properties.TokenDistribution.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TokenHolder holders = 1;
 * @return {!Array<!proto.dac.properties.TokenHolder>}
 */
proto.dac.properties.TokenHoldersResponse.prototype.getHoldersList = function() {
  return /** @type{!Array<!proto.dac.properties.TokenHolder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.TokenHolder, 1));
};


/**
 * @param {!Array<!proto.dac.properties.TokenHolder>} value
 * @return {!proto.dac.properties.TokenHoldersResponse} returns this
*/
proto.dac.properties.TokenHoldersResponse.prototype.setHoldersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.properties.TokenHolder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.TokenHolder}
 */
proto.dac.properties.TokenHoldersResponse.prototype.addHolders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.properties.TokenHolder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.TokenHoldersResponse} returns this
 */
proto.dac.properties.TokenHoldersResponse.prototype.clearHoldersList = function() {
  return this.setHoldersList([]);
};


/**
 * optional int32 total_holders = 2;
 * @return {number}
 */
proto.dac.properties.TokenHoldersResponse.prototype.getTotalHolders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenHoldersResponse} returns this
 */
proto.dac.properties.TokenHoldersResponse.prototype.setTotalHolders = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional TokenDistribution distribution = 3;
 * @return {?proto.dac.properties.TokenDistribution}
 */
proto.dac.properties.TokenHoldersResponse.prototype.getDistribution = function() {
  return /** @type{?proto.dac.properties.TokenDistribution} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.TokenDistribution, 3));
};


/**
 * @param {?proto.dac.properties.TokenDistribution|undefined} value
 * @return {!proto.dac.properties.TokenHoldersResponse} returns this
*/
proto.dac.properties.TokenHoldersResponse.prototype.setDistribution = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.TokenHoldersResponse} returns this
 */
proto.dac.properties.TokenHoldersResponse.prototype.clearDistribution = function() {
  return this.setDistribution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.TokenHoldersResponse.prototype.hasDistribution = function() {
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
proto.dac.properties.TokenDistribution.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TokenDistribution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TokenDistribution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenDistribution.toObject = function(includeInstance, msg) {
  var f, obj = {
    top10Percentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    top100Percentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    medianHolding: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    giniCoefficient: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.properties.TokenDistribution}
 */
proto.dac.properties.TokenDistribution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TokenDistribution;
  return proto.dac.properties.TokenDistribution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TokenDistribution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TokenDistribution}
 */
proto.dac.properties.TokenDistribution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTop10Percentage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTop100Percentage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMedianHolding(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGiniCoefficient(value);
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
proto.dac.properties.TokenDistribution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TokenDistribution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TokenDistribution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TokenDistribution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTop10Percentage();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getTop100Percentage();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getMedianHolding();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getGiniCoefficient();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double top_10_percentage = 1;
 * @return {number}
 */
proto.dac.properties.TokenDistribution.prototype.getTop10Percentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenDistribution} returns this
 */
proto.dac.properties.TokenDistribution.prototype.setTop10Percentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double top_100_percentage = 2;
 * @return {number}
 */
proto.dac.properties.TokenDistribution.prototype.getTop100Percentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenDistribution} returns this
 */
proto.dac.properties.TokenDistribution.prototype.setTop100Percentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double median_holding = 3;
 * @return {number}
 */
proto.dac.properties.TokenDistribution.prototype.getMedianHolding = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenDistribution} returns this
 */
proto.dac.properties.TokenDistribution.prototype.setMedianHolding = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double gini_coefficient = 4;
 * @return {number}
 */
proto.dac.properties.TokenDistribution.prototype.getGiniCoefficient = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TokenDistribution} returns this
 */
proto.dac.properties.TokenDistribution.prototype.setGiniCoefficient = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
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
proto.dac.properties.ValuationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ValuationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ValuationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    method: jspb.Message.getFieldWithDefault(msg, 2, 0),
    includeComparables: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    includeMarketAnalysis: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.dac.properties.ValuationRequest}
 */
proto.dac.properties.ValuationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ValuationRequest;
  return proto.dac.properties.ValuationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ValuationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ValuationRequest}
 */
proto.dac.properties.ValuationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.ValuationMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeComparables(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeMarketAnalysis(value);
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
proto.dac.properties.ValuationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ValuationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ValuationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getIncludeComparables();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIncludeMarketAnalysis();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.ValuationRequest.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ValuationRequest} returns this
 */
proto.dac.properties.ValuationRequest.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ValuationMethod method = 2;
 * @return {!proto.dac.properties.ValuationMethod}
 */
proto.dac.properties.ValuationRequest.prototype.getMethod = function() {
  return /** @type {!proto.dac.properties.ValuationMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.ValuationMethod} value
 * @return {!proto.dac.properties.ValuationRequest} returns this
 */
proto.dac.properties.ValuationRequest.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool include_comparables = 3;
 * @return {boolean}
 */
proto.dac.properties.ValuationRequest.prototype.getIncludeComparables = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.ValuationRequest} returns this
 */
proto.dac.properties.ValuationRequest.prototype.setIncludeComparables = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool include_market_analysis = 4;
 * @return {boolean}
 */
proto.dac.properties.ValuationRequest.prototype.getIncludeMarketAnalysis = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.ValuationRequest} returns this
 */
proto.dac.properties.ValuationRequest.prototype.setIncludeMarketAnalysis = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.ValuationResponse.repeatedFields_ = [5];



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
proto.dac.properties.ValuationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ValuationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ValuationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    progressPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    valuation: (f = msg.getValuation()) && proto.dac.properties.Valuation.toObject(includeInstance, f),
    processingStepsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.dac.properties.ValuationResponse}
 */
proto.dac.properties.ValuationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ValuationResponse;
  return proto.dac.properties.ValuationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ValuationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ValuationResponse}
 */
proto.dac.properties.ValuationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValuationId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.ValuationStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProgressPercentage(value);
      break;
    case 4:
      var value = new proto.dac.properties.Valuation;
      reader.readMessage(value,proto.dac.properties.Valuation.deserializeBinaryFromReader);
      msg.setValuation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addProcessingSteps(value);
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
proto.dac.properties.ValuationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ValuationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ValuationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuationId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getProgressPercentage();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getValuation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dac.properties.Valuation.serializeBinaryToWriter
    );
  }
  f = message.getProcessingStepsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string valuation_id = 1;
 * @return {string}
 */
proto.dac.properties.ValuationResponse.prototype.getValuationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ValuationResponse} returns this
 */
proto.dac.properties.ValuationResponse.prototype.setValuationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ValuationStatus status = 2;
 * @return {!proto.dac.properties.ValuationStatus}
 */
proto.dac.properties.ValuationResponse.prototype.getStatus = function() {
  return /** @type {!proto.dac.properties.ValuationStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.ValuationStatus} value
 * @return {!proto.dac.properties.ValuationResponse} returns this
 */
proto.dac.properties.ValuationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double progress_percentage = 3;
 * @return {number}
 */
proto.dac.properties.ValuationResponse.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ValuationResponse} returns this
 */
proto.dac.properties.ValuationResponse.prototype.setProgressPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional Valuation valuation = 4;
 * @return {?proto.dac.properties.Valuation}
 */
proto.dac.properties.ValuationResponse.prototype.getValuation = function() {
  return /** @type{?proto.dac.properties.Valuation} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.Valuation, 4));
};


/**
 * @param {?proto.dac.properties.Valuation|undefined} value
 * @return {!proto.dac.properties.ValuationResponse} returns this
*/
proto.dac.properties.ValuationResponse.prototype.setValuation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.ValuationResponse} returns this
 */
proto.dac.properties.ValuationResponse.prototype.clearValuation = function() {
  return this.setValuation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.ValuationResponse.prototype.hasValuation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string processing_steps = 5;
 * @return {!Array<string>}
 */
proto.dac.properties.ValuationResponse.prototype.getProcessingStepsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.ValuationResponse} returns this
 */
proto.dac.properties.ValuationResponse.prototype.setProcessingStepsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.ValuationResponse} returns this
 */
proto.dac.properties.ValuationResponse.prototype.addProcessingSteps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.ValuationResponse} returns this
 */
proto.dac.properties.ValuationResponse.prototype.clearProcessingStepsList = function() {
  return this.setProcessingStepsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.Valuation.repeatedFields_ = [7,8];



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
proto.dac.properties.Valuation.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.Valuation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.Valuation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.Valuation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propertyId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    estimatedValue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    confidenceScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    method: jspb.Message.getFieldWithDefault(msg, 5, 0),
    valueRange: (f = msg.getValueRange()) && proto.dac.properties.ValueRange.toObject(includeInstance, f),
    comparablesList: jspb.Message.toObjectList(msg.getComparablesList(),
    proto.dac.properties.ComparableProperty.toObject, includeInstance),
    factorsList: jspb.Message.toObjectList(msg.getFactorsList(),
    proto.dac.properties.ValuationFactor.toObject, includeInstance),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    appraiser: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.dac.properties.Valuation}
 */
proto.dac.properties.Valuation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.Valuation;
  return proto.dac.properties.Valuation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.Valuation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.Valuation}
 */
proto.dac.properties.Valuation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEstimatedValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConfidenceScore(value);
      break;
    case 5:
      var value = /** @type {!proto.dac.properties.ValuationMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 6:
      var value = new proto.dac.properties.ValueRange;
      reader.readMessage(value,proto.dac.properties.ValueRange.deserializeBinaryFromReader);
      msg.setValueRange(value);
      break;
    case 7:
      var value = new proto.dac.properties.ComparableProperty;
      reader.readMessage(value,proto.dac.properties.ComparableProperty.deserializeBinaryFromReader);
      msg.addComparables(value);
      break;
    case 8:
      var value = new proto.dac.properties.ValuationFactor;
      reader.readMessage(value,proto.dac.properties.ValuationFactor.deserializeBinaryFromReader);
      msg.addFactors(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppraiser(value);
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
proto.dac.properties.Valuation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.Valuation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.Valuation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.Valuation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEstimatedValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConfidenceScore();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getValueRange();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.dac.properties.ValueRange.serializeBinaryToWriter
    );
  }
  f = message.getComparablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.dac.properties.ComparableProperty.serializeBinaryToWriter
    );
  }
  f = message.getFactorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.dac.properties.ValuationFactor.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAppraiser();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.dac.properties.Valuation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Valuation} returns this
 */
proto.dac.properties.Valuation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 property_id = 2;
 * @return {number}
 */
proto.dac.properties.Valuation.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.Valuation} returns this
 */
proto.dac.properties.Valuation.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string estimated_value = 3;
 * @return {string}
 */
proto.dac.properties.Valuation.prototype.getEstimatedValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Valuation} returns this
 */
proto.dac.properties.Valuation.prototype.setEstimatedValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double confidence_score = 4;
 * @return {number}
 */
proto.dac.properties.Valuation.prototype.getConfidenceScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.Valuation} returns this
 */
proto.dac.properties.Valuation.prototype.setConfidenceScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional ValuationMethod method = 5;
 * @return {!proto.dac.properties.ValuationMethod}
 */
proto.dac.properties.Valuation.prototype.getMethod = function() {
  return /** @type {!proto.dac.properties.ValuationMethod} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.dac.properties.ValuationMethod} value
 * @return {!proto.dac.properties.Valuation} returns this
 */
proto.dac.properties.Valuation.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ValueRange value_range = 6;
 * @return {?proto.dac.properties.ValueRange}
 */
proto.dac.properties.Valuation.prototype.getValueRange = function() {
  return /** @type{?proto.dac.properties.ValueRange} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.ValueRange, 6));
};


/**
 * @param {?proto.dac.properties.ValueRange|undefined} value
 * @return {!proto.dac.properties.Valuation} returns this
*/
proto.dac.properties.Valuation.prototype.setValueRange = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.Valuation} returns this
 */
proto.dac.properties.Valuation.prototype.clearValueRange = function() {
  return this.setValueRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.Valuation.prototype.hasValueRange = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated ComparableProperty comparables = 7;
 * @return {!Array<!proto.dac.properties.ComparableProperty>}
 */
proto.dac.properties.Valuation.prototype.getComparablesList = function() {
  return /** @type{!Array<!proto.dac.properties.ComparableProperty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.ComparableProperty, 7));
};


/**
 * @param {!Array<!proto.dac.properties.ComparableProperty>} value
 * @return {!proto.dac.properties.Valuation} returns this
*/
proto.dac.properties.Valuation.prototype.setComparablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.dac.properties.ComparableProperty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.ComparableProperty}
 */
proto.dac.properties.Valuation.prototype.addComparables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.dac.properties.ComparableProperty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.Valuation} returns this
 */
proto.dac.properties.Valuation.prototype.clearComparablesList = function() {
  return this.setComparablesList([]);
};


/**
 * repeated ValuationFactor factors = 8;
 * @return {!Array<!proto.dac.properties.ValuationFactor>}
 */
proto.dac.properties.Valuation.prototype.getFactorsList = function() {
  return /** @type{!Array<!proto.dac.properties.ValuationFactor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.ValuationFactor, 8));
};


/**
 * @param {!Array<!proto.dac.properties.ValuationFactor>} value
 * @return {!proto.dac.properties.Valuation} returns this
*/
proto.dac.properties.Valuation.prototype.setFactorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.dac.properties.ValuationFactor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.ValuationFactor}
 */
proto.dac.properties.Valuation.prototype.addFactors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.dac.properties.ValuationFactor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.Valuation} returns this
 */
proto.dac.properties.Valuation.prototype.clearFactorsList = function() {
  return this.setFactorsList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.Valuation.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.Valuation} returns this
*/
proto.dac.properties.Valuation.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.Valuation} returns this
 */
proto.dac.properties.Valuation.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.Valuation.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string appraiser = 10;
 * @return {string}
 */
proto.dac.properties.Valuation.prototype.getAppraiser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.Valuation} returns this
 */
proto.dac.properties.Valuation.prototype.setAppraiser = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
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
proto.dac.properties.ValueRange.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ValueRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ValueRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValueRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    lowEstimate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    highEstimate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    medianEstimate: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.dac.properties.ValueRange}
 */
proto.dac.properties.ValueRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ValueRange;
  return proto.dac.properties.ValueRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ValueRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ValueRange}
 */
proto.dac.properties.ValueRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLowEstimate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHighEstimate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMedianEstimate(value);
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
proto.dac.properties.ValueRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ValueRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ValueRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValueRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLowEstimate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHighEstimate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMedianEstimate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string low_estimate = 1;
 * @return {string}
 */
proto.dac.properties.ValueRange.prototype.getLowEstimate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ValueRange} returns this
 */
proto.dac.properties.ValueRange.prototype.setLowEstimate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string high_estimate = 2;
 * @return {string}
 */
proto.dac.properties.ValueRange.prototype.getHighEstimate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ValueRange} returns this
 */
proto.dac.properties.ValueRange.prototype.setHighEstimate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string median_estimate = 3;
 * @return {string}
 */
proto.dac.properties.ValueRange.prototype.getMedianEstimate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ValueRange} returns this
 */
proto.dac.properties.ValueRange.prototype.setMedianEstimate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.ComparableProperty.repeatedFields_ = [6];



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
proto.dac.properties.ComparableProperty.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ComparableProperty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ComparableProperty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ComparableProperty.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    salePrice: jspb.Message.getFieldWithDefault(msg, 3, ""),
    saleDate: (f = msg.getSaleDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    similarityScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    adjustmentsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.dac.properties.ComparableProperty}
 */
proto.dac.properties.ComparableProperty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ComparableProperty;
  return proto.dac.properties.ComparableProperty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ComparableProperty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ComparableProperty}
 */
proto.dac.properties.ComparableProperty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSalePrice(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSaleDate(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSimilarityScore(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addAdjustments(value);
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
proto.dac.properties.ComparableProperty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ComparableProperty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ComparableProperty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ComparableProperty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSalePrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSaleDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSimilarityScore();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAdjustmentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.ComparableProperty.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ComparableProperty} returns this
 */
proto.dac.properties.ComparableProperty.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.dac.properties.ComparableProperty.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ComparableProperty} returns this
 */
proto.dac.properties.ComparableProperty.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sale_price = 3;
 * @return {string}
 */
proto.dac.properties.ComparableProperty.prototype.getSalePrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ComparableProperty} returns this
 */
proto.dac.properties.ComparableProperty.prototype.setSalePrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp sale_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.ComparableProperty.prototype.getSaleDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.ComparableProperty} returns this
*/
proto.dac.properties.ComparableProperty.prototype.setSaleDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.ComparableProperty} returns this
 */
proto.dac.properties.ComparableProperty.prototype.clearSaleDate = function() {
  return this.setSaleDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.ComparableProperty.prototype.hasSaleDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double similarity_score = 5;
 * @return {number}
 */
proto.dac.properties.ComparableProperty.prototype.getSimilarityScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ComparableProperty} returns this
 */
proto.dac.properties.ComparableProperty.prototype.setSimilarityScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * repeated string adjustments = 6;
 * @return {!Array<string>}
 */
proto.dac.properties.ComparableProperty.prototype.getAdjustmentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.ComparableProperty} returns this
 */
proto.dac.properties.ComparableProperty.prototype.setAdjustmentsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.ComparableProperty} returns this
 */
proto.dac.properties.ComparableProperty.prototype.addAdjustments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.ComparableProperty} returns this
 */
proto.dac.properties.ComparableProperty.prototype.clearAdjustmentsList = function() {
  return this.setAdjustmentsList([]);
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
proto.dac.properties.ValuationFactor.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ValuationFactor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ValuationFactor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationFactor.toObject = function(includeInstance, msg) {
  var f, obj = {
    factorName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    impactWeight: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.dac.properties.ValuationFactor}
 */
proto.dac.properties.ValuationFactor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ValuationFactor;
  return proto.dac.properties.ValuationFactor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ValuationFactor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ValuationFactor}
 */
proto.dac.properties.ValuationFactor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFactorName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setImpactWeight(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.dac.properties.FactorDirection} */ (reader.readEnum());
      msg.setDirection(value);
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
proto.dac.properties.ValuationFactor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ValuationFactor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ValuationFactor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationFactor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFactorName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImpactWeight();
  if (f !== 0.0) {
    writer.writeDouble(
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
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string factor_name = 1;
 * @return {string}
 */
proto.dac.properties.ValuationFactor.prototype.getFactorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ValuationFactor} returns this
 */
proto.dac.properties.ValuationFactor.prototype.setFactorName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double impact_weight = 2;
 * @return {number}
 */
proto.dac.properties.ValuationFactor.prototype.getImpactWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ValuationFactor} returns this
 */
proto.dac.properties.ValuationFactor.prototype.setImpactWeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.dac.properties.ValuationFactor.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ValuationFactor} returns this
 */
proto.dac.properties.ValuationFactor.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional FactorDirection direction = 4;
 * @return {!proto.dac.properties.FactorDirection}
 */
proto.dac.properties.ValuationFactor.prototype.getDirection = function() {
  return /** @type {!proto.dac.properties.FactorDirection} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.properties.FactorDirection} value
 * @return {!proto.dac.properties.ValuationFactor} returns this
 */
proto.dac.properties.ValuationFactor.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.dac.properties.ValuationHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ValuationHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ValuationHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.ValuationHistoryRequest}
 */
proto.dac.properties.ValuationHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ValuationHistoryRequest;
  return proto.dac.properties.ValuationHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ValuationHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ValuationHistoryRequest}
 */
proto.dac.properties.ValuationHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
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
proto.dac.properties.ValuationHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ValuationHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ValuationHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
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
};


/**
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.ValuationHistoryRequest.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ValuationHistoryRequest} returns this
 */
proto.dac.properties.ValuationHistoryRequest.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.ValuationHistoryRequest.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.ValuationHistoryRequest} returns this
*/
proto.dac.properties.ValuationHistoryRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.ValuationHistoryRequest} returns this
 */
proto.dac.properties.ValuationHistoryRequest.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.ValuationHistoryRequest.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.ValuationHistoryRequest.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.ValuationHistoryRequest} returns this
*/
proto.dac.properties.ValuationHistoryRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.ValuationHistoryRequest} returns this
 */
proto.dac.properties.ValuationHistoryRequest.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.ValuationHistoryRequest.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.ValuationHistoryResponse.repeatedFields_ = [1];



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
proto.dac.properties.ValuationHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ValuationHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ValuationHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuationsList: jspb.Message.toObjectList(msg.getValuationsList(),
    proto.dac.properties.Valuation.toObject, includeInstance),
    trend: (f = msg.getTrend()) && proto.dac.properties.ValuationTrend.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.ValuationHistoryResponse}
 */
proto.dac.properties.ValuationHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ValuationHistoryResponse;
  return proto.dac.properties.ValuationHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ValuationHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ValuationHistoryResponse}
 */
proto.dac.properties.ValuationHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.Valuation;
      reader.readMessage(value,proto.dac.properties.Valuation.deserializeBinaryFromReader);
      msg.addValuations(value);
      break;
    case 2:
      var value = new proto.dac.properties.ValuationTrend;
      reader.readMessage(value,proto.dac.properties.ValuationTrend.deserializeBinaryFromReader);
      msg.setTrend(value);
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
proto.dac.properties.ValuationHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ValuationHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ValuationHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.properties.Valuation.serializeBinaryToWriter
    );
  }
  f = message.getTrend();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.properties.ValuationTrend.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Valuation valuations = 1;
 * @return {!Array<!proto.dac.properties.Valuation>}
 */
proto.dac.properties.ValuationHistoryResponse.prototype.getValuationsList = function() {
  return /** @type{!Array<!proto.dac.properties.Valuation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.Valuation, 1));
};


/**
 * @param {!Array<!proto.dac.properties.Valuation>} value
 * @return {!proto.dac.properties.ValuationHistoryResponse} returns this
*/
proto.dac.properties.ValuationHistoryResponse.prototype.setValuationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.properties.Valuation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.Valuation}
 */
proto.dac.properties.ValuationHistoryResponse.prototype.addValuations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.properties.Valuation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.ValuationHistoryResponse} returns this
 */
proto.dac.properties.ValuationHistoryResponse.prototype.clearValuationsList = function() {
  return this.setValuationsList([]);
};


/**
 * optional ValuationTrend trend = 2;
 * @return {?proto.dac.properties.ValuationTrend}
 */
proto.dac.properties.ValuationHistoryResponse.prototype.getTrend = function() {
  return /** @type{?proto.dac.properties.ValuationTrend} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.ValuationTrend, 2));
};


/**
 * @param {?proto.dac.properties.ValuationTrend|undefined} value
 * @return {!proto.dac.properties.ValuationHistoryResponse} returns this
*/
proto.dac.properties.ValuationHistoryResponse.prototype.setTrend = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.ValuationHistoryResponse} returns this
 */
proto.dac.properties.ValuationHistoryResponse.prototype.clearTrend = function() {
  return this.setTrend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.ValuationHistoryResponse.prototype.hasTrend = function() {
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
proto.dac.properties.ValuationTrend.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ValuationTrend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ValuationTrend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationTrend.toObject = function(includeInstance, msg) {
  var f, obj = {
    appreciationRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    trendDirection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    volatility: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    priceMomentum: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.properties.ValuationTrend}
 */
proto.dac.properties.ValuationTrend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ValuationTrend;
  return proto.dac.properties.ValuationTrend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ValuationTrend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ValuationTrend}
 */
proto.dac.properties.ValuationTrend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAppreciationRate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrendDirection(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolatility(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceMomentum(value);
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
proto.dac.properties.ValuationTrend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ValuationTrend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ValuationTrend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ValuationTrend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppreciationRate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getTrendDirection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVolatility();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPriceMomentum();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double appreciation_rate = 1;
 * @return {number}
 */
proto.dac.properties.ValuationTrend.prototype.getAppreciationRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ValuationTrend} returns this
 */
proto.dac.properties.ValuationTrend.prototype.setAppreciationRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string trend_direction = 2;
 * @return {string}
 */
proto.dac.properties.ValuationTrend.prototype.getTrendDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.ValuationTrend} returns this
 */
proto.dac.properties.ValuationTrend.prototype.setTrendDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double volatility = 3;
 * @return {number}
 */
proto.dac.properties.ValuationTrend.prototype.getVolatility = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ValuationTrend} returns this
 */
proto.dac.properties.ValuationTrend.prototype.setVolatility = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double price_momentum = 4;
 * @return {number}
 */
proto.dac.properties.ValuationTrend.prototype.getPriceMomentum = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ValuationTrend} returns this
 */
proto.dac.properties.ValuationTrend.prototype.setPriceMomentum = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.UpdateValuationRequest.repeatedFields_ = [4];



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
proto.dac.properties.UpdateValuationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.UpdateValuationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.UpdateValuationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.UpdateValuationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updatedValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
    updatedFactorsList: jspb.Message.toObjectList(msg.getUpdatedFactorsList(),
    proto.dac.properties.ValuationFactor.toObject, includeInstance)
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
 * @return {!proto.dac.properties.UpdateValuationRequest}
 */
proto.dac.properties.UpdateValuationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.UpdateValuationRequest;
  return proto.dac.properties.UpdateValuationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.UpdateValuationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.UpdateValuationRequest}
 */
proto.dac.properties.UpdateValuationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValuationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 4:
      var value = new proto.dac.properties.ValuationFactor;
      reader.readMessage(value,proto.dac.properties.ValuationFactor.deserializeBinaryFromReader);
      msg.addUpdatedFactors(value);
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
proto.dac.properties.UpdateValuationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.UpdateValuationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.UpdateValuationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.UpdateValuationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdatedValue();
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
  f = message.getUpdatedFactorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.properties.ValuationFactor.serializeBinaryToWriter
    );
  }
};


/**
 * optional string valuation_id = 1;
 * @return {string}
 */
proto.dac.properties.UpdateValuationRequest.prototype.getValuationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.UpdateValuationRequest} returns this
 */
proto.dac.properties.UpdateValuationRequest.prototype.setValuationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string updated_value = 2;
 * @return {string}
 */
proto.dac.properties.UpdateValuationRequest.prototype.getUpdatedValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.UpdateValuationRequest} returns this
 */
proto.dac.properties.UpdateValuationRequest.prototype.setUpdatedValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.dac.properties.UpdateValuationRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.UpdateValuationRequest} returns this
 */
proto.dac.properties.UpdateValuationRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ValuationFactor updated_factors = 4;
 * @return {!Array<!proto.dac.properties.ValuationFactor>}
 */
proto.dac.properties.UpdateValuationRequest.prototype.getUpdatedFactorsList = function() {
  return /** @type{!Array<!proto.dac.properties.ValuationFactor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.ValuationFactor, 4));
};


/**
 * @param {!Array<!proto.dac.properties.ValuationFactor>} value
 * @return {!proto.dac.properties.UpdateValuationRequest} returns this
*/
proto.dac.properties.UpdateValuationRequest.prototype.setUpdatedFactorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.properties.ValuationFactor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.ValuationFactor}
 */
proto.dac.properties.UpdateValuationRequest.prototype.addUpdatedFactors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.properties.ValuationFactor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.UpdateValuationRequest} returns this
 */
proto.dac.properties.UpdateValuationRequest.prototype.clearUpdatedFactorsList = function() {
  return this.setUpdatedFactorsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.dac.properties.DocumentUploadRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.dac.properties.DocumentUploadRequest.DataCase = {
  DATA_NOT_SET: 0,
  METADATA: 1,
  CHUNK: 2
};

/**
 * @return {proto.dac.properties.DocumentUploadRequest.DataCase}
 */
proto.dac.properties.DocumentUploadRequest.prototype.getDataCase = function() {
  return /** @type {proto.dac.properties.DocumentUploadRequest.DataCase} */(jspb.Message.computeOneofCase(this, proto.dac.properties.DocumentUploadRequest.oneofGroups_[0]));
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
proto.dac.properties.DocumentUploadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.DocumentUploadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.DocumentUploadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentUploadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.dac.properties.DocumentMetadata.toObject(includeInstance, f),
    chunk: msg.getChunk_asB64()
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
 * @return {!proto.dac.properties.DocumentUploadRequest}
 */
proto.dac.properties.DocumentUploadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.DocumentUploadRequest;
  return proto.dac.properties.DocumentUploadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.DocumentUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.DocumentUploadRequest}
 */
proto.dac.properties.DocumentUploadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.DocumentMetadata;
      reader.readMessage(value,proto.dac.properties.DocumentMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
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
proto.dac.properties.DocumentUploadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.DocumentUploadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.DocumentUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentUploadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.properties.DocumentMetadata.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional DocumentMetadata metadata = 1;
 * @return {?proto.dac.properties.DocumentMetadata}
 */
proto.dac.properties.DocumentUploadRequest.prototype.getMetadata = function() {
  return /** @type{?proto.dac.properties.DocumentMetadata} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.DocumentMetadata, 1));
};


/**
 * @param {?proto.dac.properties.DocumentMetadata|undefined} value
 * @return {!proto.dac.properties.DocumentUploadRequest} returns this
*/
proto.dac.properties.DocumentUploadRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.dac.properties.DocumentUploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.DocumentUploadRequest} returns this
 */
proto.dac.properties.DocumentUploadRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.DocumentUploadRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dac.properties.DocumentUploadRequest.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.dac.properties.DocumentUploadRequest.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.dac.properties.DocumentUploadRequest.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dac.properties.DocumentUploadRequest} returns this
 */
proto.dac.properties.DocumentUploadRequest.prototype.setChunk = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.dac.properties.DocumentUploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.DocumentUploadRequest} returns this
 */
proto.dac.properties.DocumentUploadRequest.prototype.clearChunk = function() {
  return jspb.Message.setOneofField(this, 2, proto.dac.properties.DocumentUploadRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.DocumentUploadRequest.prototype.hasChunk = function() {
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
proto.dac.properties.DocumentMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.DocumentMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.DocumentMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    filename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    propertyId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isPublic: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    fileSize: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.dac.properties.DocumentMetadata}
 */
proto.dac.properties.DocumentMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.DocumentMetadata;
  return proto.dac.properties.DocumentMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.DocumentMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.DocumentMetadata}
 */
proto.dac.properties.DocumentMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.DocumentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPublic(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileSize(value);
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
proto.dac.properties.DocumentMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.DocumentMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.DocumentMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilename();
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
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getIsPublic();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getFileSize();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string filename = 1;
 * @return {string}
 */
proto.dac.properties.DocumentMetadata.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.DocumentMetadata} returns this
 */
proto.dac.properties.DocumentMetadata.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DocumentType type = 2;
 * @return {!proto.dac.properties.DocumentType}
 */
proto.dac.properties.DocumentMetadata.prototype.getType = function() {
  return /** @type {!proto.dac.properties.DocumentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.DocumentType} value
 * @return {!proto.dac.properties.DocumentMetadata} returns this
 */
proto.dac.properties.DocumentMetadata.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 property_id = 3;
 * @return {number}
 */
proto.dac.properties.DocumentMetadata.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.DocumentMetadata} returns this
 */
proto.dac.properties.DocumentMetadata.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.dac.properties.DocumentMetadata.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.DocumentMetadata} returns this
 */
proto.dac.properties.DocumentMetadata.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_public = 5;
 * @return {boolean}
 */
proto.dac.properties.DocumentMetadata.prototype.getIsPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.DocumentMetadata} returns this
 */
proto.dac.properties.DocumentMetadata.prototype.setIsPublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int64 file_size = 6;
 * @return {number}
 */
proto.dac.properties.DocumentMetadata.prototype.getFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.DocumentMetadata} returns this
 */
proto.dac.properties.DocumentMetadata.prototype.setFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.dac.properties.DocumentUploadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.DocumentUploadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.DocumentUploadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentUploadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    documentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
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
 * @return {!proto.dac.properties.DocumentUploadResponse}
 */
proto.dac.properties.DocumentUploadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.DocumentUploadResponse;
  return proto.dac.properties.DocumentUploadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.DocumentUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.DocumentUploadResponse}
 */
proto.dac.properties.DocumentUploadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
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
proto.dac.properties.DocumentUploadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.DocumentUploadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.DocumentUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentUploadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentId();
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
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
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
 * optional string document_id = 1;
 * @return {string}
 */
proto.dac.properties.DocumentUploadResponse.prototype.getDocumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.DocumentUploadResponse} returns this
 */
proto.dac.properties.DocumentUploadResponse.prototype.setDocumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.dac.properties.DocumentUploadResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.DocumentUploadResponse} returns this
 */
proto.dac.properties.DocumentUploadResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool success = 3;
 * @return {boolean}
 */
proto.dac.properties.DocumentUploadResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.DocumentUploadResponse} returns this
 */
proto.dac.properties.DocumentUploadResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string error_message = 4;
 * @return {string}
 */
proto.dac.properties.DocumentUploadResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.DocumentUploadResponse} returns this
 */
proto.dac.properties.DocumentUploadResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.DocumentUploadResponse} returns this
 */
proto.dac.properties.DocumentUploadResponse.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.DocumentUploadResponse.prototype.hasErrorMessage = function() {
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
proto.dac.properties.DocumentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.DocumentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.DocumentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    documentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    download: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.dac.properties.DocumentRequest}
 */
proto.dac.properties.DocumentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.DocumentRequest;
  return proto.dac.properties.DocumentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.DocumentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.DocumentRequest}
 */
proto.dac.properties.DocumentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDownload(value);
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
proto.dac.properties.DocumentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.DocumentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.DocumentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDownload();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string document_id = 1;
 * @return {string}
 */
proto.dac.properties.DocumentRequest.prototype.getDocumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.DocumentRequest} returns this
 */
proto.dac.properties.DocumentRequest.prototype.setDocumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool download = 2;
 * @return {boolean}
 */
proto.dac.properties.DocumentRequest.prototype.getDownload = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.DocumentRequest} returns this
 */
proto.dac.properties.DocumentRequest.prototype.setDownload = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.dac.properties.DocumentResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.dac.properties.DocumentResponse.DataCase = {
  DATA_NOT_SET: 0,
  METADATA: 1,
  CHUNK: 2
};

/**
 * @return {proto.dac.properties.DocumentResponse.DataCase}
 */
proto.dac.properties.DocumentResponse.prototype.getDataCase = function() {
  return /** @type {proto.dac.properties.DocumentResponse.DataCase} */(jspb.Message.computeOneofCase(this, proto.dac.properties.DocumentResponse.oneofGroups_[0]));
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
proto.dac.properties.DocumentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.DocumentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.DocumentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.dac.properties.DocumentMetadata.toObject(includeInstance, f),
    chunk: msg.getChunk_asB64()
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
 * @return {!proto.dac.properties.DocumentResponse}
 */
proto.dac.properties.DocumentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.DocumentResponse;
  return proto.dac.properties.DocumentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.DocumentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.DocumentResponse}
 */
proto.dac.properties.DocumentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.DocumentMetadata;
      reader.readMessage(value,proto.dac.properties.DocumentMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
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
proto.dac.properties.DocumentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.DocumentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.DocumentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.properties.DocumentMetadata.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional DocumentMetadata metadata = 1;
 * @return {?proto.dac.properties.DocumentMetadata}
 */
proto.dac.properties.DocumentResponse.prototype.getMetadata = function() {
  return /** @type{?proto.dac.properties.DocumentMetadata} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.DocumentMetadata, 1));
};


/**
 * @param {?proto.dac.properties.DocumentMetadata|undefined} value
 * @return {!proto.dac.properties.DocumentResponse} returns this
*/
proto.dac.properties.DocumentResponse.prototype.setMetadata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.dac.properties.DocumentResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.DocumentResponse} returns this
 */
proto.dac.properties.DocumentResponse.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.DocumentResponse.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dac.properties.DocumentResponse.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.dac.properties.DocumentResponse.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.dac.properties.DocumentResponse.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dac.properties.DocumentResponse} returns this
 */
proto.dac.properties.DocumentResponse.prototype.setChunk = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.dac.properties.DocumentResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.DocumentResponse} returns this
 */
proto.dac.properties.DocumentResponse.prototype.clearChunk = function() {
  return jspb.Message.setOneofField(this, 2, proto.dac.properties.DocumentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.DocumentResponse.prototype.hasChunk = function() {
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
proto.dac.properties.ListDocumentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ListDocumentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ListDocumentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ListDocumentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    publicOnly: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.dac.properties.ListDocumentsRequest}
 */
proto.dac.properties.ListDocumentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ListDocumentsRequest;
  return proto.dac.properties.ListDocumentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ListDocumentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ListDocumentsRequest}
 */
proto.dac.properties.ListDocumentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.DocumentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPublicOnly(value);
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
proto.dac.properties.ListDocumentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ListDocumentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ListDocumentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ListDocumentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.dac.properties.DocumentType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPublicOnly();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.ListDocumentsRequest.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ListDocumentsRequest} returns this
 */
proto.dac.properties.ListDocumentsRequest.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DocumentType type = 2;
 * @return {!proto.dac.properties.DocumentType}
 */
proto.dac.properties.ListDocumentsRequest.prototype.getType = function() {
  return /** @type {!proto.dac.properties.DocumentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.DocumentType} value
 * @return {!proto.dac.properties.ListDocumentsRequest} returns this
 */
proto.dac.properties.ListDocumentsRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.ListDocumentsRequest} returns this
 */
proto.dac.properties.ListDocumentsRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.ListDocumentsRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool public_only = 3;
 * @return {boolean}
 */
proto.dac.properties.ListDocumentsRequest.prototype.getPublicOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.ListDocumentsRequest} returns this
 */
proto.dac.properties.ListDocumentsRequest.prototype.setPublicOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.DocumentListResponse.repeatedFields_ = [1];



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
proto.dac.properties.DocumentListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.DocumentListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.DocumentListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    documentsList: jspb.Message.toObjectList(msg.getDocumentsList(),
    proto.dac.properties.PropertyDocument.toObject, includeInstance)
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
 * @return {!proto.dac.properties.DocumentListResponse}
 */
proto.dac.properties.DocumentListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.DocumentListResponse;
  return proto.dac.properties.DocumentListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.DocumentListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.DocumentListResponse}
 */
proto.dac.properties.DocumentListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.PropertyDocument;
      reader.readMessage(value,proto.dac.properties.PropertyDocument.deserializeBinaryFromReader);
      msg.addDocuments(value);
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
proto.dac.properties.DocumentListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.DocumentListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.DocumentListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DocumentListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.properties.PropertyDocument.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PropertyDocument documents = 1;
 * @return {!Array<!proto.dac.properties.PropertyDocument>}
 */
proto.dac.properties.DocumentListResponse.prototype.getDocumentsList = function() {
  return /** @type{!Array<!proto.dac.properties.PropertyDocument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.PropertyDocument, 1));
};


/**
 * @param {!Array<!proto.dac.properties.PropertyDocument>} value
 * @return {!proto.dac.properties.DocumentListResponse} returns this
*/
proto.dac.properties.DocumentListResponse.prototype.setDocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.properties.PropertyDocument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.PropertyDocument}
 */
proto.dac.properties.DocumentListResponse.prototype.addDocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.properties.PropertyDocument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.DocumentListResponse} returns this
 */
proto.dac.properties.DocumentListResponse.prototype.clearDocumentsList = function() {
  return this.setDocumentsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.dac.properties.MediaUploadRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.dac.properties.MediaUploadRequest.DataCase = {
  DATA_NOT_SET: 0,
  METADATA: 1,
  CHUNK: 2
};

/**
 * @return {proto.dac.properties.MediaUploadRequest.DataCase}
 */
proto.dac.properties.MediaUploadRequest.prototype.getDataCase = function() {
  return /** @type {proto.dac.properties.MediaUploadRequest.DataCase} */(jspb.Message.computeOneofCase(this, proto.dac.properties.MediaUploadRequest.oneofGroups_[0]));
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
proto.dac.properties.MediaUploadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.MediaUploadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.MediaUploadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MediaUploadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.dac.properties.MediaMetadata.toObject(includeInstance, f),
    chunk: msg.getChunk_asB64()
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
 * @return {!proto.dac.properties.MediaUploadRequest}
 */
proto.dac.properties.MediaUploadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.MediaUploadRequest;
  return proto.dac.properties.MediaUploadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.MediaUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.MediaUploadRequest}
 */
proto.dac.properties.MediaUploadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.MediaMetadata;
      reader.readMessage(value,proto.dac.properties.MediaMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
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
proto.dac.properties.MediaUploadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.MediaUploadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.MediaUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MediaUploadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.properties.MediaMetadata.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional MediaMetadata metadata = 1;
 * @return {?proto.dac.properties.MediaMetadata}
 */
proto.dac.properties.MediaUploadRequest.prototype.getMetadata = function() {
  return /** @type{?proto.dac.properties.MediaMetadata} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.MediaMetadata, 1));
};


/**
 * @param {?proto.dac.properties.MediaMetadata|undefined} value
 * @return {!proto.dac.properties.MediaUploadRequest} returns this
*/
proto.dac.properties.MediaUploadRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.dac.properties.MediaUploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.MediaUploadRequest} returns this
 */
proto.dac.properties.MediaUploadRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.MediaUploadRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.dac.properties.MediaUploadRequest.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.dac.properties.MediaUploadRequest.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.dac.properties.MediaUploadRequest.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dac.properties.MediaUploadRequest} returns this
 */
proto.dac.properties.MediaUploadRequest.prototype.setChunk = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.dac.properties.MediaUploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.MediaUploadRequest} returns this
 */
proto.dac.properties.MediaUploadRequest.prototype.clearChunk = function() {
  return jspb.Message.setOneofField(this, 2, proto.dac.properties.MediaUploadRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.MediaUploadRequest.prototype.hasChunk = function() {
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
proto.dac.properties.MediaMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.MediaMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.MediaMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MediaMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    filename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    propertyId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    caption: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orderIndex: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fileSize: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.dac.properties.MediaMetadata}
 */
proto.dac.properties.MediaMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.MediaMetadata;
  return proto.dac.properties.MediaMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.MediaMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.MediaMetadata}
 */
proto.dac.properties.MediaMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.ImageType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrderIndex(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileSize(value);
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
proto.dac.properties.MediaMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.MediaMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.MediaMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MediaMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilename();
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
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCaption();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrderIndex();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getFileSize();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string filename = 1;
 * @return {string}
 */
proto.dac.properties.MediaMetadata.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MediaMetadata} returns this
 */
proto.dac.properties.MediaMetadata.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ImageType type = 2;
 * @return {!proto.dac.properties.ImageType}
 */
proto.dac.properties.MediaMetadata.prototype.getType = function() {
  return /** @type {!proto.dac.properties.ImageType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.ImageType} value
 * @return {!proto.dac.properties.MediaMetadata} returns this
 */
proto.dac.properties.MediaMetadata.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 property_id = 3;
 * @return {number}
 */
proto.dac.properties.MediaMetadata.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MediaMetadata} returns this
 */
proto.dac.properties.MediaMetadata.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string caption = 4;
 * @return {string}
 */
proto.dac.properties.MediaMetadata.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MediaMetadata} returns this
 */
proto.dac.properties.MediaMetadata.prototype.setCaption = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 order_index = 5;
 * @return {number}
 */
proto.dac.properties.MediaMetadata.prototype.getOrderIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MediaMetadata} returns this
 */
proto.dac.properties.MediaMetadata.prototype.setOrderIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 file_size = 6;
 * @return {number}
 */
proto.dac.properties.MediaMetadata.prototype.getFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MediaMetadata} returns this
 */
proto.dac.properties.MediaMetadata.prototype.setFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.dac.properties.MediaUploadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.MediaUploadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.MediaUploadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MediaUploadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    thumbnailUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.dac.properties.MediaUploadResponse}
 */
proto.dac.properties.MediaUploadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.MediaUploadResponse;
  return proto.dac.properties.MediaUploadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.MediaUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.MediaUploadResponse}
 */
proto.dac.properties.MediaUploadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailUrl(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 5:
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
proto.dac.properties.MediaUploadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.MediaUploadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.MediaUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MediaUploadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImageId();
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
  f = message.getThumbnailUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
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
 * optional string image_id = 1;
 * @return {string}
 */
proto.dac.properties.MediaUploadResponse.prototype.getImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MediaUploadResponse} returns this
 */
proto.dac.properties.MediaUploadResponse.prototype.setImageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.dac.properties.MediaUploadResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MediaUploadResponse} returns this
 */
proto.dac.properties.MediaUploadResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string thumbnail_url = 3;
 * @return {string}
 */
proto.dac.properties.MediaUploadResponse.prototype.getThumbnailUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MediaUploadResponse} returns this
 */
proto.dac.properties.MediaUploadResponse.prototype.setThumbnailUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool success = 4;
 * @return {boolean}
 */
proto.dac.properties.MediaUploadResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.properties.MediaUploadResponse} returns this
 */
proto.dac.properties.MediaUploadResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string error_message = 5;
 * @return {string}
 */
proto.dac.properties.MediaUploadResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MediaUploadResponse} returns this
 */
proto.dac.properties.MediaUploadResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.properties.MediaUploadResponse} returns this
 */
proto.dac.properties.MediaUploadResponse.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.MediaUploadResponse.prototype.hasErrorMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.AnalyticsRequest.repeatedFields_ = [4];



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
proto.dac.properties.AnalyticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.AnalyticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.AnalyticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.AnalyticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    metricsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.dac.properties.AnalyticsRequest}
 */
proto.dac.properties.AnalyticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.AnalyticsRequest;
  return proto.dac.properties.AnalyticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.AnalyticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.AnalyticsRequest}
 */
proto.dac.properties.AnalyticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
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
      var values = /** @type {!Array<!proto.dac.properties.AnalyticsMetric>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMetrics(values[i]);
      }
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
proto.dac.properties.AnalyticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.AnalyticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.AnalyticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.AnalyticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getMetricsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
};


/**
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.AnalyticsRequest.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.AnalyticsRequest} returns this
 */
proto.dac.properties.AnalyticsRequest.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.AnalyticsRequest.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.AnalyticsRequest} returns this
*/
proto.dac.properties.AnalyticsRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.AnalyticsRequest} returns this
 */
proto.dac.properties.AnalyticsRequest.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.AnalyticsRequest.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.AnalyticsRequest.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.AnalyticsRequest} returns this
*/
proto.dac.properties.AnalyticsRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.AnalyticsRequest} returns this
 */
proto.dac.properties.AnalyticsRequest.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.AnalyticsRequest.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated AnalyticsMetric metrics = 4;
 * @return {!Array<!proto.dac.properties.AnalyticsMetric>}
 */
proto.dac.properties.AnalyticsRequest.prototype.getMetricsList = function() {
  return /** @type {!Array<!proto.dac.properties.AnalyticsMetric>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.dac.properties.AnalyticsMetric>} value
 * @return {!proto.dac.properties.AnalyticsRequest} returns this
 */
proto.dac.properties.AnalyticsRequest.prototype.setMetricsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.dac.properties.AnalyticsMetric} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.AnalyticsRequest} returns this
 */
proto.dac.properties.AnalyticsRequest.prototype.addMetrics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.AnalyticsRequest} returns this
 */
proto.dac.properties.AnalyticsRequest.prototype.clearMetricsList = function() {
  return this.setMetricsList([]);
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
proto.dac.properties.PropertyAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PropertyAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PropertyAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyAnalytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    views: (f = msg.getViews()) && proto.dac.properties.ViewAnalytics.toObject(includeInstance, f),
    inquiries: (f = msg.getInquiries()) && proto.dac.properties.InquiryAnalytics.toObject(includeInstance, f),
    performance: (f = msg.getPerformance()) && proto.dac.properties.PerformanceMetrics.toObject(includeInstance, f),
    demographics: (f = msg.getDemographics()) && proto.dac.properties.DemographicData.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.PropertyAnalytics}
 */
proto.dac.properties.PropertyAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PropertyAnalytics;
  return proto.dac.properties.PropertyAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PropertyAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PropertyAnalytics}
 */
proto.dac.properties.PropertyAnalytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
      break;
    case 2:
      var value = new proto.dac.properties.ViewAnalytics;
      reader.readMessage(value,proto.dac.properties.ViewAnalytics.deserializeBinaryFromReader);
      msg.setViews(value);
      break;
    case 3:
      var value = new proto.dac.properties.InquiryAnalytics;
      reader.readMessage(value,proto.dac.properties.InquiryAnalytics.deserializeBinaryFromReader);
      msg.setInquiries(value);
      break;
    case 4:
      var value = new proto.dac.properties.PerformanceMetrics;
      reader.readMessage(value,proto.dac.properties.PerformanceMetrics.deserializeBinaryFromReader);
      msg.setPerformance(value);
      break;
    case 5:
      var value = new proto.dac.properties.DemographicData;
      reader.readMessage(value,proto.dac.properties.DemographicData.deserializeBinaryFromReader);
      msg.setDemographics(value);
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
proto.dac.properties.PropertyAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PropertyAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PropertyAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PropertyAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getViews();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.properties.ViewAnalytics.serializeBinaryToWriter
    );
  }
  f = message.getInquiries();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dac.properties.InquiryAnalytics.serializeBinaryToWriter
    );
  }
  f = message.getPerformance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dac.properties.PerformanceMetrics.serializeBinaryToWriter
    );
  }
  f = message.getDemographics();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.dac.properties.DemographicData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.PropertyAnalytics.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PropertyAnalytics} returns this
 */
proto.dac.properties.PropertyAnalytics.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ViewAnalytics views = 2;
 * @return {?proto.dac.properties.ViewAnalytics}
 */
proto.dac.properties.PropertyAnalytics.prototype.getViews = function() {
  return /** @type{?proto.dac.properties.ViewAnalytics} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.ViewAnalytics, 2));
};


/**
 * @param {?proto.dac.properties.ViewAnalytics|undefined} value
 * @return {!proto.dac.properties.PropertyAnalytics} returns this
*/
proto.dac.properties.PropertyAnalytics.prototype.setViews = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertyAnalytics} returns this
 */
proto.dac.properties.PropertyAnalytics.prototype.clearViews = function() {
  return this.setViews(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyAnalytics.prototype.hasViews = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InquiryAnalytics inquiries = 3;
 * @return {?proto.dac.properties.InquiryAnalytics}
 */
proto.dac.properties.PropertyAnalytics.prototype.getInquiries = function() {
  return /** @type{?proto.dac.properties.InquiryAnalytics} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.InquiryAnalytics, 3));
};


/**
 * @param {?proto.dac.properties.InquiryAnalytics|undefined} value
 * @return {!proto.dac.properties.PropertyAnalytics} returns this
*/
proto.dac.properties.PropertyAnalytics.prototype.setInquiries = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertyAnalytics} returns this
 */
proto.dac.properties.PropertyAnalytics.prototype.clearInquiries = function() {
  return this.setInquiries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyAnalytics.prototype.hasInquiries = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PerformanceMetrics performance = 4;
 * @return {?proto.dac.properties.PerformanceMetrics}
 */
proto.dac.properties.PropertyAnalytics.prototype.getPerformance = function() {
  return /** @type{?proto.dac.properties.PerformanceMetrics} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PerformanceMetrics, 4));
};


/**
 * @param {?proto.dac.properties.PerformanceMetrics|undefined} value
 * @return {!proto.dac.properties.PropertyAnalytics} returns this
*/
proto.dac.properties.PropertyAnalytics.prototype.setPerformance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertyAnalytics} returns this
 */
proto.dac.properties.PropertyAnalytics.prototype.clearPerformance = function() {
  return this.setPerformance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyAnalytics.prototype.hasPerformance = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DemographicData demographics = 5;
 * @return {?proto.dac.properties.DemographicData}
 */
proto.dac.properties.PropertyAnalytics.prototype.getDemographics = function() {
  return /** @type{?proto.dac.properties.DemographicData} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.DemographicData, 5));
};


/**
 * @param {?proto.dac.properties.DemographicData|undefined} value
 * @return {!proto.dac.properties.PropertyAnalytics} returns this
*/
proto.dac.properties.PropertyAnalytics.prototype.setDemographics = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PropertyAnalytics} returns this
 */
proto.dac.properties.PropertyAnalytics.prototype.clearDemographics = function() {
  return this.setDemographics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PropertyAnalytics.prototype.hasDemographics = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.ViewAnalytics.repeatedFields_ = [4,5];



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
proto.dac.properties.ViewAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.ViewAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.ViewAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ViewAnalytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalViews: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uniqueViews: jspb.Message.getFieldWithDefault(msg, 2, 0),
    averageViewDuration: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    dailyBreakdownList: jspb.Message.toObjectList(msg.getDailyBreakdownList(),
    proto.dac.properties.DailyViews.toObject, includeInstance),
    topReferringSourcesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.dac.properties.ViewAnalytics}
 */
proto.dac.properties.ViewAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.ViewAnalytics;
  return proto.dac.properties.ViewAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.ViewAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.ViewAnalytics}
 */
proto.dac.properties.ViewAnalytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalViews(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUniqueViews(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageViewDuration(value);
      break;
    case 4:
      var value = new proto.dac.properties.DailyViews;
      reader.readMessage(value,proto.dac.properties.DailyViews.deserializeBinaryFromReader);
      msg.addDailyBreakdown(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTopReferringSources(value);
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
proto.dac.properties.ViewAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.ViewAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.ViewAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.ViewAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalViews();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUniqueViews();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAverageViewDuration();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getDailyBreakdownList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.properties.DailyViews.serializeBinaryToWriter
    );
  }
  f = message.getTopReferringSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional int32 total_views = 1;
 * @return {number}
 */
proto.dac.properties.ViewAnalytics.prototype.getTotalViews = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ViewAnalytics} returns this
 */
proto.dac.properties.ViewAnalytics.prototype.setTotalViews = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 unique_views = 2;
 * @return {number}
 */
proto.dac.properties.ViewAnalytics.prototype.getUniqueViews = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ViewAnalytics} returns this
 */
proto.dac.properties.ViewAnalytics.prototype.setUniqueViews = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double average_view_duration = 3;
 * @return {number}
 */
proto.dac.properties.ViewAnalytics.prototype.getAverageViewDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.ViewAnalytics} returns this
 */
proto.dac.properties.ViewAnalytics.prototype.setAverageViewDuration = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated DailyViews daily_breakdown = 4;
 * @return {!Array<!proto.dac.properties.DailyViews>}
 */
proto.dac.properties.ViewAnalytics.prototype.getDailyBreakdownList = function() {
  return /** @type{!Array<!proto.dac.properties.DailyViews>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.DailyViews, 4));
};


/**
 * @param {!Array<!proto.dac.properties.DailyViews>} value
 * @return {!proto.dac.properties.ViewAnalytics} returns this
*/
proto.dac.properties.ViewAnalytics.prototype.setDailyBreakdownList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.properties.DailyViews=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.DailyViews}
 */
proto.dac.properties.ViewAnalytics.prototype.addDailyBreakdown = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.properties.DailyViews, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.ViewAnalytics} returns this
 */
proto.dac.properties.ViewAnalytics.prototype.clearDailyBreakdownList = function() {
  return this.setDailyBreakdownList([]);
};


/**
 * repeated string top_referring_sources = 5;
 * @return {!Array<string>}
 */
proto.dac.properties.ViewAnalytics.prototype.getTopReferringSourcesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.ViewAnalytics} returns this
 */
proto.dac.properties.ViewAnalytics.prototype.setTopReferringSourcesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.ViewAnalytics} returns this
 */
proto.dac.properties.ViewAnalytics.prototype.addTopReferringSources = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.ViewAnalytics} returns this
 */
proto.dac.properties.ViewAnalytics.prototype.clearTopReferringSourcesList = function() {
  return this.setTopReferringSourcesList([]);
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
proto.dac.properties.DailyViews.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.DailyViews.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.DailyViews} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DailyViews.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    views: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uniqueVisitors: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.dac.properties.DailyViews}
 */
proto.dac.properties.DailyViews.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.DailyViews;
  return proto.dac.properties.DailyViews.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.DailyViews} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.DailyViews}
 */
proto.dac.properties.DailyViews.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setViews(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUniqueVisitors(value);
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
proto.dac.properties.DailyViews.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.DailyViews.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.DailyViews} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DailyViews.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getViews();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUniqueVisitors();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.DailyViews.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.DailyViews} returns this
*/
proto.dac.properties.DailyViews.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.DailyViews} returns this
 */
proto.dac.properties.DailyViews.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.DailyViews.prototype.hasDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 views = 2;
 * @return {number}
 */
proto.dac.properties.DailyViews.prototype.getViews = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.DailyViews} returns this
 */
proto.dac.properties.DailyViews.prototype.setViews = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 unique_visitors = 3;
 * @return {number}
 */
proto.dac.properties.DailyViews.prototype.getUniqueVisitors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.DailyViews} returns this
 */
proto.dac.properties.DailyViews.prototype.setUniqueVisitors = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.dac.properties.InquiryAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.InquiryAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.InquiryAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.InquiryAnalytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalInquiries: jspb.Message.getFieldWithDefault(msg, 1, 0),
    phoneInquiries: jspb.Message.getFieldWithDefault(msg, 2, 0),
    emailInquiries: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tourRequests: jspb.Message.getFieldWithDefault(msg, 4, 0),
    conversionRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.dac.properties.InquiryAnalytics}
 */
proto.dac.properties.InquiryAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.InquiryAnalytics;
  return proto.dac.properties.InquiryAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.InquiryAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.InquiryAnalytics}
 */
proto.dac.properties.InquiryAnalytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalInquiries(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPhoneInquiries(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEmailInquiries(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTourRequests(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConversionRate(value);
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
proto.dac.properties.InquiryAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.InquiryAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.InquiryAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.InquiryAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalInquiries();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPhoneInquiries();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEmailInquiries();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTourRequests();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getConversionRate();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional int32 total_inquiries = 1;
 * @return {number}
 */
proto.dac.properties.InquiryAnalytics.prototype.getTotalInquiries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.InquiryAnalytics} returns this
 */
proto.dac.properties.InquiryAnalytics.prototype.setTotalInquiries = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 phone_inquiries = 2;
 * @return {number}
 */
proto.dac.properties.InquiryAnalytics.prototype.getPhoneInquiries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.InquiryAnalytics} returns this
 */
proto.dac.properties.InquiryAnalytics.prototype.setPhoneInquiries = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 email_inquiries = 3;
 * @return {number}
 */
proto.dac.properties.InquiryAnalytics.prototype.getEmailInquiries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.InquiryAnalytics} returns this
 */
proto.dac.properties.InquiryAnalytics.prototype.setEmailInquiries = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 tour_requests = 4;
 * @return {number}
 */
proto.dac.properties.InquiryAnalytics.prototype.getTourRequests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.InquiryAnalytics} returns this
 */
proto.dac.properties.InquiryAnalytics.prototype.setTourRequests = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double conversion_rate = 5;
 * @return {number}
 */
proto.dac.properties.InquiryAnalytics.prototype.getConversionRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.InquiryAnalytics} returns this
 */
proto.dac.properties.InquiryAnalytics.prototype.setConversionRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.PerformanceMetrics.repeatedFields_ = [5];



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
proto.dac.properties.PerformanceMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PerformanceMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PerformanceMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PerformanceMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    listingScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    daysOnMarket: jspb.Message.getFieldWithDefault(msg, 2, 0),
    priceCompetitiveness: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    marketActivity: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    improvementSuggestionsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.dac.properties.PerformanceMetrics}
 */
proto.dac.properties.PerformanceMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PerformanceMetrics;
  return proto.dac.properties.PerformanceMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PerformanceMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PerformanceMetrics}
 */
proto.dac.properties.PerformanceMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setListingScore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDaysOnMarket(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceCompetitiveness(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketActivity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addImprovementSuggestions(value);
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
proto.dac.properties.PerformanceMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PerformanceMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PerformanceMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PerformanceMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListingScore();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getDaysOnMarket();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPriceCompetitiveness();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getMarketActivity();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getImprovementSuggestionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional double listing_score = 1;
 * @return {number}
 */
proto.dac.properties.PerformanceMetrics.prototype.getListingScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PerformanceMetrics} returns this
 */
proto.dac.properties.PerformanceMetrics.prototype.setListingScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional int32 days_on_market = 2;
 * @return {number}
 */
proto.dac.properties.PerformanceMetrics.prototype.getDaysOnMarket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PerformanceMetrics} returns this
 */
proto.dac.properties.PerformanceMetrics.prototype.setDaysOnMarket = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double price_competitiveness = 3;
 * @return {number}
 */
proto.dac.properties.PerformanceMetrics.prototype.getPriceCompetitiveness = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PerformanceMetrics} returns this
 */
proto.dac.properties.PerformanceMetrics.prototype.setPriceCompetitiveness = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double market_activity = 4;
 * @return {number}
 */
proto.dac.properties.PerformanceMetrics.prototype.getMarketActivity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PerformanceMetrics} returns this
 */
proto.dac.properties.PerformanceMetrics.prototype.setMarketActivity = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated string improvement_suggestions = 5;
 * @return {!Array<string>}
 */
proto.dac.properties.PerformanceMetrics.prototype.getImprovementSuggestionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.PerformanceMetrics} returns this
 */
proto.dac.properties.PerformanceMetrics.prototype.setImprovementSuggestionsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.PerformanceMetrics} returns this
 */
proto.dac.properties.PerformanceMetrics.prototype.addImprovementSuggestions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.PerformanceMetrics} returns this
 */
proto.dac.properties.PerformanceMetrics.prototype.clearImprovementSuggestionsList = function() {
  return this.setImprovementSuggestionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.DemographicData.repeatedFields_ = [1,2,3];



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
proto.dac.properties.DemographicData.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.DemographicData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.DemographicData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DemographicData.toObject = function(includeInstance, msg) {
  var f, obj = {
    ageGroupsList: jspb.Message.toObjectList(msg.getAgeGroupsList(),
    proto.dac.properties.AgeGroup.toObject, includeInstance),
    topLocationsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    deviceTypesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.dac.properties.DemographicData}
 */
proto.dac.properties.DemographicData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.DemographicData;
  return proto.dac.properties.DemographicData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.DemographicData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.DemographicData}
 */
proto.dac.properties.DemographicData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.AgeGroup;
      reader.readMessage(value,proto.dac.properties.AgeGroup.deserializeBinaryFromReader);
      msg.addAgeGroups(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTopLocations(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeviceTypes(value);
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
proto.dac.properties.DemographicData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.DemographicData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.DemographicData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.DemographicData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgeGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.properties.AgeGroup.serializeBinaryToWriter
    );
  }
  f = message.getTopLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getDeviceTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated AgeGroup age_groups = 1;
 * @return {!Array<!proto.dac.properties.AgeGroup>}
 */
proto.dac.properties.DemographicData.prototype.getAgeGroupsList = function() {
  return /** @type{!Array<!proto.dac.properties.AgeGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.AgeGroup, 1));
};


/**
 * @param {!Array<!proto.dac.properties.AgeGroup>} value
 * @return {!proto.dac.properties.DemographicData} returns this
*/
proto.dac.properties.DemographicData.prototype.setAgeGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.properties.AgeGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.AgeGroup}
 */
proto.dac.properties.DemographicData.prototype.addAgeGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.properties.AgeGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.DemographicData} returns this
 */
proto.dac.properties.DemographicData.prototype.clearAgeGroupsList = function() {
  return this.setAgeGroupsList([]);
};


/**
 * repeated string top_locations = 2;
 * @return {!Array<string>}
 */
proto.dac.properties.DemographicData.prototype.getTopLocationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.DemographicData} returns this
 */
proto.dac.properties.DemographicData.prototype.setTopLocationsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.DemographicData} returns this
 */
proto.dac.properties.DemographicData.prototype.addTopLocations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.DemographicData} returns this
 */
proto.dac.properties.DemographicData.prototype.clearTopLocationsList = function() {
  return this.setTopLocationsList([]);
};


/**
 * repeated string device_types = 3;
 * @return {!Array<string>}
 */
proto.dac.properties.DemographicData.prototype.getDeviceTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.properties.DemographicData} returns this
 */
proto.dac.properties.DemographicData.prototype.setDeviceTypesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.DemographicData} returns this
 */
proto.dac.properties.DemographicData.prototype.addDeviceTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.DemographicData} returns this
 */
proto.dac.properties.DemographicData.prototype.clearDeviceTypesList = function() {
  return this.setDeviceTypesList([]);
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
proto.dac.properties.AgeGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.AgeGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.AgeGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.AgeGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    ageRange: jspb.Message.getFieldWithDefault(msg, 1, ""),
    percentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.dac.properties.AgeGroup}
 */
proto.dac.properties.AgeGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.AgeGroup;
  return proto.dac.properties.AgeGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.AgeGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.AgeGroup}
 */
proto.dac.properties.AgeGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgeRange(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPercentage(value);
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
proto.dac.properties.AgeGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.AgeGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.AgeGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.AgeGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgeRange();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPercentage();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string age_range = 1;
 * @return {string}
 */
proto.dac.properties.AgeGroup.prototype.getAgeRange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.AgeGroup} returns this
 */
proto.dac.properties.AgeGroup.prototype.setAgeRange = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double percentage = 2;
 * @return {number}
 */
proto.dac.properties.AgeGroup.prototype.getPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.AgeGroup} returns this
 */
proto.dac.properties.AgeGroup.prototype.setPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.dac.properties.MarketTrendsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.MarketTrendsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.MarketTrendsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MarketTrendsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propertyType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.MarketTrendsRequest}
 */
proto.dac.properties.MarketTrendsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.MarketTrendsRequest;
  return proto.dac.properties.MarketTrendsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.MarketTrendsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.MarketTrendsRequest}
 */
proto.dac.properties.MarketTrendsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.properties.PropertyType} */ (reader.readEnum());
      msg.setPropertyType(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDate(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndDate(value);
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
proto.dac.properties.MarketTrendsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.MarketTrendsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.MarketTrendsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MarketTrendsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropertyType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStartDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string location = 1;
 * @return {string}
 */
proto.dac.properties.MarketTrendsRequest.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MarketTrendsRequest} returns this
 */
proto.dac.properties.MarketTrendsRequest.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PropertyType property_type = 2;
 * @return {!proto.dac.properties.PropertyType}
 */
proto.dac.properties.MarketTrendsRequest.prototype.getPropertyType = function() {
  return /** @type {!proto.dac.properties.PropertyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.properties.PropertyType} value
 * @return {!proto.dac.properties.MarketTrendsRequest} returns this
 */
proto.dac.properties.MarketTrendsRequest.prototype.setPropertyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.MarketTrendsRequest.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.MarketTrendsRequest} returns this
*/
proto.dac.properties.MarketTrendsRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.MarketTrendsRequest} returns this
 */
proto.dac.properties.MarketTrendsRequest.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.MarketTrendsRequest.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.MarketTrendsRequest.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.MarketTrendsRequest} returns this
*/
proto.dac.properties.MarketTrendsRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.MarketTrendsRequest} returns this
 */
proto.dac.properties.MarketTrendsRequest.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.MarketTrendsRequest.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.MarketTrendsResponse.repeatedFields_ = [4];



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
proto.dac.properties.MarketTrendsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.MarketTrendsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.MarketTrendsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MarketTrendsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trends: (f = msg.getTrends()) && proto.dac.properties.MarketTrendData.toObject(includeInstance, f),
    priceAnalysis: (f = msg.getPriceAnalysis()) && proto.dac.properties.PriceAnalysis.toObject(includeInstance, f),
    supplyDemand: (f = msg.getSupplyDemand()) && proto.dac.properties.SupplyDemandAnalysis.toObject(includeInstance, f),
    insightsList: jspb.Message.toObjectList(msg.getInsightsList(),
    proto.dac.properties.MarketInsight.toObject, includeInstance)
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
 * @return {!proto.dac.properties.MarketTrendsResponse}
 */
proto.dac.properties.MarketTrendsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.MarketTrendsResponse;
  return proto.dac.properties.MarketTrendsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.MarketTrendsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.MarketTrendsResponse}
 */
proto.dac.properties.MarketTrendsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.MarketTrendData;
      reader.readMessage(value,proto.dac.properties.MarketTrendData.deserializeBinaryFromReader);
      msg.setTrends(value);
      break;
    case 2:
      var value = new proto.dac.properties.PriceAnalysis;
      reader.readMessage(value,proto.dac.properties.PriceAnalysis.deserializeBinaryFromReader);
      msg.setPriceAnalysis(value);
      break;
    case 3:
      var value = new proto.dac.properties.SupplyDemandAnalysis;
      reader.readMessage(value,proto.dac.properties.SupplyDemandAnalysis.deserializeBinaryFromReader);
      msg.setSupplyDemand(value);
      break;
    case 4:
      var value = new proto.dac.properties.MarketInsight;
      reader.readMessage(value,proto.dac.properties.MarketInsight.deserializeBinaryFromReader);
      msg.addInsights(value);
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
proto.dac.properties.MarketTrendsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.MarketTrendsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.MarketTrendsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MarketTrendsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrends();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.properties.MarketTrendData.serializeBinaryToWriter
    );
  }
  f = message.getPriceAnalysis();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.properties.PriceAnalysis.serializeBinaryToWriter
    );
  }
  f = message.getSupplyDemand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dac.properties.SupplyDemandAnalysis.serializeBinaryToWriter
    );
  }
  f = message.getInsightsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.properties.MarketInsight.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketTrendData trends = 1;
 * @return {?proto.dac.properties.MarketTrendData}
 */
proto.dac.properties.MarketTrendsResponse.prototype.getTrends = function() {
  return /** @type{?proto.dac.properties.MarketTrendData} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.MarketTrendData, 1));
};


/**
 * @param {?proto.dac.properties.MarketTrendData|undefined} value
 * @return {!proto.dac.properties.MarketTrendsResponse} returns this
*/
proto.dac.properties.MarketTrendsResponse.prototype.setTrends = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.MarketTrendsResponse} returns this
 */
proto.dac.properties.MarketTrendsResponse.prototype.clearTrends = function() {
  return this.setTrends(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.MarketTrendsResponse.prototype.hasTrends = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PriceAnalysis price_analysis = 2;
 * @return {?proto.dac.properties.PriceAnalysis}
 */
proto.dac.properties.MarketTrendsResponse.prototype.getPriceAnalysis = function() {
  return /** @type{?proto.dac.properties.PriceAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.PriceAnalysis, 2));
};


/**
 * @param {?proto.dac.properties.PriceAnalysis|undefined} value
 * @return {!proto.dac.properties.MarketTrendsResponse} returns this
*/
proto.dac.properties.MarketTrendsResponse.prototype.setPriceAnalysis = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.MarketTrendsResponse} returns this
 */
proto.dac.properties.MarketTrendsResponse.prototype.clearPriceAnalysis = function() {
  return this.setPriceAnalysis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.MarketTrendsResponse.prototype.hasPriceAnalysis = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SupplyDemandAnalysis supply_demand = 3;
 * @return {?proto.dac.properties.SupplyDemandAnalysis}
 */
proto.dac.properties.MarketTrendsResponse.prototype.getSupplyDemand = function() {
  return /** @type{?proto.dac.properties.SupplyDemandAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.SupplyDemandAnalysis, 3));
};


/**
 * @param {?proto.dac.properties.SupplyDemandAnalysis|undefined} value
 * @return {!proto.dac.properties.MarketTrendsResponse} returns this
*/
proto.dac.properties.MarketTrendsResponse.prototype.setSupplyDemand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.MarketTrendsResponse} returns this
 */
proto.dac.properties.MarketTrendsResponse.prototype.clearSupplyDemand = function() {
  return this.setSupplyDemand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.MarketTrendsResponse.prototype.hasSupplyDemand = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated MarketInsight insights = 4;
 * @return {!Array<!proto.dac.properties.MarketInsight>}
 */
proto.dac.properties.MarketTrendsResponse.prototype.getInsightsList = function() {
  return /** @type{!Array<!proto.dac.properties.MarketInsight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.MarketInsight, 4));
};


/**
 * @param {!Array<!proto.dac.properties.MarketInsight>} value
 * @return {!proto.dac.properties.MarketTrendsResponse} returns this
*/
proto.dac.properties.MarketTrendsResponse.prototype.setInsightsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.properties.MarketInsight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.MarketInsight}
 */
proto.dac.properties.MarketTrendsResponse.prototype.addInsights = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.properties.MarketInsight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.MarketTrendsResponse} returns this
 */
proto.dac.properties.MarketTrendsResponse.prototype.clearInsightsList = function() {
  return this.setInsightsList([]);
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
proto.dac.properties.MarketTrendData.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.MarketTrendData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.MarketTrendData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MarketTrendData.toObject = function(includeInstance, msg) {
  var f, obj = {
    priceAppreciation: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    salesVolumeChange: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    inventoryChange: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    timeOnMarketChange: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.properties.MarketTrendData}
 */
proto.dac.properties.MarketTrendData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.MarketTrendData;
  return proto.dac.properties.MarketTrendData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.MarketTrendData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.MarketTrendData}
 */
proto.dac.properties.MarketTrendData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceAppreciation(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSalesVolumeChange(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInventoryChange(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeOnMarketChange(value);
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
proto.dac.properties.MarketTrendData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.MarketTrendData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.MarketTrendData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MarketTrendData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPriceAppreciation();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getSalesVolumeChange();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getInventoryChange();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTimeOnMarketChange();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double price_appreciation = 1;
 * @return {number}
 */
proto.dac.properties.MarketTrendData.prototype.getPriceAppreciation = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MarketTrendData} returns this
 */
proto.dac.properties.MarketTrendData.prototype.setPriceAppreciation = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double sales_volume_change = 2;
 * @return {number}
 */
proto.dac.properties.MarketTrendData.prototype.getSalesVolumeChange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MarketTrendData} returns this
 */
proto.dac.properties.MarketTrendData.prototype.setSalesVolumeChange = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double inventory_change = 3;
 * @return {number}
 */
proto.dac.properties.MarketTrendData.prototype.getInventoryChange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MarketTrendData} returns this
 */
proto.dac.properties.MarketTrendData.prototype.setInventoryChange = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double time_on_market_change = 4;
 * @return {number}
 */
proto.dac.properties.MarketTrendData.prototype.getTimeOnMarketChange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MarketTrendData} returns this
 */
proto.dac.properties.MarketTrendData.prototype.setTimeOnMarketChange = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.PriceAnalysis.repeatedFields_ = [4];



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
proto.dac.properties.PriceAnalysis.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PriceAnalysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PriceAnalysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PriceAnalysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    medianPrice: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pricePerSqft: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priceVolatility: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    priceTrendsList: jspb.Message.toObjectList(msg.getPriceTrendsList(),
    proto.dac.properties.PriceTrend.toObject, includeInstance)
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
 * @return {!proto.dac.properties.PriceAnalysis}
 */
proto.dac.properties.PriceAnalysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PriceAnalysis;
  return proto.dac.properties.PriceAnalysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PriceAnalysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PriceAnalysis}
 */
proto.dac.properties.PriceAnalysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMedianPrice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPricePerSqft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceVolatility(value);
      break;
    case 4:
      var value = new proto.dac.properties.PriceTrend;
      reader.readMessage(value,proto.dac.properties.PriceTrend.deserializeBinaryFromReader);
      msg.addPriceTrends(value);
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
proto.dac.properties.PriceAnalysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PriceAnalysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PriceAnalysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PriceAnalysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMedianPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPricePerSqft();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPriceVolatility();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPriceTrendsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.properties.PriceTrend.serializeBinaryToWriter
    );
  }
};


/**
 * optional string median_price = 1;
 * @return {string}
 */
proto.dac.properties.PriceAnalysis.prototype.getMedianPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PriceAnalysis} returns this
 */
proto.dac.properties.PriceAnalysis.prototype.setMedianPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string price_per_sqft = 2;
 * @return {string}
 */
proto.dac.properties.PriceAnalysis.prototype.getPricePerSqft = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PriceAnalysis} returns this
 */
proto.dac.properties.PriceAnalysis.prototype.setPricePerSqft = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double price_volatility = 3;
 * @return {number}
 */
proto.dac.properties.PriceAnalysis.prototype.getPriceVolatility = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PriceAnalysis} returns this
 */
proto.dac.properties.PriceAnalysis.prototype.setPriceVolatility = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated PriceTrend price_trends = 4;
 * @return {!Array<!proto.dac.properties.PriceTrend>}
 */
proto.dac.properties.PriceAnalysis.prototype.getPriceTrendsList = function() {
  return /** @type{!Array<!proto.dac.properties.PriceTrend>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.PriceTrend, 4));
};


/**
 * @param {!Array<!proto.dac.properties.PriceTrend>} value
 * @return {!proto.dac.properties.PriceAnalysis} returns this
*/
proto.dac.properties.PriceAnalysis.prototype.setPriceTrendsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.properties.PriceTrend=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.PriceTrend}
 */
proto.dac.properties.PriceAnalysis.prototype.addPriceTrends = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.properties.PriceTrend, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.PriceAnalysis} returns this
 */
proto.dac.properties.PriceAnalysis.prototype.clearPriceTrendsList = function() {
  return this.setPriceTrendsList([]);
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
proto.dac.properties.PriceTrend.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.PriceTrend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.PriceTrend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PriceTrend.toObject = function(includeInstance, msg) {
  var f, obj = {
    month: (f = msg.getMonth()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    medianPrice: jspb.Message.getFieldWithDefault(msg, 2, ""),
    monthOverMonthChange: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.dac.properties.PriceTrend}
 */
proto.dac.properties.PriceTrend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.PriceTrend;
  return proto.dac.properties.PriceTrend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.PriceTrend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.PriceTrend}
 */
proto.dac.properties.PriceTrend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMonth(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMedianPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMonthOverMonthChange(value);
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
proto.dac.properties.PriceTrend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.PriceTrend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.PriceTrend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.PriceTrend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMonth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMedianPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMonthOverMonthChange();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp month = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.PriceTrend.prototype.getMonth = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.PriceTrend} returns this
*/
proto.dac.properties.PriceTrend.prototype.setMonth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.PriceTrend} returns this
 */
proto.dac.properties.PriceTrend.prototype.clearMonth = function() {
  return this.setMonth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.PriceTrend.prototype.hasMonth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string median_price = 2;
 * @return {string}
 */
proto.dac.properties.PriceTrend.prototype.getMedianPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.PriceTrend} returns this
 */
proto.dac.properties.PriceTrend.prototype.setMedianPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double month_over_month_change = 3;
 * @return {number}
 */
proto.dac.properties.PriceTrend.prototype.getMonthOverMonthChange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.PriceTrend} returns this
 */
proto.dac.properties.PriceTrend.prototype.setMonthOverMonthChange = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.dac.properties.SupplyDemandAnalysis.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.SupplyDemandAnalysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.SupplyDemandAnalysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.SupplyDemandAnalysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    newListings: jspb.Message.getFieldWithDefault(msg, 1, 0),
    soldProperties: jspb.Message.getFieldWithDefault(msg, 2, 0),
    monthsOfSupply: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    absorptionRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.properties.SupplyDemandAnalysis}
 */
proto.dac.properties.SupplyDemandAnalysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.SupplyDemandAnalysis;
  return proto.dac.properties.SupplyDemandAnalysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.SupplyDemandAnalysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.SupplyDemandAnalysis}
 */
proto.dac.properties.SupplyDemandAnalysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNewListings(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSoldProperties(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMonthsOfSupply(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAbsorptionRate(value);
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
proto.dac.properties.SupplyDemandAnalysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.SupplyDemandAnalysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.SupplyDemandAnalysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.SupplyDemandAnalysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewListings();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSoldProperties();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMonthsOfSupply();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getAbsorptionRate();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional int32 new_listings = 1;
 * @return {number}
 */
proto.dac.properties.SupplyDemandAnalysis.prototype.getNewListings = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.SupplyDemandAnalysis} returns this
 */
proto.dac.properties.SupplyDemandAnalysis.prototype.setNewListings = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 sold_properties = 2;
 * @return {number}
 */
proto.dac.properties.SupplyDemandAnalysis.prototype.getSoldProperties = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.SupplyDemandAnalysis} returns this
 */
proto.dac.properties.SupplyDemandAnalysis.prototype.setSoldProperties = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double months_of_supply = 3;
 * @return {number}
 */
proto.dac.properties.SupplyDemandAnalysis.prototype.getMonthsOfSupply = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.SupplyDemandAnalysis} returns this
 */
proto.dac.properties.SupplyDemandAnalysis.prototype.setMonthsOfSupply = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double absorption_rate = 4;
 * @return {number}
 */
proto.dac.properties.SupplyDemandAnalysis.prototype.getAbsorptionRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.SupplyDemandAnalysis} returns this
 */
proto.dac.properties.SupplyDemandAnalysis.prototype.setAbsorptionRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
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
proto.dac.properties.MarketInsight.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.MarketInsight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.MarketInsight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MarketInsight.toObject = function(includeInstance, msg) {
  var f, obj = {
    category: jspb.Message.getFieldWithDefault(msg, 1, ""),
    insight: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.properties.MarketInsight}
 */
proto.dac.properties.MarketInsight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.MarketInsight;
  return proto.dac.properties.MarketInsight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.MarketInsight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.MarketInsight}
 */
proto.dac.properties.MarketInsight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsight(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.properties.InsightType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConfidence(value);
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
proto.dac.properties.MarketInsight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.MarketInsight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.MarketInsight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MarketInsight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInsight();
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
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional string category = 1;
 * @return {string}
 */
proto.dac.properties.MarketInsight.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MarketInsight} returns this
 */
proto.dac.properties.MarketInsight.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string insight = 2;
 * @return {string}
 */
proto.dac.properties.MarketInsight.prototype.getInsight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MarketInsight} returns this
 */
proto.dac.properties.MarketInsight.prototype.setInsight = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional InsightType type = 3;
 * @return {!proto.dac.properties.InsightType}
 */
proto.dac.properties.MarketInsight.prototype.getType = function() {
  return /** @type {!proto.dac.properties.InsightType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.properties.InsightType} value
 * @return {!proto.dac.properties.MarketInsight} returns this
 */
proto.dac.properties.MarketInsight.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional double confidence = 4;
 * @return {number}
 */
proto.dac.properties.MarketInsight.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MarketInsight} returns this
 */
proto.dac.properties.MarketInsight.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
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
proto.dac.properties.RentalAnalyticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.RentalAnalyticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.RentalAnalyticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.RentalAnalyticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.RentalAnalyticsRequest}
 */
proto.dac.properties.RentalAnalyticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.RentalAnalyticsRequest;
  return proto.dac.properties.RentalAnalyticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.RentalAnalyticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.RentalAnalyticsRequest}
 */
proto.dac.properties.RentalAnalyticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyId(value);
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
proto.dac.properties.RentalAnalyticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.RentalAnalyticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.RentalAnalyticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.RentalAnalyticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f !== 0) {
    writer.writeInt32(
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
};


/**
 * optional int32 property_id = 1;
 * @return {number}
 */
proto.dac.properties.RentalAnalyticsRequest.prototype.getPropertyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.RentalAnalyticsRequest} returns this
 */
proto.dac.properties.RentalAnalyticsRequest.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.RentalAnalyticsRequest.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.RentalAnalyticsRequest} returns this
*/
proto.dac.properties.RentalAnalyticsRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.RentalAnalyticsRequest} returns this
 */
proto.dac.properties.RentalAnalyticsRequest.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.RentalAnalyticsRequest.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.properties.RentalAnalyticsRequest.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.properties.RentalAnalyticsRequest} returns this
*/
proto.dac.properties.RentalAnalyticsRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.RentalAnalyticsRequest} returns this
 */
proto.dac.properties.RentalAnalyticsRequest.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.RentalAnalyticsRequest.prototype.hasEndDate = function() {
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
proto.dac.properties.RentalAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.RentalAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.RentalAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.RentalAnalytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    performance: (f = msg.getPerformance()) && proto.dac.properties.RentalPerformance.toObject(includeInstance, f),
    tenants: (f = msg.getTenants()) && proto.dac.properties.TenantAnalytics.toObject(includeInstance, f),
    financials: (f = msg.getFinancials()) && proto.dac.properties.FinancialMetrics.toObject(includeInstance, f),
    maintenance: (f = msg.getMaintenance()) && proto.dac.properties.MaintenanceAnalytics.toObject(includeInstance, f)
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
 * @return {!proto.dac.properties.RentalAnalytics}
 */
proto.dac.properties.RentalAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.RentalAnalytics;
  return proto.dac.properties.RentalAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.RentalAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.RentalAnalytics}
 */
proto.dac.properties.RentalAnalytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.properties.RentalPerformance;
      reader.readMessage(value,proto.dac.properties.RentalPerformance.deserializeBinaryFromReader);
      msg.setPerformance(value);
      break;
    case 2:
      var value = new proto.dac.properties.TenantAnalytics;
      reader.readMessage(value,proto.dac.properties.TenantAnalytics.deserializeBinaryFromReader);
      msg.setTenants(value);
      break;
    case 3:
      var value = new proto.dac.properties.FinancialMetrics;
      reader.readMessage(value,proto.dac.properties.FinancialMetrics.deserializeBinaryFromReader);
      msg.setFinancials(value);
      break;
    case 4:
      var value = new proto.dac.properties.MaintenanceAnalytics;
      reader.readMessage(value,proto.dac.properties.MaintenanceAnalytics.deserializeBinaryFromReader);
      msg.setMaintenance(value);
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
proto.dac.properties.RentalAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.RentalAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.RentalAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.RentalAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPerformance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.properties.RentalPerformance.serializeBinaryToWriter
    );
  }
  f = message.getTenants();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.properties.TenantAnalytics.serializeBinaryToWriter
    );
  }
  f = message.getFinancials();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dac.properties.FinancialMetrics.serializeBinaryToWriter
    );
  }
  f = message.getMaintenance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dac.properties.MaintenanceAnalytics.serializeBinaryToWriter
    );
  }
};


/**
 * optional RentalPerformance performance = 1;
 * @return {?proto.dac.properties.RentalPerformance}
 */
proto.dac.properties.RentalAnalytics.prototype.getPerformance = function() {
  return /** @type{?proto.dac.properties.RentalPerformance} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.RentalPerformance, 1));
};


/**
 * @param {?proto.dac.properties.RentalPerformance|undefined} value
 * @return {!proto.dac.properties.RentalAnalytics} returns this
*/
proto.dac.properties.RentalAnalytics.prototype.setPerformance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.RentalAnalytics} returns this
 */
proto.dac.properties.RentalAnalytics.prototype.clearPerformance = function() {
  return this.setPerformance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.RentalAnalytics.prototype.hasPerformance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TenantAnalytics tenants = 2;
 * @return {?proto.dac.properties.TenantAnalytics}
 */
proto.dac.properties.RentalAnalytics.prototype.getTenants = function() {
  return /** @type{?proto.dac.properties.TenantAnalytics} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.TenantAnalytics, 2));
};


/**
 * @param {?proto.dac.properties.TenantAnalytics|undefined} value
 * @return {!proto.dac.properties.RentalAnalytics} returns this
*/
proto.dac.properties.RentalAnalytics.prototype.setTenants = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.RentalAnalytics} returns this
 */
proto.dac.properties.RentalAnalytics.prototype.clearTenants = function() {
  return this.setTenants(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.RentalAnalytics.prototype.hasTenants = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FinancialMetrics financials = 3;
 * @return {?proto.dac.properties.FinancialMetrics}
 */
proto.dac.properties.RentalAnalytics.prototype.getFinancials = function() {
  return /** @type{?proto.dac.properties.FinancialMetrics} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.FinancialMetrics, 3));
};


/**
 * @param {?proto.dac.properties.FinancialMetrics|undefined} value
 * @return {!proto.dac.properties.RentalAnalytics} returns this
*/
proto.dac.properties.RentalAnalytics.prototype.setFinancials = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.RentalAnalytics} returns this
 */
proto.dac.properties.RentalAnalytics.prototype.clearFinancials = function() {
  return this.setFinancials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.RentalAnalytics.prototype.hasFinancials = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MaintenanceAnalytics maintenance = 4;
 * @return {?proto.dac.properties.MaintenanceAnalytics}
 */
proto.dac.properties.RentalAnalytics.prototype.getMaintenance = function() {
  return /** @type{?proto.dac.properties.MaintenanceAnalytics} */ (
    jspb.Message.getWrapperField(this, proto.dac.properties.MaintenanceAnalytics, 4));
};


/**
 * @param {?proto.dac.properties.MaintenanceAnalytics|undefined} value
 * @return {!proto.dac.properties.RentalAnalytics} returns this
*/
proto.dac.properties.RentalAnalytics.prototype.setMaintenance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.properties.RentalAnalytics} returns this
 */
proto.dac.properties.RentalAnalytics.prototype.clearMaintenance = function() {
  return this.setMaintenance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.properties.RentalAnalytics.prototype.hasMaintenance = function() {
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
proto.dac.properties.RentalPerformance.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.RentalPerformance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.RentalPerformance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.RentalPerformance.toObject = function(includeInstance, msg) {
  var f, obj = {
    occupancyRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    averageRentalPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    tenantTurnoverRate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rentalYield: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.properties.RentalPerformance}
 */
proto.dac.properties.RentalPerformance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.RentalPerformance;
  return proto.dac.properties.RentalPerformance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.RentalPerformance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.RentalPerformance}
 */
proto.dac.properties.RentalPerformance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOccupancyRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageRentalPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTenantTurnoverRate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRentalYield(value);
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
proto.dac.properties.RentalPerformance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.RentalPerformance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.RentalPerformance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.RentalPerformance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOccupancyRate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getAverageRentalPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getTenantTurnoverRate();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRentalYield();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double occupancy_rate = 1;
 * @return {number}
 */
proto.dac.properties.RentalPerformance.prototype.getOccupancyRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.RentalPerformance} returns this
 */
proto.dac.properties.RentalPerformance.prototype.setOccupancyRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double average_rental_price = 2;
 * @return {number}
 */
proto.dac.properties.RentalPerformance.prototype.getAverageRentalPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.RentalPerformance} returns this
 */
proto.dac.properties.RentalPerformance.prototype.setAverageRentalPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int32 tenant_turnover_rate = 3;
 * @return {number}
 */
proto.dac.properties.RentalPerformance.prototype.getTenantTurnoverRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.RentalPerformance} returns this
 */
proto.dac.properties.RentalPerformance.prototype.setTenantTurnoverRate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double rental_yield = 4;
 * @return {number}
 */
proto.dac.properties.RentalPerformance.prototype.getRentalYield = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.RentalPerformance} returns this
 */
proto.dac.properties.RentalPerformance.prototype.setRentalYield = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
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
proto.dac.properties.TenantAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.TenantAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.TenantAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TenantAnalytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentTenants: jspb.Message.getFieldWithDefault(msg, 1, 0),
    averageLeaseLength: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    tenantSatisfaction: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    latePayments: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.dac.properties.TenantAnalytics}
 */
proto.dac.properties.TenantAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.TenantAnalytics;
  return proto.dac.properties.TenantAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.TenantAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.TenantAnalytics}
 */
proto.dac.properties.TenantAnalytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentTenants(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageLeaseLength(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTenantSatisfaction(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLatePayments(value);
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
proto.dac.properties.TenantAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.TenantAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.TenantAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.TenantAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentTenants();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAverageLeaseLength();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getTenantSatisfaction();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getLatePayments();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 current_tenants = 1;
 * @return {number}
 */
proto.dac.properties.TenantAnalytics.prototype.getCurrentTenants = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TenantAnalytics} returns this
 */
proto.dac.properties.TenantAnalytics.prototype.setCurrentTenants = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double average_lease_length = 2;
 * @return {number}
 */
proto.dac.properties.TenantAnalytics.prototype.getAverageLeaseLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TenantAnalytics} returns this
 */
proto.dac.properties.TenantAnalytics.prototype.setAverageLeaseLength = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double tenant_satisfaction = 3;
 * @return {number}
 */
proto.dac.properties.TenantAnalytics.prototype.getTenantSatisfaction = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TenantAnalytics} returns this
 */
proto.dac.properties.TenantAnalytics.prototype.setTenantSatisfaction = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 late_payments = 4;
 * @return {number}
 */
proto.dac.properties.TenantAnalytics.prototype.getLatePayments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.TenantAnalytics} returns this
 */
proto.dac.properties.TenantAnalytics.prototype.setLatePayments = function(value) {
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
proto.dac.properties.FinancialMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.FinancialMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.FinancialMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.FinancialMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalRentalIncome: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operatingExpenses: jspb.Message.getFieldWithDefault(msg, 2, ""),
    netOperatingIncome: jspb.Message.getFieldWithDefault(msg, 3, ""),
    capRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    cashFlow: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.dac.properties.FinancialMetrics}
 */
proto.dac.properties.FinancialMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.FinancialMetrics;
  return proto.dac.properties.FinancialMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.FinancialMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.FinancialMetrics}
 */
proto.dac.properties.FinancialMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalRentalIncome(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperatingExpenses(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetOperatingIncome(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCapRate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCashFlow(value);
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
proto.dac.properties.FinancialMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.FinancialMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.FinancialMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.FinancialMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalRentalIncome();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperatingExpenses();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNetOperatingIncome();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCapRate();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getCashFlow();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string total_rental_income = 1;
 * @return {string}
 */
proto.dac.properties.FinancialMetrics.prototype.getTotalRentalIncome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.FinancialMetrics} returns this
 */
proto.dac.properties.FinancialMetrics.prototype.setTotalRentalIncome = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string operating_expenses = 2;
 * @return {string}
 */
proto.dac.properties.FinancialMetrics.prototype.getOperatingExpenses = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.FinancialMetrics} returns this
 */
proto.dac.properties.FinancialMetrics.prototype.setOperatingExpenses = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string net_operating_income = 3;
 * @return {string}
 */
proto.dac.properties.FinancialMetrics.prototype.getNetOperatingIncome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.FinancialMetrics} returns this
 */
proto.dac.properties.FinancialMetrics.prototype.setNetOperatingIncome = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double cap_rate = 4;
 * @return {number}
 */
proto.dac.properties.FinancialMetrics.prototype.getCapRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.FinancialMetrics} returns this
 */
proto.dac.properties.FinancialMetrics.prototype.setCapRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string cash_flow = 5;
 * @return {string}
 */
proto.dac.properties.FinancialMetrics.prototype.getCashFlow = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.FinancialMetrics} returns this
 */
proto.dac.properties.FinancialMetrics.prototype.setCashFlow = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.properties.MaintenanceAnalytics.repeatedFields_ = [4];



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
proto.dac.properties.MaintenanceAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.MaintenanceAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.MaintenanceAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MaintenanceAnalytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    maintenanceRequests: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maintenanceCosts: jspb.Message.getFieldWithDefault(msg, 2, ""),
    averageResponseTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    topIssuesList: jspb.Message.toObjectList(msg.getTopIssuesList(),
    proto.dac.properties.MaintenanceCategory.toObject, includeInstance)
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
 * @return {!proto.dac.properties.MaintenanceAnalytics}
 */
proto.dac.properties.MaintenanceAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.MaintenanceAnalytics;
  return proto.dac.properties.MaintenanceAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.MaintenanceAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.MaintenanceAnalytics}
 */
proto.dac.properties.MaintenanceAnalytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaintenanceRequests(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintenanceCosts(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageResponseTime(value);
      break;
    case 4:
      var value = new proto.dac.properties.MaintenanceCategory;
      reader.readMessage(value,proto.dac.properties.MaintenanceCategory.deserializeBinaryFromReader);
      msg.addTopIssues(value);
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
proto.dac.properties.MaintenanceAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.MaintenanceAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.MaintenanceAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MaintenanceAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaintenanceRequests();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMaintenanceCosts();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAverageResponseTime();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTopIssuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.properties.MaintenanceCategory.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 maintenance_requests = 1;
 * @return {number}
 */
proto.dac.properties.MaintenanceAnalytics.prototype.getMaintenanceRequests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MaintenanceAnalytics} returns this
 */
proto.dac.properties.MaintenanceAnalytics.prototype.setMaintenanceRequests = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string maintenance_costs = 2;
 * @return {string}
 */
proto.dac.properties.MaintenanceAnalytics.prototype.getMaintenanceCosts = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MaintenanceAnalytics} returns this
 */
proto.dac.properties.MaintenanceAnalytics.prototype.setMaintenanceCosts = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double average_response_time = 3;
 * @return {number}
 */
proto.dac.properties.MaintenanceAnalytics.prototype.getAverageResponseTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MaintenanceAnalytics} returns this
 */
proto.dac.properties.MaintenanceAnalytics.prototype.setAverageResponseTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated MaintenanceCategory top_issues = 4;
 * @return {!Array<!proto.dac.properties.MaintenanceCategory>}
 */
proto.dac.properties.MaintenanceAnalytics.prototype.getTopIssuesList = function() {
  return /** @type{!Array<!proto.dac.properties.MaintenanceCategory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.properties.MaintenanceCategory, 4));
};


/**
 * @param {!Array<!proto.dac.properties.MaintenanceCategory>} value
 * @return {!proto.dac.properties.MaintenanceAnalytics} returns this
*/
proto.dac.properties.MaintenanceAnalytics.prototype.setTopIssuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.properties.MaintenanceCategory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.properties.MaintenanceCategory}
 */
proto.dac.properties.MaintenanceAnalytics.prototype.addTopIssues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.properties.MaintenanceCategory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.properties.MaintenanceAnalytics} returns this
 */
proto.dac.properties.MaintenanceAnalytics.prototype.clearTopIssuesList = function() {
  return this.setTopIssuesList([]);
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
proto.dac.properties.MaintenanceCategory.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.properties.MaintenanceCategory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.properties.MaintenanceCategory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MaintenanceCategory.toObject = function(includeInstance, msg) {
  var f, obj = {
    category: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalCost: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.dac.properties.MaintenanceCategory}
 */
proto.dac.properties.MaintenanceCategory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.properties.MaintenanceCategory;
  return proto.dac.properties.MaintenanceCategory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.properties.MaintenanceCategory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.properties.MaintenanceCategory}
 */
proto.dac.properties.MaintenanceCategory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestCount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalCost(value);
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
proto.dac.properties.MaintenanceCategory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.properties.MaintenanceCategory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.properties.MaintenanceCategory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.properties.MaintenanceCategory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTotalCost();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string category = 1;
 * @return {string}
 */
proto.dac.properties.MaintenanceCategory.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MaintenanceCategory} returns this
 */
proto.dac.properties.MaintenanceCategory.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 request_count = 2;
 * @return {number}
 */
proto.dac.properties.MaintenanceCategory.prototype.getRequestCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.properties.MaintenanceCategory} returns this
 */
proto.dac.properties.MaintenanceCategory.prototype.setRequestCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string total_cost = 3;
 * @return {string}
 */
proto.dac.properties.MaintenanceCategory.prototype.getTotalCost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.properties.MaintenanceCategory} returns this
 */
proto.dac.properties.MaintenanceCategory.prototype.setTotalCost = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.dac.properties.PropertyType = {
  PROPERTY_TYPE_UNSPECIFIED: 0,
  PROPERTY_TYPE_SINGLE_FAMILY: 1,
  PROPERTY_TYPE_CONDO: 2,
  PROPERTY_TYPE_TOWNHOUSE: 3,
  PROPERTY_TYPE_MULTI_FAMILY: 4,
  PROPERTY_TYPE_COMMERCIAL: 5,
  PROPERTY_TYPE_LAND: 6,
  PROPERTY_TYPE_MIXED_USE: 7
};

/**
 * @enum {number}
 */
proto.dac.properties.PropertyStatus = {
  PROPERTY_STATUS_UNSPECIFIED: 0,
  PROPERTY_STATUS_DRAFT: 1,
  PROPERTY_STATUS_ACTIVE: 2,
  PROPERTY_STATUS_PENDING: 3,
  PROPERTY_STATUS_SOLD: 4,
  PROPERTY_STATUS_WITHDRAWN: 5,
  PROPERTY_STATUS_EXPIRED: 6
};

/**
 * @enum {number}
 */
proto.dac.properties.PropertyCondition = {
  PROPERTY_CONDITION_UNSPECIFIED: 0,
  PROPERTY_CONDITION_EXCELLENT: 1,
  PROPERTY_CONDITION_GOOD: 2,
  PROPERTY_CONDITION_FAIR: 3,
  PROPERTY_CONDITION_POOR: 4,
  PROPERTY_CONDITION_RENOVATED: 5
};

/**
 * @enum {number}
 */
proto.dac.properties.PriceChangeReason = {
  PRICE_CHANGE_REASON_UNSPECIFIED: 0,
  PRICE_CHANGE_REASON_MARKET_ADJUSTMENT: 1,
  PRICE_CHANGE_REASON_APPRAISAL: 2,
  PRICE_CHANGE_REASON_SELLER_REQUEST: 3,
  PRICE_CHANGE_REASON_COMPARABLE_SALES: 4,
  PRICE_CHANGE_REASON_CONDITION_CHANGE: 5
};

/**
 * @enum {number}
 */
proto.dac.properties.ImageType = {
  IMAGE_TYPE_UNSPECIFIED: 0,
  IMAGE_TYPE_EXTERIOR: 1,
  IMAGE_TYPE_INTERIOR: 2,
  IMAGE_TYPE_KITCHEN: 3,
  IMAGE_TYPE_BATHROOM: 4,
  IMAGE_TYPE_BEDROOM: 5,
  IMAGE_TYPE_LIVING_ROOM: 6,
  IMAGE_TYPE_AERIAL: 7,
  IMAGE_TYPE_FLOOR_PLAN: 8
};

/**
 * @enum {number}
 */
proto.dac.properties.DocumentType = {
  DOCUMENT_TYPE_UNSPECIFIED: 0,
  DOCUMENT_TYPE_DEED: 1,
  DOCUMENT_TYPE_TITLE: 2,
  DOCUMENT_TYPE_INSPECTION: 3,
  DOCUMENT_TYPE_APPRAISAL: 4,
  DOCUMENT_TYPE_DISCLOSURE: 5,
  DOCUMENT_TYPE_CONTRACT: 6,
  DOCUMENT_TYPE_INSURANCE: 7,
  DOCUMENT_TYPE_FINANCIAL: 8
};

/**
 * @enum {number}
 */
proto.dac.properties.TokenizationStatus = {
  TOKENIZATION_STATUS_UNSPECIFIED: 0,
  TOKENIZATION_STATUS_PENDING: 1,
  TOKENIZATION_STATUS_IN_PROGRESS: 2,
  TOKENIZATION_STATUS_COMPLETED: 3,
  TOKENIZATION_STATUS_FAILED: 4,
  TOKENIZATION_STATUS_CANCELLED: 5
};

/**
 * @enum {number}
 */
proto.dac.properties.TransactionType = {
  TRANSACTION_TYPE_UNSPECIFIED: 0,
  TRANSACTION_TYPE_PURCHASE: 1,
  TRANSACTION_TYPE_SALE: 2,
  TRANSACTION_TYPE_LEASE: 3,
  TRANSACTION_TYPE_TOKEN_PURCHASE: 4,
  TRANSACTION_TYPE_TOKEN_SALE: 5
};

/**
 * @enum {number}
 */
proto.dac.properties.TransactionState = {
  TRANSACTION_STATE_UNSPECIFIED: 0,
  TRANSACTION_STATE_INITIATED: 1,
  TRANSACTION_STATE_UNDER_CONTRACT: 2,
  TRANSACTION_STATE_IN_ESCROW: 3,
  TRANSACTION_STATE_PENDING_CLOSING: 4,
  TRANSACTION_STATE_COMPLETED: 5,
  TRANSACTION_STATE_CANCELLED: 6,
  TRANSACTION_STATE_FAILED: 7
};

/**
 * @enum {number}
 */
proto.dac.properties.StepStatus = {
  STEP_STATUS_UNSPECIFIED: 0,
  STEP_STATUS_PENDING: 1,
  STEP_STATUS_IN_PROGRESS: 2,
  STEP_STATUS_COMPLETED: 3,
  STEP_STATUS_FAILED: 4,
  STEP_STATUS_SKIPPED: 5
};

/**
 * @enum {number}
 */
proto.dac.properties.SearchSort = {
  SEARCH_SORT_UNSPECIFIED: 0,
  SEARCH_SORT_RELEVANCE: 1,
  SEARCH_SORT_PRICE_ASC: 2,
  SEARCH_SORT_PRICE_DESC: 3,
  SEARCH_SORT_DATE_ASC: 4,
  SEARCH_SORT_DATE_DESC: 5,
  SEARCH_SORT_SIZE_ASC: 6,
  SEARCH_SORT_SIZE_DESC: 7
};

/**
 * @enum {number}
 */
proto.dac.properties.ValuationMethod = {
  VALUATION_METHOD_UNSPECIFIED: 0,
  VALUATION_METHOD_COMPARATIVE: 1,
  VALUATION_METHOD_INCOME: 2,
  VALUATION_METHOD_COST: 3,
  VALUATION_METHOD_AI_HYBRID: 4
};

/**
 * @enum {number}
 */
proto.dac.properties.ValuationStatus = {
  VALUATION_STATUS_UNSPECIFIED: 0,
  VALUATION_STATUS_PENDING: 1,
  VALUATION_STATUS_IN_PROGRESS: 2,
  VALUATION_STATUS_COMPLETED: 3,
  VALUATION_STATUS_FAILED: 4
};

/**
 * @enum {number}
 */
proto.dac.properties.FactorDirection = {
  FACTOR_DIRECTION_UNSPECIFIED: 0,
  FACTOR_DIRECTION_POSITIVE: 1,
  FACTOR_DIRECTION_NEGATIVE: 2,
  FACTOR_DIRECTION_NEUTRAL: 3
};

/**
 * @enum {number}
 */
proto.dac.properties.AnalyticsMetric = {
  ANALYTICS_METRIC_UNSPECIFIED: 0,
  ANALYTICS_METRIC_VIEWS: 1,
  ANALYTICS_METRIC_INQUIRIES: 2,
  ANALYTICS_METRIC_PERFORMANCE: 3,
  ANALYTICS_METRIC_DEMOGRAPHICS: 4
};

/**
 * @enum {number}
 */
proto.dac.properties.InsightType = {
  INSIGHT_TYPE_UNSPECIFIED: 0,
  INSIGHT_TYPE_OPPORTUNITY: 1,
  INSIGHT_TYPE_RISK: 2,
  INSIGHT_TYPE_TREND: 3,
  INSIGHT_TYPE_RECOMMENDATION: 4
};

goog.object.extend(exports, proto.dac.properties);
