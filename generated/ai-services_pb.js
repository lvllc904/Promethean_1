// source: ai-services.proto
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
goog.exportSymbol('proto.dac.ai.AnalysisStatus', null, global);
goog.exportSymbol('proto.dac.ai.ComparableProperty', null, global);
goog.exportSymbol('proto.dac.ai.ComplianceCheck', null, global);
goog.exportSymbol('proto.dac.ai.ComplianceRequest', null, global);
goog.exportSymbol('proto.dac.ai.ComplianceRequirement', null, global);
goog.exportSymbol('proto.dac.ai.ComplianceResponse', null, global);
goog.exportSymbol('proto.dac.ai.ComplianceStatus', null, global);
goog.exportSymbol('proto.dac.ai.ConfigParameter', null, global);
goog.exportSymbol('proto.dac.ai.EmotionScore', null, global);
goog.exportSymbol('proto.dac.ai.FactorType', null, global);
goog.exportSymbol('proto.dac.ai.GeneratedProposal', null, global);
goog.exportSymbol('proto.dac.ai.GenerationStatus', null, global);
goog.exportSymbol('proto.dac.ai.HealthStatus', null, global);
goog.exportSymbol('proto.dac.ai.ImpactAssessment', null, global);
goog.exportSymbol('proto.dac.ai.ImpactLevel', null, global);
goog.exportSymbol('proto.dac.ai.InventoryAnalysis', null, global);
goog.exportSymbol('proto.dac.ai.LegalAnalysisResponse', null, global);
goog.exportSymbol('proto.dac.ai.LegalAnalysisResult', null, global);
goog.exportSymbol('proto.dac.ai.LegalDocumentRequest', null, global);
goog.exportSymbol('proto.dac.ai.LegalIssue', null, global);
goog.exportSymbol('proto.dac.ai.LocationData', null, global);
goog.exportSymbol('proto.dac.ai.MarketAnalysisRequest', null, global);
goog.exportSymbol('proto.dac.ai.MarketAnalysisResponse', null, global);
goog.exportSymbol('proto.dac.ai.MarketAnalysisResult', null, global);
goog.exportSymbol('proto.dac.ai.MarketConditions', null, global);
goog.exportSymbol('proto.dac.ai.MarketTrends', null, global);
goog.exportSymbol('proto.dac.ai.ModelConfigRequest', null, global);
goog.exportSymbol('proto.dac.ai.ModelConfigResponse', null, global);
goog.exportSymbol('proto.dac.ai.ModelHealthResponse', null, global);
goog.exportSymbol('proto.dac.ai.ModelStatus', null, global);
goog.exportSymbol('proto.dac.ai.PriceAnalysis', null, global);
goog.exportSymbol('proto.dac.ai.PriceSegment', null, global);
goog.exportSymbol('proto.dac.ai.ProcessingStatsResponse', null, global);
goog.exportSymbol('proto.dac.ai.PropertyData', null, global);
goog.exportSymbol('proto.dac.ai.PropertyDescriptionRequest', null, global);
goog.exportSymbol('proto.dac.ai.PropertyDescriptionResponse', null, global);
goog.exportSymbol('proto.dac.ai.PropertyValuationRequest', null, global);
goog.exportSymbol('proto.dac.ai.PropertyValuationResponse', null, global);
goog.exportSymbol('proto.dac.ai.ProposalAnalysisRequest', null, global);
goog.exportSymbol('proto.dac.ai.ProposalAnalysisResponse', null, global);
goog.exportSymbol('proto.dac.ai.ProposalAnalysisResult', null, global);
goog.exportSymbol('proto.dac.ai.ProposalGenerationRequest', null, global);
goog.exportSymbol('proto.dac.ai.ProposalGenerationResponse', null, global);
goog.exportSymbol('proto.dac.ai.ReviewAnalysisResponse', null, global);
goog.exportSymbol('proto.dac.ai.ReviewAnalysisResult', null, global);
goog.exportSymbol('proto.dac.ai.ReviewBatchRequest', null, global);
goog.exportSymbol('proto.dac.ai.ReviewData', null, global);
goog.exportSymbol('proto.dac.ai.ReviewSentimentDetail', null, global);
goog.exportSymbol('proto.dac.ai.ReviewSentimentRequest', null, global);
goog.exportSymbol('proto.dac.ai.ReviewSentimentResponse', null, global);
goog.exportSymbol('proto.dac.ai.ReviewSummaryRequest', null, global);
goog.exportSymbol('proto.dac.ai.ReviewSummaryResponse', null, global);
goog.exportSymbol('proto.dac.ai.RiskAssessment', null, global);
goog.exportSymbol('proto.dac.ai.RiskLevel', null, global);
goog.exportSymbol('proto.dac.ai.SentimentAnalysis', null, global);
goog.exportSymbol('proto.dac.ai.SentimentSummary', null, global);
goog.exportSymbol('proto.dac.ai.ServiceStats', null, global);
goog.exportSymbol('proto.dac.ai.SmartContractRequest', null, global);
goog.exportSymbol('proto.dac.ai.SmartContractResponse', null, global);
goog.exportSymbol('proto.dac.ai.SmartContractResult', null, global);
goog.exportSymbol('proto.dac.ai.SystemHealth', null, global);
goog.exportSymbol('proto.dac.ai.ValuationFactor', null, global);
goog.exportSymbol('proto.dac.ai.ValuationMethod', null, global);
goog.exportSymbol('proto.dac.ai.ValuationResult', null, global);
goog.exportSymbol('proto.dac.ai.ValuationStatus', null, global);
goog.exportSymbol('proto.dac.ai.ValueRange', null, global);
goog.exportSymbol('proto.dac.ai.VotingCluster', null, global);
goog.exportSymbol('proto.dac.ai.VotingPatternAnalysis', null, global);
goog.exportSymbol('proto.dac.ai.VotingPatternRequest', null, global);
goog.exportSymbol('proto.dac.ai.VotingPatternResponse', null, global);
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
proto.dac.ai.PropertyValuationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.PropertyValuationRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.PropertyValuationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.PropertyValuationRequest.displayName = 'proto.dac.ai.PropertyValuationRequest';
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
proto.dac.ai.PropertyData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.PropertyData.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.PropertyData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.PropertyData.displayName = 'proto.dac.ai.PropertyData';
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
proto.dac.ai.LocationData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.LocationData.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.LocationData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.LocationData.displayName = 'proto.dac.ai.LocationData';
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
proto.dac.ai.MarketConditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.MarketConditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.MarketConditions.displayName = 'proto.dac.ai.MarketConditions';
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
proto.dac.ai.PropertyValuationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.PropertyValuationResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.PropertyValuationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.PropertyValuationResponse.displayName = 'proto.dac.ai.PropertyValuationResponse';
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
proto.dac.ai.ValuationResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ValuationResult.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ValuationResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ValuationResult.displayName = 'proto.dac.ai.ValuationResult';
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
proto.dac.ai.ValueRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.ValueRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ValueRange.displayName = 'proto.dac.ai.ValueRange';
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
proto.dac.ai.ComparableProperty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ComparableProperty.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ComparableProperty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ComparableProperty.displayName = 'proto.dac.ai.ComparableProperty';
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
proto.dac.ai.ValuationFactor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.ValuationFactor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ValuationFactor.displayName = 'proto.dac.ai.ValuationFactor';
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
proto.dac.ai.PropertyDescriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.PropertyDescriptionRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.PropertyDescriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.PropertyDescriptionRequest.displayName = 'proto.dac.ai.PropertyDescriptionRequest';
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
proto.dac.ai.PropertyDescriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.PropertyDescriptionResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.PropertyDescriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.PropertyDescriptionResponse.displayName = 'proto.dac.ai.PropertyDescriptionResponse';
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
proto.dac.ai.MarketAnalysisRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.MarketAnalysisRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.MarketAnalysisRequest.displayName = 'proto.dac.ai.MarketAnalysisRequest';
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
proto.dac.ai.MarketAnalysisResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.MarketAnalysisResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.MarketAnalysisResponse.displayName = 'proto.dac.ai.MarketAnalysisResponse';
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
proto.dac.ai.MarketAnalysisResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.MarketAnalysisResult.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.MarketAnalysisResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.MarketAnalysisResult.displayName = 'proto.dac.ai.MarketAnalysisResult';
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
proto.dac.ai.MarketTrends = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.MarketTrends, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.MarketTrends.displayName = 'proto.dac.ai.MarketTrends';
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
proto.dac.ai.PriceAnalysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.PriceAnalysis.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.PriceAnalysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.PriceAnalysis.displayName = 'proto.dac.ai.PriceAnalysis';
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
proto.dac.ai.PriceSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.PriceSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.PriceSegment.displayName = 'proto.dac.ai.PriceSegment';
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
proto.dac.ai.InventoryAnalysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.InventoryAnalysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.InventoryAnalysis.displayName = 'proto.dac.ai.InventoryAnalysis';
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
proto.dac.ai.ProposalAnalysisRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ProposalAnalysisRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ProposalAnalysisRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ProposalAnalysisRequest.displayName = 'proto.dac.ai.ProposalAnalysisRequest';
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
proto.dac.ai.ProposalAnalysisResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ProposalAnalysisResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ProposalAnalysisResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ProposalAnalysisResponse.displayName = 'proto.dac.ai.ProposalAnalysisResponse';
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
proto.dac.ai.ProposalAnalysisResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ProposalAnalysisResult.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ProposalAnalysisResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ProposalAnalysisResult.displayName = 'proto.dac.ai.ProposalAnalysisResult';
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
proto.dac.ai.RiskAssessment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.RiskAssessment.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.RiskAssessment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.RiskAssessment.displayName = 'proto.dac.ai.RiskAssessment';
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
proto.dac.ai.ImpactAssessment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ImpactAssessment.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ImpactAssessment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ImpactAssessment.displayName = 'proto.dac.ai.ImpactAssessment';
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
proto.dac.ai.ProposalGenerationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ProposalGenerationRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ProposalGenerationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ProposalGenerationRequest.displayName = 'proto.dac.ai.ProposalGenerationRequest';
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
proto.dac.ai.ProposalGenerationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.ProposalGenerationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ProposalGenerationResponse.displayName = 'proto.dac.ai.ProposalGenerationResponse';
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
proto.dac.ai.GeneratedProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.GeneratedProposal.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.GeneratedProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.GeneratedProposal.displayName = 'proto.dac.ai.GeneratedProposal';
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
proto.dac.ai.VotingPatternRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.VotingPatternRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.VotingPatternRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.VotingPatternRequest.displayName = 'proto.dac.ai.VotingPatternRequest';
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
proto.dac.ai.VotingPatternResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.VotingPatternResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.VotingPatternResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.VotingPatternResponse.displayName = 'proto.dac.ai.VotingPatternResponse';
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
proto.dac.ai.VotingPatternAnalysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.VotingPatternAnalysis.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.VotingPatternAnalysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.VotingPatternAnalysis.displayName = 'proto.dac.ai.VotingPatternAnalysis';
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
proto.dac.ai.VotingCluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.VotingCluster.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.VotingCluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.VotingCluster.displayName = 'proto.dac.ai.VotingCluster';
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
proto.dac.ai.ReviewBatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ReviewBatchRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ReviewBatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ReviewBatchRequest.displayName = 'proto.dac.ai.ReviewBatchRequest';
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
proto.dac.ai.ReviewData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ReviewData.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ReviewData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ReviewData.displayName = 'proto.dac.ai.ReviewData';
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
proto.dac.ai.ReviewAnalysisResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ReviewAnalysisResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ReviewAnalysisResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ReviewAnalysisResponse.displayName = 'proto.dac.ai.ReviewAnalysisResponse';
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
proto.dac.ai.ReviewAnalysisResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ReviewAnalysisResult.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ReviewAnalysisResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ReviewAnalysisResult.displayName = 'proto.dac.ai.ReviewAnalysisResult';
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
proto.dac.ai.SentimentAnalysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.SentimentAnalysis.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.SentimentAnalysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.SentimentAnalysis.displayName = 'proto.dac.ai.SentimentAnalysis';
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
proto.dac.ai.EmotionScore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.EmotionScore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.EmotionScore.displayName = 'proto.dac.ai.EmotionScore';
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
proto.dac.ai.ReviewSentimentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ReviewSentimentRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ReviewSentimentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ReviewSentimentRequest.displayName = 'proto.dac.ai.ReviewSentimentRequest';
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
proto.dac.ai.ReviewSentimentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ReviewSentimentResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ReviewSentimentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ReviewSentimentResponse.displayName = 'proto.dac.ai.ReviewSentimentResponse';
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
proto.dac.ai.SentimentSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.SentimentSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.SentimentSummary.displayName = 'proto.dac.ai.SentimentSummary';
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
proto.dac.ai.ReviewSentimentDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.ReviewSentimentDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ReviewSentimentDetail.displayName = 'proto.dac.ai.ReviewSentimentDetail';
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
proto.dac.ai.ReviewSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ReviewSummaryRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ReviewSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ReviewSummaryRequest.displayName = 'proto.dac.ai.ReviewSummaryRequest';
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
proto.dac.ai.ReviewSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ReviewSummaryResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ReviewSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ReviewSummaryResponse.displayName = 'proto.dac.ai.ReviewSummaryResponse';
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
proto.dac.ai.LegalDocumentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.LegalDocumentRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.LegalDocumentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.LegalDocumentRequest.displayName = 'proto.dac.ai.LegalDocumentRequest';
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
proto.dac.ai.LegalAnalysisResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.LegalAnalysisResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.LegalAnalysisResponse.displayName = 'proto.dac.ai.LegalAnalysisResponse';
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
proto.dac.ai.LegalAnalysisResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.LegalAnalysisResult.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.LegalAnalysisResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.LegalAnalysisResult.displayName = 'proto.dac.ai.LegalAnalysisResult';
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
proto.dac.ai.LegalIssue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.LegalIssue.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.LegalIssue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.LegalIssue.displayName = 'proto.dac.ai.LegalIssue';
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
proto.dac.ai.ComplianceCheck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.ComplianceCheck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ComplianceCheck.displayName = 'proto.dac.ai.ComplianceCheck';
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
proto.dac.ai.SmartContractRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.SmartContractRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.SmartContractRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.SmartContractRequest.displayName = 'proto.dac.ai.SmartContractRequest';
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
proto.dac.ai.SmartContractResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.SmartContractResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.SmartContractResponse.displayName = 'proto.dac.ai.SmartContractResponse';
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
proto.dac.ai.SmartContractResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.SmartContractResult.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.SmartContractResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.SmartContractResult.displayName = 'proto.dac.ai.SmartContractResult';
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
proto.dac.ai.ComplianceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ComplianceRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ComplianceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ComplianceRequest.displayName = 'proto.dac.ai.ComplianceRequest';
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
proto.dac.ai.ComplianceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ComplianceResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ComplianceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ComplianceResponse.displayName = 'proto.dac.ai.ComplianceResponse';
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
proto.dac.ai.ComplianceRequirement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ComplianceRequirement.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ComplianceRequirement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ComplianceRequirement.displayName = 'proto.dac.ai.ComplianceRequirement';
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
proto.dac.ai.ModelHealthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ModelHealthResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ModelHealthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ModelHealthResponse.displayName = 'proto.dac.ai.ModelHealthResponse';
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
proto.dac.ai.ModelStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.ModelStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ModelStatus.displayName = 'proto.dac.ai.ModelStatus';
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
proto.dac.ai.SystemHealth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.SystemHealth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.SystemHealth.displayName = 'proto.dac.ai.SystemHealth';
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
proto.dac.ai.ModelConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ModelConfigRequest.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ModelConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ModelConfigRequest.displayName = 'proto.dac.ai.ModelConfigRequest';
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
proto.dac.ai.ConfigParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.ConfigParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ConfigParameter.displayName = 'proto.dac.ai.ConfigParameter';
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
proto.dac.ai.ModelConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ModelConfigResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ModelConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ModelConfigResponse.displayName = 'proto.dac.ai.ModelConfigResponse';
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
proto.dac.ai.ProcessingStatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dac.ai.ProcessingStatsResponse.repeatedFields_, null);
};
goog.inherits(proto.dac.ai.ProcessingStatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ProcessingStatsResponse.displayName = 'proto.dac.ai.ProcessingStatsResponse';
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
proto.dac.ai.ServiceStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dac.ai.ServiceStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dac.ai.ServiceStats.displayName = 'proto.dac.ai.ServiceStats';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.PropertyValuationRequest.repeatedFields_ = [4];



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
proto.dac.ai.PropertyValuationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.PropertyValuationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.PropertyValuationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PropertyValuationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propertyData: (f = msg.getPropertyData()) && proto.dac.ai.PropertyData.toObject(includeInstance, f),
    method: jspb.Message.getFieldWithDefault(msg, 3, 0),
    comparablePropertiesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    marketConditions: (f = msg.getMarketConditions()) && proto.dac.ai.MarketConditions.toObject(includeInstance, f)
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
 * @return {!proto.dac.ai.PropertyValuationRequest}
 */
proto.dac.ai.PropertyValuationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.PropertyValuationRequest;
  return proto.dac.ai.PropertyValuationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.PropertyValuationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.PropertyValuationRequest}
 */
proto.dac.ai.PropertyValuationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPropertyId(value);
      break;
    case 2:
      var value = new proto.dac.ai.PropertyData;
      reader.readMessage(value,proto.dac.ai.PropertyData.deserializeBinaryFromReader);
      msg.setPropertyData(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.ai.ValuationMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addComparableProperties(value);
      break;
    case 5:
      var value = new proto.dac.ai.MarketConditions;
      reader.readMessage(value,proto.dac.ai.MarketConditions.deserializeBinaryFromReader);
      msg.setMarketConditions(value);
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
proto.dac.ai.PropertyValuationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.PropertyValuationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.PropertyValuationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PropertyValuationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropertyData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.ai.PropertyData.serializeBinaryToWriter
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getComparablePropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMarketConditions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.dac.ai.MarketConditions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string property_id = 1;
 * @return {string}
 */
proto.dac.ai.PropertyValuationRequest.prototype.getPropertyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyValuationRequest} returns this
 */
proto.dac.ai.PropertyValuationRequest.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PropertyData property_data = 2;
 * @return {?proto.dac.ai.PropertyData}
 */
proto.dac.ai.PropertyValuationRequest.prototype.getPropertyData = function() {
  return /** @type{?proto.dac.ai.PropertyData} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.PropertyData, 2));
};


/**
 * @param {?proto.dac.ai.PropertyData|undefined} value
 * @return {!proto.dac.ai.PropertyValuationRequest} returns this
*/
proto.dac.ai.PropertyValuationRequest.prototype.setPropertyData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.PropertyValuationRequest} returns this
 */
proto.dac.ai.PropertyValuationRequest.prototype.clearPropertyData = function() {
  return this.setPropertyData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.PropertyValuationRequest.prototype.hasPropertyData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ValuationMethod method = 3;
 * @return {!proto.dac.ai.ValuationMethod}
 */
proto.dac.ai.PropertyValuationRequest.prototype.getMethod = function() {
  return /** @type {!proto.dac.ai.ValuationMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.ai.ValuationMethod} value
 * @return {!proto.dac.ai.PropertyValuationRequest} returns this
 */
proto.dac.ai.PropertyValuationRequest.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated string comparable_properties = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.PropertyValuationRequest.prototype.getComparablePropertiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.PropertyValuationRequest} returns this
 */
proto.dac.ai.PropertyValuationRequest.prototype.setComparablePropertiesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.PropertyValuationRequest} returns this
 */
proto.dac.ai.PropertyValuationRequest.prototype.addComparableProperties = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.PropertyValuationRequest} returns this
 */
proto.dac.ai.PropertyValuationRequest.prototype.clearComparablePropertiesList = function() {
  return this.setComparablePropertiesList([]);
};


/**
 * optional MarketConditions market_conditions = 5;
 * @return {?proto.dac.ai.MarketConditions}
 */
proto.dac.ai.PropertyValuationRequest.prototype.getMarketConditions = function() {
  return /** @type{?proto.dac.ai.MarketConditions} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.MarketConditions, 5));
};


/**
 * @param {?proto.dac.ai.MarketConditions|undefined} value
 * @return {!proto.dac.ai.PropertyValuationRequest} returns this
*/
proto.dac.ai.PropertyValuationRequest.prototype.setMarketConditions = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.PropertyValuationRequest} returns this
 */
proto.dac.ai.PropertyValuationRequest.prototype.clearMarketConditions = function() {
  return this.setMarketConditions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.PropertyValuationRequest.prototype.hasMarketConditions = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.PropertyData.repeatedFields_ = [8,11];



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
proto.dac.ai.PropertyData.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.PropertyData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.PropertyData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PropertyData.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propertyType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    squareFootage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    bedrooms: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bathrooms: jspb.Message.getFieldWithDefault(msg, 5, 0),
    yearBuilt: jspb.Message.getFieldWithDefault(msg, 6, 0),
    lotSize: jspb.Message.getFieldWithDefault(msg, 7, ""),
    featuresList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    condition: jspb.Message.getFieldWithDefault(msg, 9, ""),
    location: (f = msg.getLocation()) && proto.dac.ai.LocationData.toObject(includeInstance, f),
    imagesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.dac.ai.PropertyData}
 */
proto.dac.ai.PropertyData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.PropertyData;
  return proto.dac.ai.PropertyData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.PropertyData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.PropertyData}
 */
proto.dac.ai.PropertyData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPropertyType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSquareFootage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBedrooms(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBathrooms(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYearBuilt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLotSize(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addFeatures(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCondition(value);
      break;
    case 10:
      var value = new proto.dac.ai.LocationData;
      reader.readMessage(value,proto.dac.ai.LocationData.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addImages(value);
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
proto.dac.ai.PropertyData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.PropertyData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.PropertyData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PropertyData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropertyType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSquareFootage();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getBedrooms();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getBathrooms();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getYearBuilt();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getLotSize();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getCondition();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.dac.ai.LocationData.serializeBinaryToWriter
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.dac.ai.PropertyData.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string property_type = 2;
 * @return {string}
 */
proto.dac.ai.PropertyData.prototype.getPropertyType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.setPropertyType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double square_footage = 3;
 * @return {number}
 */
proto.dac.ai.PropertyData.prototype.getSquareFootage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.setSquareFootage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 bedrooms = 4;
 * @return {number}
 */
proto.dac.ai.PropertyData.prototype.getBedrooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.setBedrooms = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 bathrooms = 5;
 * @return {number}
 */
proto.dac.ai.PropertyData.prototype.getBathrooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.setBathrooms = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 year_built = 6;
 * @return {number}
 */
proto.dac.ai.PropertyData.prototype.getYearBuilt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.setYearBuilt = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string lot_size = 7;
 * @return {string}
 */
proto.dac.ai.PropertyData.prototype.getLotSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.setLotSize = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string features = 8;
 * @return {!Array<string>}
 */
proto.dac.ai.PropertyData.prototype.getFeaturesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.setFeaturesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.addFeatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.clearFeaturesList = function() {
  return this.setFeaturesList([]);
};


/**
 * optional string condition = 9;
 * @return {string}
 */
proto.dac.ai.PropertyData.prototype.getCondition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.setCondition = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional LocationData location = 10;
 * @return {?proto.dac.ai.LocationData}
 */
proto.dac.ai.PropertyData.prototype.getLocation = function() {
  return /** @type{?proto.dac.ai.LocationData} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.LocationData, 10));
};


/**
 * @param {?proto.dac.ai.LocationData|undefined} value
 * @return {!proto.dac.ai.PropertyData} returns this
*/
proto.dac.ai.PropertyData.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.PropertyData.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated string images = 11;
 * @return {!Array<string>}
 */
proto.dac.ai.PropertyData.prototype.getImagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.setImagesList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.addImages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.PropertyData} returns this
 */
proto.dac.ai.PropertyData.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.LocationData.repeatedFields_ = [6];



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
proto.dac.ai.LocationData.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.LocationData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.LocationData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.LocationData.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    neighborhood: jspb.Message.getFieldWithDefault(msg, 3, ""),
    schoolDistrict: jspb.Message.getFieldWithDefault(msg, 4, ""),
    walkabilityScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    nearbyAmenitiesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.dac.ai.LocationData}
 */
proto.dac.ai.LocationData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.LocationData;
  return proto.dac.ai.LocationData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.LocationData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.LocationData}
 */
proto.dac.ai.LocationData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNeighborhood(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchoolDistrict(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWalkabilityScore(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addNearbyAmenities(value);
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
proto.dac.ai.LocationData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.LocationData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.LocationData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.LocationData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getNeighborhood();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSchoolDistrict();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWalkabilityScore();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getNearbyAmenitiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional double latitude = 1;
 * @return {number}
 */
proto.dac.ai.LocationData.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.LocationData} returns this
 */
proto.dac.ai.LocationData.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.dac.ai.LocationData.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.LocationData} returns this
 */
proto.dac.ai.LocationData.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string neighborhood = 3;
 * @return {string}
 */
proto.dac.ai.LocationData.prototype.getNeighborhood = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.LocationData} returns this
 */
proto.dac.ai.LocationData.prototype.setNeighborhood = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string school_district = 4;
 * @return {string}
 */
proto.dac.ai.LocationData.prototype.getSchoolDistrict = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.LocationData} returns this
 */
proto.dac.ai.LocationData.prototype.setSchoolDistrict = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double walkability_score = 5;
 * @return {number}
 */
proto.dac.ai.LocationData.prototype.getWalkabilityScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.LocationData} returns this
 */
proto.dac.ai.LocationData.prototype.setWalkabilityScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * repeated string nearby_amenities = 6;
 * @return {!Array<string>}
 */
proto.dac.ai.LocationData.prototype.getNearbyAmenitiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.LocationData} returns this
 */
proto.dac.ai.LocationData.prototype.setNearbyAmenitiesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.LocationData} returns this
 */
proto.dac.ai.LocationData.prototype.addNearbyAmenities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.LocationData} returns this
 */
proto.dac.ai.LocationData.prototype.clearNearbyAmenitiesList = function() {
  return this.setNearbyAmenitiesList([]);
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
proto.dac.ai.MarketConditions.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.MarketConditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.MarketConditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.MarketConditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketTrend: jspb.Message.getFieldWithDefault(msg, 1, ""),
    averageDaysOnMarket: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    pricePerSqftTrend: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    inventoryLevel: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    interestRates: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.dac.ai.MarketConditions}
 */
proto.dac.ai.MarketConditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.MarketConditions;
  return proto.dac.ai.MarketConditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.MarketConditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.MarketConditions}
 */
proto.dac.ai.MarketConditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketTrend(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageDaysOnMarket(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPricePerSqftTrend(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInventoryLevel(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInterestRates(value);
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
proto.dac.ai.MarketConditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.MarketConditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.MarketConditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.MarketConditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketTrend();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAverageDaysOnMarket();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getPricePerSqftTrend();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getInventoryLevel();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getInterestRates();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional string market_trend = 1;
 * @return {string}
 */
proto.dac.ai.MarketConditions.prototype.getMarketTrend = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.MarketConditions} returns this
 */
proto.dac.ai.MarketConditions.prototype.setMarketTrend = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double average_days_on_market = 2;
 * @return {number}
 */
proto.dac.ai.MarketConditions.prototype.getAverageDaysOnMarket = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.MarketConditions} returns this
 */
proto.dac.ai.MarketConditions.prototype.setAverageDaysOnMarket = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double price_per_sqft_trend = 3;
 * @return {number}
 */
proto.dac.ai.MarketConditions.prototype.getPricePerSqftTrend = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.MarketConditions} returns this
 */
proto.dac.ai.MarketConditions.prototype.setPricePerSqftTrend = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double inventory_level = 4;
 * @return {number}
 */
proto.dac.ai.MarketConditions.prototype.getInventoryLevel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.MarketConditions} returns this
 */
proto.dac.ai.MarketConditions.prototype.setInventoryLevel = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double interest_rates = 5;
 * @return {number}
 */
proto.dac.ai.MarketConditions.prototype.getInterestRates = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.MarketConditions} returns this
 */
proto.dac.ai.MarketConditions.prototype.setInterestRates = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.PropertyValuationResponse.repeatedFields_ = [5];



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
proto.dac.ai.PropertyValuationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.PropertyValuationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.PropertyValuationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PropertyValuationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    progressPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    result: (f = msg.getResult()) && proto.dac.ai.ValuationResult.toObject(includeInstance, f),
    processingStepsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
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
 * @return {!proto.dac.ai.PropertyValuationResponse}
 */
proto.dac.ai.PropertyValuationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.PropertyValuationResponse;
  return proto.dac.ai.PropertyValuationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.PropertyValuationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.PropertyValuationResponse}
 */
proto.dac.ai.PropertyValuationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.ai.ValuationStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProgressPercentage(value);
      break;
    case 4:
      var value = new proto.dac.ai.ValuationResult;
      reader.readMessage(value,proto.dac.ai.ValuationResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addProcessingSteps(value);
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
proto.dac.ai.PropertyValuationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.PropertyValuationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.PropertyValuationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PropertyValuationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
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
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dac.ai.ValuationResult.serializeBinaryToWriter
    );
  }
  f = message.getProcessingStepsList();
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
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.dac.ai.PropertyValuationResponse.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyValuationResponse} returns this
 */
proto.dac.ai.PropertyValuationResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ValuationStatus status = 2;
 * @return {!proto.dac.ai.ValuationStatus}
 */
proto.dac.ai.PropertyValuationResponse.prototype.getStatus = function() {
  return /** @type {!proto.dac.ai.ValuationStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.ai.ValuationStatus} value
 * @return {!proto.dac.ai.PropertyValuationResponse} returns this
 */
proto.dac.ai.PropertyValuationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double progress_percentage = 3;
 * @return {number}
 */
proto.dac.ai.PropertyValuationResponse.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PropertyValuationResponse} returns this
 */
proto.dac.ai.PropertyValuationResponse.prototype.setProgressPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional ValuationResult result = 4;
 * @return {?proto.dac.ai.ValuationResult}
 */
proto.dac.ai.PropertyValuationResponse.prototype.getResult = function() {
  return /** @type{?proto.dac.ai.ValuationResult} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.ValuationResult, 4));
};


/**
 * @param {?proto.dac.ai.ValuationResult|undefined} value
 * @return {!proto.dac.ai.PropertyValuationResponse} returns this
*/
proto.dac.ai.PropertyValuationResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.PropertyValuationResponse} returns this
 */
proto.dac.ai.PropertyValuationResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.PropertyValuationResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string processing_steps = 5;
 * @return {!Array<string>}
 */
proto.dac.ai.PropertyValuationResponse.prototype.getProcessingStepsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.PropertyValuationResponse} returns this
 */
proto.dac.ai.PropertyValuationResponse.prototype.setProcessingStepsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.PropertyValuationResponse} returns this
 */
proto.dac.ai.PropertyValuationResponse.prototype.addProcessingSteps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.PropertyValuationResponse} returns this
 */
proto.dac.ai.PropertyValuationResponse.prototype.clearProcessingStepsList = function() {
  return this.setProcessingStepsList([]);
};


/**
 * optional string error_message = 6;
 * @return {string}
 */
proto.dac.ai.PropertyValuationResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyValuationResponse} returns this
 */
proto.dac.ai.PropertyValuationResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.ai.PropertyValuationResponse} returns this
 */
proto.dac.ai.PropertyValuationResponse.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.PropertyValuationResponse.prototype.hasErrorMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ValuationResult.repeatedFields_ = [4,5];



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
proto.dac.ai.ValuationResult.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ValuationResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ValuationResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ValuationResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    estimatedValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    confidenceScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    valueRange: (f = msg.getValueRange()) && proto.dac.ai.ValueRange.toObject(includeInstance, f),
    comparablesList: jspb.Message.toObjectList(msg.getComparablesList(),
    proto.dac.ai.ComparableProperty.toObject, includeInstance),
    factorsList: jspb.Message.toObjectList(msg.getFactorsList(),
    proto.dac.ai.ValuationFactor.toObject, includeInstance),
    methodologyUsed: jspb.Message.getFieldWithDefault(msg, 6, ""),
    valuationDate: (f = msg.getValuationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.dac.ai.ValuationResult}
 */
proto.dac.ai.ValuationResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ValuationResult;
  return proto.dac.ai.ValuationResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ValuationResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ValuationResult}
 */
proto.dac.ai.ValuationResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEstimatedValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConfidenceScore(value);
      break;
    case 3:
      var value = new proto.dac.ai.ValueRange;
      reader.readMessage(value,proto.dac.ai.ValueRange.deserializeBinaryFromReader);
      msg.setValueRange(value);
      break;
    case 4:
      var value = new proto.dac.ai.ComparableProperty;
      reader.readMessage(value,proto.dac.ai.ComparableProperty.deserializeBinaryFromReader);
      msg.addComparables(value);
      break;
    case 5:
      var value = new proto.dac.ai.ValuationFactor;
      reader.readMessage(value,proto.dac.ai.ValuationFactor.deserializeBinaryFromReader);
      msg.addFactors(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodologyUsed(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setValuationDate(value);
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
proto.dac.ai.ValuationResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ValuationResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ValuationResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ValuationResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEstimatedValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getConfidenceScore();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getValueRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dac.ai.ValueRange.serializeBinaryToWriter
    );
  }
  f = message.getComparablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.ai.ComparableProperty.serializeBinaryToWriter
    );
  }
  f = message.getFactorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.dac.ai.ValuationFactor.serializeBinaryToWriter
    );
  }
  f = message.getMethodologyUsed();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getValuationDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional double estimated_value = 1;
 * @return {number}
 */
proto.dac.ai.ValuationResult.prototype.getEstimatedValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ValuationResult} returns this
 */
proto.dac.ai.ValuationResult.prototype.setEstimatedValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double confidence_score = 2;
 * @return {number}
 */
proto.dac.ai.ValuationResult.prototype.getConfidenceScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ValuationResult} returns this
 */
proto.dac.ai.ValuationResult.prototype.setConfidenceScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional ValueRange value_range = 3;
 * @return {?proto.dac.ai.ValueRange}
 */
proto.dac.ai.ValuationResult.prototype.getValueRange = function() {
  return /** @type{?proto.dac.ai.ValueRange} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.ValueRange, 3));
};


/**
 * @param {?proto.dac.ai.ValueRange|undefined} value
 * @return {!proto.dac.ai.ValuationResult} returns this
*/
proto.dac.ai.ValuationResult.prototype.setValueRange = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ValuationResult} returns this
 */
proto.dac.ai.ValuationResult.prototype.clearValueRange = function() {
  return this.setValueRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ValuationResult.prototype.hasValueRange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ComparableProperty comparables = 4;
 * @return {!Array<!proto.dac.ai.ComparableProperty>}
 */
proto.dac.ai.ValuationResult.prototype.getComparablesList = function() {
  return /** @type{!Array<!proto.dac.ai.ComparableProperty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ComparableProperty, 4));
};


/**
 * @param {!Array<!proto.dac.ai.ComparableProperty>} value
 * @return {!proto.dac.ai.ValuationResult} returns this
*/
proto.dac.ai.ValuationResult.prototype.setComparablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.ai.ComparableProperty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ComparableProperty}
 */
proto.dac.ai.ValuationResult.prototype.addComparables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.ai.ComparableProperty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ValuationResult} returns this
 */
proto.dac.ai.ValuationResult.prototype.clearComparablesList = function() {
  return this.setComparablesList([]);
};


/**
 * repeated ValuationFactor factors = 5;
 * @return {!Array<!proto.dac.ai.ValuationFactor>}
 */
proto.dac.ai.ValuationResult.prototype.getFactorsList = function() {
  return /** @type{!Array<!proto.dac.ai.ValuationFactor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ValuationFactor, 5));
};


/**
 * @param {!Array<!proto.dac.ai.ValuationFactor>} value
 * @return {!proto.dac.ai.ValuationResult} returns this
*/
proto.dac.ai.ValuationResult.prototype.setFactorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.dac.ai.ValuationFactor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ValuationFactor}
 */
proto.dac.ai.ValuationResult.prototype.addFactors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.dac.ai.ValuationFactor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ValuationResult} returns this
 */
proto.dac.ai.ValuationResult.prototype.clearFactorsList = function() {
  return this.setFactorsList([]);
};


/**
 * optional string methodology_used = 6;
 * @return {string}
 */
proto.dac.ai.ValuationResult.prototype.getMethodologyUsed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ValuationResult} returns this
 */
proto.dac.ai.ValuationResult.prototype.setMethodologyUsed = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp valuation_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.ai.ValuationResult.prototype.getValuationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.ai.ValuationResult} returns this
*/
proto.dac.ai.ValuationResult.prototype.setValuationDate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ValuationResult} returns this
 */
proto.dac.ai.ValuationResult.prototype.clearValuationDate = function() {
  return this.setValuationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ValuationResult.prototype.hasValuationDate = function() {
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
proto.dac.ai.ValueRange.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ValueRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ValueRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ValueRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    minValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    maxValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    medianValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.dac.ai.ValueRange}
 */
proto.dac.ai.ValueRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ValueRange;
  return proto.dac.ai.ValueRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ValueRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ValueRange}
 */
proto.dac.ai.ValueRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMedianValue(value);
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
proto.dac.ai.ValueRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ValueRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ValueRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ValueRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMaxValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getMedianValue();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double min_value = 1;
 * @return {number}
 */
proto.dac.ai.ValueRange.prototype.getMinValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ValueRange} returns this
 */
proto.dac.ai.ValueRange.prototype.setMinValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double max_value = 2;
 * @return {number}
 */
proto.dac.ai.ValueRange.prototype.getMaxValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ValueRange} returns this
 */
proto.dac.ai.ValueRange.prototype.setMaxValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double median_value = 3;
 * @return {number}
 */
proto.dac.ai.ValueRange.prototype.getMedianValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ValueRange} returns this
 */
proto.dac.ai.ValueRange.prototype.setMedianValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ComparableProperty.repeatedFields_ = [5];



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
proto.dac.ai.ComparableProperty.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ComparableProperty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ComparableProperty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ComparableProperty.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    salePrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    saleDate: (f = msg.getSaleDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    similarityScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    adjustmentFactorsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.dac.ai.ComparableProperty}
 */
proto.dac.ai.ComparableProperty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ComparableProperty;
  return proto.dac.ai.ComparableProperty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ComparableProperty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ComparableProperty}
 */
proto.dac.ai.ComparableProperty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSalePrice(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSaleDate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSimilarityScore(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAdjustmentFactors(value);
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
proto.dac.ai.ComparableProperty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ComparableProperty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ComparableProperty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ComparableProperty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSalePrice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getSaleDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSimilarityScore();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getAdjustmentFactorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.dac.ai.ComparableProperty.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ComparableProperty} returns this
 */
proto.dac.ai.ComparableProperty.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double sale_price = 2;
 * @return {number}
 */
proto.dac.ai.ComparableProperty.prototype.getSalePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ComparableProperty} returns this
 */
proto.dac.ai.ComparableProperty.prototype.setSalePrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp sale_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.ai.ComparableProperty.prototype.getSaleDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.ai.ComparableProperty} returns this
*/
proto.dac.ai.ComparableProperty.prototype.setSaleDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ComparableProperty} returns this
 */
proto.dac.ai.ComparableProperty.prototype.clearSaleDate = function() {
  return this.setSaleDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ComparableProperty.prototype.hasSaleDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double similarity_score = 4;
 * @return {number}
 */
proto.dac.ai.ComparableProperty.prototype.getSimilarityScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ComparableProperty} returns this
 */
proto.dac.ai.ComparableProperty.prototype.setSimilarityScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated string adjustment_factors = 5;
 * @return {!Array<string>}
 */
proto.dac.ai.ComparableProperty.prototype.getAdjustmentFactorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ComparableProperty} returns this
 */
proto.dac.ai.ComparableProperty.prototype.setAdjustmentFactorsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ComparableProperty} returns this
 */
proto.dac.ai.ComparableProperty.prototype.addAdjustmentFactors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ComparableProperty} returns this
 */
proto.dac.ai.ComparableProperty.prototype.clearAdjustmentFactorsList = function() {
  return this.setAdjustmentFactorsList([]);
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
proto.dac.ai.ValuationFactor.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ValuationFactor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ValuationFactor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ValuationFactor.toObject = function(includeInstance, msg) {
  var f, obj = {
    factorName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    impactScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.dac.ai.ValuationFactor}
 */
proto.dac.ai.ValuationFactor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ValuationFactor;
  return proto.dac.ai.ValuationFactor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ValuationFactor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ValuationFactor}
 */
proto.dac.ai.ValuationFactor.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setImpactScore(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.dac.ai.FactorType} */ (reader.readEnum());
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
proto.dac.ai.ValuationFactor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ValuationFactor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ValuationFactor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ValuationFactor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFactorName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImpactScore();
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
  f = message.getType();
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
proto.dac.ai.ValuationFactor.prototype.getFactorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ValuationFactor} returns this
 */
proto.dac.ai.ValuationFactor.prototype.setFactorName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double impact_score = 2;
 * @return {number}
 */
proto.dac.ai.ValuationFactor.prototype.getImpactScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ValuationFactor} returns this
 */
proto.dac.ai.ValuationFactor.prototype.setImpactScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.dac.ai.ValuationFactor.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ValuationFactor} returns this
 */
proto.dac.ai.ValuationFactor.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional FactorType type = 4;
 * @return {!proto.dac.ai.FactorType}
 */
proto.dac.ai.ValuationFactor.prototype.getType = function() {
  return /** @type {!proto.dac.ai.FactorType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.dac.ai.FactorType} value
 * @return {!proto.dac.ai.ValuationFactor} returns this
 */
proto.dac.ai.ValuationFactor.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.PropertyDescriptionRequest.repeatedFields_ = [4];



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
proto.dac.ai.PropertyDescriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.PropertyDescriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.PropertyDescriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PropertyDescriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyData: (f = msg.getPropertyData()) && proto.dac.ai.PropertyData.toObject(includeInstance, f),
    targetAudience: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tone: jspb.Message.getFieldWithDefault(msg, 3, ""),
    highlightFeaturesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.dac.ai.PropertyDescriptionRequest}
 */
proto.dac.ai.PropertyDescriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.PropertyDescriptionRequest;
  return proto.dac.ai.PropertyDescriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.PropertyDescriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.PropertyDescriptionRequest}
 */
proto.dac.ai.PropertyDescriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.ai.PropertyData;
      reader.readMessage(value,proto.dac.ai.PropertyData.deserializeBinaryFromReader);
      msg.setPropertyData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetAudience(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addHighlightFeatures(value);
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
proto.dac.ai.PropertyDescriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.PropertyDescriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.PropertyDescriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PropertyDescriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.ai.PropertyData.serializeBinaryToWriter
    );
  }
  f = message.getTargetAudience();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHighlightFeaturesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional PropertyData property_data = 1;
 * @return {?proto.dac.ai.PropertyData}
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.getPropertyData = function() {
  return /** @type{?proto.dac.ai.PropertyData} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.PropertyData, 1));
};


/**
 * @param {?proto.dac.ai.PropertyData|undefined} value
 * @return {!proto.dac.ai.PropertyDescriptionRequest} returns this
*/
proto.dac.ai.PropertyDescriptionRequest.prototype.setPropertyData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.PropertyDescriptionRequest} returns this
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.clearPropertyData = function() {
  return this.setPropertyData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.hasPropertyData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string target_audience = 2;
 * @return {string}
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.getTargetAudience = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyDescriptionRequest} returns this
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.setTargetAudience = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tone = 3;
 * @return {string}
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.getTone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyDescriptionRequest} returns this
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.setTone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string highlight_features = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.getHighlightFeaturesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.PropertyDescriptionRequest} returns this
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.setHighlightFeaturesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.PropertyDescriptionRequest} returns this
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.addHighlightFeatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.PropertyDescriptionRequest} returns this
 */
proto.dac.ai.PropertyDescriptionRequest.prototype.clearHighlightFeaturesList = function() {
  return this.setHighlightFeaturesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.PropertyDescriptionResponse.repeatedFields_ = [2,3];



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
proto.dac.ai.PropertyDescriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.PropertyDescriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.PropertyDescriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PropertyDescriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, ""),
    keyHighlightsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    suggestedTagsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    seoTitle: jspb.Message.getFieldWithDefault(msg, 4, ""),
    seoDescription: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.dac.ai.PropertyDescriptionResponse}
 */
proto.dac.ai.PropertyDescriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.PropertyDescriptionResponse;
  return proto.dac.ai.PropertyDescriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.PropertyDescriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.PropertyDescriptionResponse}
 */
proto.dac.ai.PropertyDescriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeyHighlights(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSuggestedTags(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeoTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeoDescription(value);
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
proto.dac.ai.PropertyDescriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.PropertyDescriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.PropertyDescriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PropertyDescriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeyHighlightsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSuggestedTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSeoTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSeoDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyDescriptionResponse} returns this
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string key_highlights = 2;
 * @return {!Array<string>}
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.getKeyHighlightsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.PropertyDescriptionResponse} returns this
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.setKeyHighlightsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.PropertyDescriptionResponse} returns this
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.addKeyHighlights = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.PropertyDescriptionResponse} returns this
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.clearKeyHighlightsList = function() {
  return this.setKeyHighlightsList([]);
};


/**
 * repeated string suggested_tags = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.getSuggestedTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.PropertyDescriptionResponse} returns this
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.setSuggestedTagsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.PropertyDescriptionResponse} returns this
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.addSuggestedTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.PropertyDescriptionResponse} returns this
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.clearSuggestedTagsList = function() {
  return this.setSuggestedTagsList([]);
};


/**
 * optional string seo_title = 4;
 * @return {string}
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.getSeoTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyDescriptionResponse} returns this
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.setSeoTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string seo_description = 5;
 * @return {string}
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.getSeoDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PropertyDescriptionResponse} returns this
 */
proto.dac.ai.PropertyDescriptionResponse.prototype.setSeoDescription = function(value) {
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
proto.dac.ai.MarketAnalysisRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.MarketAnalysisRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.MarketAnalysisRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.MarketAnalysisRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propertyType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priceRange: jspb.Message.getFieldWithDefault(msg, 3, ""),
    analysisDate: (f = msg.getAnalysisDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.dac.ai.MarketAnalysisRequest}
 */
proto.dac.ai.MarketAnalysisRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.MarketAnalysisRequest;
  return proto.dac.ai.MarketAnalysisRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.MarketAnalysisRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.MarketAnalysisRequest}
 */
proto.dac.ai.MarketAnalysisRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setPropertyType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPriceRange(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAnalysisDate(value);
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
proto.dac.ai.MarketAnalysisRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.MarketAnalysisRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.MarketAnalysisRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.MarketAnalysisRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropertyType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPriceRange();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAnalysisDate();
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
proto.dac.ai.MarketAnalysisRequest.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.MarketAnalysisRequest} returns this
 */
proto.dac.ai.MarketAnalysisRequest.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string property_type = 2;
 * @return {string}
 */
proto.dac.ai.MarketAnalysisRequest.prototype.getPropertyType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.MarketAnalysisRequest} returns this
 */
proto.dac.ai.MarketAnalysisRequest.prototype.setPropertyType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price_range = 3;
 * @return {string}
 */
proto.dac.ai.MarketAnalysisRequest.prototype.getPriceRange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.MarketAnalysisRequest} returns this
 */
proto.dac.ai.MarketAnalysisRequest.prototype.setPriceRange = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp analysis_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.ai.MarketAnalysisRequest.prototype.getAnalysisDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.ai.MarketAnalysisRequest} returns this
*/
proto.dac.ai.MarketAnalysisRequest.prototype.setAnalysisDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.MarketAnalysisRequest} returns this
 */
proto.dac.ai.MarketAnalysisRequest.prototype.clearAnalysisDate = function() {
  return this.setAnalysisDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.MarketAnalysisRequest.prototype.hasAnalysisDate = function() {
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
proto.dac.ai.MarketAnalysisResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.MarketAnalysisResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.MarketAnalysisResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.MarketAnalysisResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    progressPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    result: (f = msg.getResult()) && proto.dac.ai.MarketAnalysisResult.toObject(includeInstance, f)
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
 * @return {!proto.dac.ai.MarketAnalysisResponse}
 */
proto.dac.ai.MarketAnalysisResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.MarketAnalysisResponse;
  return proto.dac.ai.MarketAnalysisResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.MarketAnalysisResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.MarketAnalysisResponse}
 */
proto.dac.ai.MarketAnalysisResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.ai.AnalysisStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProgressPercentage(value);
      break;
    case 4:
      var value = new proto.dac.ai.MarketAnalysisResult;
      reader.readMessage(value,proto.dac.ai.MarketAnalysisResult.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.dac.ai.MarketAnalysisResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.MarketAnalysisResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.MarketAnalysisResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.MarketAnalysisResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
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
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dac.ai.MarketAnalysisResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.dac.ai.MarketAnalysisResponse.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.MarketAnalysisResponse} returns this
 */
proto.dac.ai.MarketAnalysisResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AnalysisStatus status = 2;
 * @return {!proto.dac.ai.AnalysisStatus}
 */
proto.dac.ai.MarketAnalysisResponse.prototype.getStatus = function() {
  return /** @type {!proto.dac.ai.AnalysisStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.ai.AnalysisStatus} value
 * @return {!proto.dac.ai.MarketAnalysisResponse} returns this
 */
proto.dac.ai.MarketAnalysisResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double progress_percentage = 3;
 * @return {number}
 */
proto.dac.ai.MarketAnalysisResponse.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.MarketAnalysisResponse} returns this
 */
proto.dac.ai.MarketAnalysisResponse.prototype.setProgressPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional MarketAnalysisResult result = 4;
 * @return {?proto.dac.ai.MarketAnalysisResult}
 */
proto.dac.ai.MarketAnalysisResponse.prototype.getResult = function() {
  return /** @type{?proto.dac.ai.MarketAnalysisResult} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.MarketAnalysisResult, 4));
};


/**
 * @param {?proto.dac.ai.MarketAnalysisResult|undefined} value
 * @return {!proto.dac.ai.MarketAnalysisResponse} returns this
*/
proto.dac.ai.MarketAnalysisResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.MarketAnalysisResponse} returns this
 */
proto.dac.ai.MarketAnalysisResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.MarketAnalysisResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.MarketAnalysisResult.repeatedFields_ = [4,5];



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
proto.dac.ai.MarketAnalysisResult.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.MarketAnalysisResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.MarketAnalysisResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.MarketAnalysisResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    trends: (f = msg.getTrends()) && proto.dac.ai.MarketTrends.toObject(includeInstance, f),
    priceAnalysis: (f = msg.getPriceAnalysis()) && proto.dac.ai.PriceAnalysis.toObject(includeInstance, f),
    inventory: (f = msg.getInventory()) && proto.dac.ai.InventoryAnalysis.toObject(includeInstance, f),
    marketInsightsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    recommendationsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.dac.ai.MarketAnalysisResult}
 */
proto.dac.ai.MarketAnalysisResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.MarketAnalysisResult;
  return proto.dac.ai.MarketAnalysisResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.MarketAnalysisResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.MarketAnalysisResult}
 */
proto.dac.ai.MarketAnalysisResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.ai.MarketTrends;
      reader.readMessage(value,proto.dac.ai.MarketTrends.deserializeBinaryFromReader);
      msg.setTrends(value);
      break;
    case 2:
      var value = new proto.dac.ai.PriceAnalysis;
      reader.readMessage(value,proto.dac.ai.PriceAnalysis.deserializeBinaryFromReader);
      msg.setPriceAnalysis(value);
      break;
    case 3:
      var value = new proto.dac.ai.InventoryAnalysis;
      reader.readMessage(value,proto.dac.ai.InventoryAnalysis.deserializeBinaryFromReader);
      msg.setInventory(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addMarketInsights(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecommendations(value);
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
proto.dac.ai.MarketAnalysisResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.MarketAnalysisResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.MarketAnalysisResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.MarketAnalysisResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrends();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.ai.MarketTrends.serializeBinaryToWriter
    );
  }
  f = message.getPriceAnalysis();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.ai.PriceAnalysis.serializeBinaryToWriter
    );
  }
  f = message.getInventory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dac.ai.InventoryAnalysis.serializeBinaryToWriter
    );
  }
  f = message.getMarketInsightsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getRecommendationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional MarketTrends trends = 1;
 * @return {?proto.dac.ai.MarketTrends}
 */
proto.dac.ai.MarketAnalysisResult.prototype.getTrends = function() {
  return /** @type{?proto.dac.ai.MarketTrends} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.MarketTrends, 1));
};


/**
 * @param {?proto.dac.ai.MarketTrends|undefined} value
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
*/
proto.dac.ai.MarketAnalysisResult.prototype.setTrends = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
 */
proto.dac.ai.MarketAnalysisResult.prototype.clearTrends = function() {
  return this.setTrends(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.MarketAnalysisResult.prototype.hasTrends = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PriceAnalysis price_analysis = 2;
 * @return {?proto.dac.ai.PriceAnalysis}
 */
proto.dac.ai.MarketAnalysisResult.prototype.getPriceAnalysis = function() {
  return /** @type{?proto.dac.ai.PriceAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.PriceAnalysis, 2));
};


/**
 * @param {?proto.dac.ai.PriceAnalysis|undefined} value
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
*/
proto.dac.ai.MarketAnalysisResult.prototype.setPriceAnalysis = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
 */
proto.dac.ai.MarketAnalysisResult.prototype.clearPriceAnalysis = function() {
  return this.setPriceAnalysis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.MarketAnalysisResult.prototype.hasPriceAnalysis = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InventoryAnalysis inventory = 3;
 * @return {?proto.dac.ai.InventoryAnalysis}
 */
proto.dac.ai.MarketAnalysisResult.prototype.getInventory = function() {
  return /** @type{?proto.dac.ai.InventoryAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.InventoryAnalysis, 3));
};


/**
 * @param {?proto.dac.ai.InventoryAnalysis|undefined} value
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
*/
proto.dac.ai.MarketAnalysisResult.prototype.setInventory = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
 */
proto.dac.ai.MarketAnalysisResult.prototype.clearInventory = function() {
  return this.setInventory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.MarketAnalysisResult.prototype.hasInventory = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string market_insights = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.MarketAnalysisResult.prototype.getMarketInsightsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
 */
proto.dac.ai.MarketAnalysisResult.prototype.setMarketInsightsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
 */
proto.dac.ai.MarketAnalysisResult.prototype.addMarketInsights = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
 */
proto.dac.ai.MarketAnalysisResult.prototype.clearMarketInsightsList = function() {
  return this.setMarketInsightsList([]);
};


/**
 * repeated string recommendations = 5;
 * @return {!Array<string>}
 */
proto.dac.ai.MarketAnalysisResult.prototype.getRecommendationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
 */
proto.dac.ai.MarketAnalysisResult.prototype.setRecommendationsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
 */
proto.dac.ai.MarketAnalysisResult.prototype.addRecommendations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.MarketAnalysisResult} returns this
 */
proto.dac.ai.MarketAnalysisResult.prototype.clearRecommendationsList = function() {
  return this.setRecommendationsList([]);
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
proto.dac.ai.MarketTrends.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.MarketTrends.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.MarketTrends} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.MarketTrends.toObject = function(includeInstance, msg) {
  var f, obj = {
    priceGrowthRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    salesVolumeChange: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    averageDaysOnMarket: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    marketDirection: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.dac.ai.MarketTrends}
 */
proto.dac.ai.MarketTrends.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.MarketTrends;
  return proto.dac.ai.MarketTrends.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.MarketTrends} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.MarketTrends}
 */
proto.dac.ai.MarketTrends.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceGrowthRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSalesVolumeChange(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageDaysOnMarket(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketDirection(value);
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
proto.dac.ai.MarketTrends.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.MarketTrends.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.MarketTrends} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.MarketTrends.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPriceGrowthRate();
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
  f = message.getAverageDaysOnMarket();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getMarketDirection();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional double price_growth_rate = 1;
 * @return {number}
 */
proto.dac.ai.MarketTrends.prototype.getPriceGrowthRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.MarketTrends} returns this
 */
proto.dac.ai.MarketTrends.prototype.setPriceGrowthRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double sales_volume_change = 2;
 * @return {number}
 */
proto.dac.ai.MarketTrends.prototype.getSalesVolumeChange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.MarketTrends} returns this
 */
proto.dac.ai.MarketTrends.prototype.setSalesVolumeChange = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double average_days_on_market = 3;
 * @return {number}
 */
proto.dac.ai.MarketTrends.prototype.getAverageDaysOnMarket = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.MarketTrends} returns this
 */
proto.dac.ai.MarketTrends.prototype.setAverageDaysOnMarket = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string market_direction = 4;
 * @return {string}
 */
proto.dac.ai.MarketTrends.prototype.getMarketDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.MarketTrends} returns this
 */
proto.dac.ai.MarketTrends.prototype.setMarketDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.PriceAnalysis.repeatedFields_ = [4];



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
proto.dac.ai.PriceAnalysis.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.PriceAnalysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.PriceAnalysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PriceAnalysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    medianPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    pricePerSqft: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    priceVolatility: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.dac.ai.PriceSegment.toObject, includeInstance)
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
 * @return {!proto.dac.ai.PriceAnalysis}
 */
proto.dac.ai.PriceAnalysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.PriceAnalysis;
  return proto.dac.ai.PriceAnalysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.PriceAnalysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.PriceAnalysis}
 */
proto.dac.ai.PriceAnalysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMedianPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPricePerSqft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceVolatility(value);
      break;
    case 4:
      var value = new proto.dac.ai.PriceSegment;
      reader.readMessage(value,proto.dac.ai.PriceSegment.deserializeBinaryFromReader);
      msg.addSegments(value);
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
proto.dac.ai.PriceAnalysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.PriceAnalysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.PriceAnalysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PriceAnalysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMedianPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getPricePerSqft();
  if (f !== 0.0) {
    writer.writeDouble(
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
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.ai.PriceSegment.serializeBinaryToWriter
    );
  }
};


/**
 * optional double median_price = 1;
 * @return {number}
 */
proto.dac.ai.PriceAnalysis.prototype.getMedianPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PriceAnalysis} returns this
 */
proto.dac.ai.PriceAnalysis.prototype.setMedianPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double price_per_sqft = 2;
 * @return {number}
 */
proto.dac.ai.PriceAnalysis.prototype.getPricePerSqft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PriceAnalysis} returns this
 */
proto.dac.ai.PriceAnalysis.prototype.setPricePerSqft = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double price_volatility = 3;
 * @return {number}
 */
proto.dac.ai.PriceAnalysis.prototype.getPriceVolatility = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PriceAnalysis} returns this
 */
proto.dac.ai.PriceAnalysis.prototype.setPriceVolatility = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated PriceSegment segments = 4;
 * @return {!Array<!proto.dac.ai.PriceSegment>}
 */
proto.dac.ai.PriceAnalysis.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.dac.ai.PriceSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.PriceSegment, 4));
};


/**
 * @param {!Array<!proto.dac.ai.PriceSegment>} value
 * @return {!proto.dac.ai.PriceAnalysis} returns this
*/
proto.dac.ai.PriceAnalysis.prototype.setSegmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.ai.PriceSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.PriceSegment}
 */
proto.dac.ai.PriceAnalysis.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.ai.PriceSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.PriceAnalysis} returns this
 */
proto.dac.ai.PriceAnalysis.prototype.clearSegmentsList = function() {
  return this.setSegmentsList([]);
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
proto.dac.ai.PriceSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.PriceSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.PriceSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PriceSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
    priceRange: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propertyCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    marketShare: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    avgDaysOnMarket: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.ai.PriceSegment}
 */
proto.dac.ai.PriceSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.PriceSegment;
  return proto.dac.ai.PriceSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.PriceSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.PriceSegment}
 */
proto.dac.ai.PriceSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPriceRange(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPropertyCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketShare(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgDaysOnMarket(value);
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
proto.dac.ai.PriceSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.PriceSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.PriceSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.PriceSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPriceRange();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropertyCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMarketShare();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getAvgDaysOnMarket();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional string price_range = 1;
 * @return {string}
 */
proto.dac.ai.PriceSegment.prototype.getPriceRange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.PriceSegment} returns this
 */
proto.dac.ai.PriceSegment.prototype.setPriceRange = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 property_count = 2;
 * @return {number}
 */
proto.dac.ai.PriceSegment.prototype.getPropertyCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PriceSegment} returns this
 */
proto.dac.ai.PriceSegment.prototype.setPropertyCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double market_share = 3;
 * @return {number}
 */
proto.dac.ai.PriceSegment.prototype.getMarketShare = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PriceSegment} returns this
 */
proto.dac.ai.PriceSegment.prototype.setMarketShare = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double avg_days_on_market = 4;
 * @return {number}
 */
proto.dac.ai.PriceSegment.prototype.getAvgDaysOnMarket = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.PriceSegment} returns this
 */
proto.dac.ai.PriceSegment.prototype.setAvgDaysOnMarket = function(value) {
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
proto.dac.ai.InventoryAnalysis.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.InventoryAnalysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.InventoryAnalysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.InventoryAnalysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalListings: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newListings: jspb.Message.getFieldWithDefault(msg, 2, 0),
    soldProperties: jspb.Message.getFieldWithDefault(msg, 3, 0),
    monthsOfSupply: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.ai.InventoryAnalysis}
 */
proto.dac.ai.InventoryAnalysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.InventoryAnalysis;
  return proto.dac.ai.InventoryAnalysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.InventoryAnalysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.InventoryAnalysis}
 */
proto.dac.ai.InventoryAnalysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalListings(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNewListings(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSoldProperties(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMonthsOfSupply(value);
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
proto.dac.ai.InventoryAnalysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.InventoryAnalysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.InventoryAnalysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.InventoryAnalysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalListings();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNewListings();
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
  f = message.getMonthsOfSupply();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional int32 total_listings = 1;
 * @return {number}
 */
proto.dac.ai.InventoryAnalysis.prototype.getTotalListings = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.InventoryAnalysis} returns this
 */
proto.dac.ai.InventoryAnalysis.prototype.setTotalListings = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 new_listings = 2;
 * @return {number}
 */
proto.dac.ai.InventoryAnalysis.prototype.getNewListings = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.InventoryAnalysis} returns this
 */
proto.dac.ai.InventoryAnalysis.prototype.setNewListings = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 sold_properties = 3;
 * @return {number}
 */
proto.dac.ai.InventoryAnalysis.prototype.getSoldProperties = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.InventoryAnalysis} returns this
 */
proto.dac.ai.InventoryAnalysis.prototype.setSoldProperties = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double months_of_supply = 4;
 * @return {number}
 */
proto.dac.ai.InventoryAnalysis.prototype.getMonthsOfSupply = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.InventoryAnalysis} returns this
 */
proto.dac.ai.InventoryAnalysis.prototype.setMonthsOfSupply = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ProposalAnalysisRequest.repeatedFields_ = [3,4];



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
proto.dac.ai.ProposalAnalysisRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ProposalAnalysisRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ProposalAnalysisRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProposalAnalysisRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalContent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    proposalType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stakeholderGroupsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    relevantPoliciesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.dac.ai.ProposalAnalysisRequest}
 */
proto.dac.ai.ProposalAnalysisRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ProposalAnalysisRequest;
  return proto.dac.ai.ProposalAnalysisRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ProposalAnalysisRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ProposalAnalysisRequest}
 */
proto.dac.ai.ProposalAnalysisRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalContent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addStakeholderGroups(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addRelevantPolicies(value);
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
proto.dac.ai.ProposalAnalysisRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ProposalAnalysisRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ProposalAnalysisRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProposalAnalysisRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProposalType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStakeholderGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getRelevantPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string proposal_content = 1;
 * @return {string}
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.getProposalContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ProposalAnalysisRequest} returns this
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.setProposalContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string proposal_type = 2;
 * @return {string}
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.getProposalType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ProposalAnalysisRequest} returns this
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.setProposalType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string stakeholder_groups = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.getStakeholderGroupsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ProposalAnalysisRequest} returns this
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.setStakeholderGroupsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ProposalAnalysisRequest} returns this
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.addStakeholderGroups = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ProposalAnalysisRequest} returns this
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.clearStakeholderGroupsList = function() {
  return this.setStakeholderGroupsList([]);
};


/**
 * repeated string relevant_policies = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.getRelevantPoliciesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ProposalAnalysisRequest} returns this
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.setRelevantPoliciesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ProposalAnalysisRequest} returns this
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.addRelevantPolicies = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ProposalAnalysisRequest} returns this
 */
proto.dac.ai.ProposalAnalysisRequest.prototype.clearRelevantPoliciesList = function() {
  return this.setRelevantPoliciesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ProposalAnalysisResponse.repeatedFields_ = [2,3,4];



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
proto.dac.ai.ProposalAnalysisResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ProposalAnalysisResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ProposalAnalysisResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProposalAnalysisResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    analysis: (f = msg.getAnalysis()) && proto.dac.ai.ProposalAnalysisResult.toObject(includeInstance, f),
    recommendationsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    risksList: jspb.Message.toObjectList(msg.getRisksList(),
    proto.dac.ai.RiskAssessment.toObject, includeInstance),
    impactsList: jspb.Message.toObjectList(msg.getImpactsList(),
    proto.dac.ai.ImpactAssessment.toObject, includeInstance)
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
 * @return {!proto.dac.ai.ProposalAnalysisResponse}
 */
proto.dac.ai.ProposalAnalysisResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ProposalAnalysisResponse;
  return proto.dac.ai.ProposalAnalysisResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ProposalAnalysisResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ProposalAnalysisResponse}
 */
proto.dac.ai.ProposalAnalysisResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.ai.ProposalAnalysisResult;
      reader.readMessage(value,proto.dac.ai.ProposalAnalysisResult.deserializeBinaryFromReader);
      msg.setAnalysis(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecommendations(value);
      break;
    case 3:
      var value = new proto.dac.ai.RiskAssessment;
      reader.readMessage(value,proto.dac.ai.RiskAssessment.deserializeBinaryFromReader);
      msg.addRisks(value);
      break;
    case 4:
      var value = new proto.dac.ai.ImpactAssessment;
      reader.readMessage(value,proto.dac.ai.ImpactAssessment.deserializeBinaryFromReader);
      msg.addImpacts(value);
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
proto.dac.ai.ProposalAnalysisResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ProposalAnalysisResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ProposalAnalysisResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProposalAnalysisResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnalysis();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.ai.ProposalAnalysisResult.serializeBinaryToWriter
    );
  }
  f = message.getRecommendationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getRisksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dac.ai.RiskAssessment.serializeBinaryToWriter
    );
  }
  f = message.getImpactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.ai.ImpactAssessment.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProposalAnalysisResult analysis = 1;
 * @return {?proto.dac.ai.ProposalAnalysisResult}
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.getAnalysis = function() {
  return /** @type{?proto.dac.ai.ProposalAnalysisResult} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.ProposalAnalysisResult, 1));
};


/**
 * @param {?proto.dac.ai.ProposalAnalysisResult|undefined} value
 * @return {!proto.dac.ai.ProposalAnalysisResponse} returns this
*/
proto.dac.ai.ProposalAnalysisResponse.prototype.setAnalysis = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ProposalAnalysisResponse} returns this
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.clearAnalysis = function() {
  return this.setAnalysis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.hasAnalysis = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string recommendations = 2;
 * @return {!Array<string>}
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.getRecommendationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ProposalAnalysisResponse} returns this
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.setRecommendationsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ProposalAnalysisResponse} returns this
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.addRecommendations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ProposalAnalysisResponse} returns this
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.clearRecommendationsList = function() {
  return this.setRecommendationsList([]);
};


/**
 * repeated RiskAssessment risks = 3;
 * @return {!Array<!proto.dac.ai.RiskAssessment>}
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.getRisksList = function() {
  return /** @type{!Array<!proto.dac.ai.RiskAssessment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.RiskAssessment, 3));
};


/**
 * @param {!Array<!proto.dac.ai.RiskAssessment>} value
 * @return {!proto.dac.ai.ProposalAnalysisResponse} returns this
*/
proto.dac.ai.ProposalAnalysisResponse.prototype.setRisksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dac.ai.RiskAssessment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.RiskAssessment}
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.addRisks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dac.ai.RiskAssessment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ProposalAnalysisResponse} returns this
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.clearRisksList = function() {
  return this.setRisksList([]);
};


/**
 * repeated ImpactAssessment impacts = 4;
 * @return {!Array<!proto.dac.ai.ImpactAssessment>}
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.getImpactsList = function() {
  return /** @type{!Array<!proto.dac.ai.ImpactAssessment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ImpactAssessment, 4));
};


/**
 * @param {!Array<!proto.dac.ai.ImpactAssessment>} value
 * @return {!proto.dac.ai.ProposalAnalysisResponse} returns this
*/
proto.dac.ai.ProposalAnalysisResponse.prototype.setImpactsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.ai.ImpactAssessment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ImpactAssessment}
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.addImpacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.ai.ImpactAssessment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ProposalAnalysisResponse} returns this
 */
proto.dac.ai.ProposalAnalysisResponse.prototype.clearImpactsList = function() {
  return this.setImpactsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ProposalAnalysisResult.repeatedFields_ = [4,5];



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
proto.dac.ai.ProposalAnalysisResult.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ProposalAnalysisResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ProposalAnalysisResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProposalAnalysisResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    feasibilityScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    complexityScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    stakeholderAlignment: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    keyThemesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    potentialIssuesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.dac.ai.ProposalAnalysisResult}
 */
proto.dac.ai.ProposalAnalysisResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ProposalAnalysisResult;
  return proto.dac.ai.ProposalAnalysisResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ProposalAnalysisResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ProposalAnalysisResult}
 */
proto.dac.ai.ProposalAnalysisResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFeasibilityScore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setComplexityScore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStakeholderAlignment(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeyThemes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addPotentialIssues(value);
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
proto.dac.ai.ProposalAnalysisResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ProposalAnalysisResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ProposalAnalysisResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProposalAnalysisResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeasibilityScore();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getComplexityScore();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getStakeholderAlignment();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getKeyThemesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getPotentialIssuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional double feasibility_score = 1;
 * @return {number}
 */
proto.dac.ai.ProposalAnalysisResult.prototype.getFeasibilityScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ProposalAnalysisResult} returns this
 */
proto.dac.ai.ProposalAnalysisResult.prototype.setFeasibilityScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double complexity_score = 2;
 * @return {number}
 */
proto.dac.ai.ProposalAnalysisResult.prototype.getComplexityScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ProposalAnalysisResult} returns this
 */
proto.dac.ai.ProposalAnalysisResult.prototype.setComplexityScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double stakeholder_alignment = 3;
 * @return {number}
 */
proto.dac.ai.ProposalAnalysisResult.prototype.getStakeholderAlignment = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ProposalAnalysisResult} returns this
 */
proto.dac.ai.ProposalAnalysisResult.prototype.setStakeholderAlignment = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated string key_themes = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.ProposalAnalysisResult.prototype.getKeyThemesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ProposalAnalysisResult} returns this
 */
proto.dac.ai.ProposalAnalysisResult.prototype.setKeyThemesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ProposalAnalysisResult} returns this
 */
proto.dac.ai.ProposalAnalysisResult.prototype.addKeyThemes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ProposalAnalysisResult} returns this
 */
proto.dac.ai.ProposalAnalysisResult.prototype.clearKeyThemesList = function() {
  return this.setKeyThemesList([]);
};


/**
 * repeated string potential_issues = 5;
 * @return {!Array<string>}
 */
proto.dac.ai.ProposalAnalysisResult.prototype.getPotentialIssuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ProposalAnalysisResult} returns this
 */
proto.dac.ai.ProposalAnalysisResult.prototype.setPotentialIssuesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ProposalAnalysisResult} returns this
 */
proto.dac.ai.ProposalAnalysisResult.prototype.addPotentialIssues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ProposalAnalysisResult} returns this
 */
proto.dac.ai.ProposalAnalysisResult.prototype.clearPotentialIssuesList = function() {
  return this.setPotentialIssuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.RiskAssessment.repeatedFields_ = [4];



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
proto.dac.ai.RiskAssessment.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.RiskAssessment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.RiskAssessment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.RiskAssessment.toObject = function(includeInstance, msg) {
  var f, obj = {
    riskCategory: jspb.Message.getFieldWithDefault(msg, 1, ""),
    riskDescription: jspb.Message.getFieldWithDefault(msg, 2, ""),
    level: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mitigationStrategiesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.dac.ai.RiskAssessment}
 */
proto.dac.ai.RiskAssessment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.RiskAssessment;
  return proto.dac.ai.RiskAssessment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.RiskAssessment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.RiskAssessment}
 */
proto.dac.ai.RiskAssessment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRiskCategory(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRiskDescription(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.ai.RiskLevel} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addMitigationStrategies(value);
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
proto.dac.ai.RiskAssessment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.RiskAssessment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.RiskAssessment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.RiskAssessment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRiskCategory();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRiskDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMitigationStrategiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string risk_category = 1;
 * @return {string}
 */
proto.dac.ai.RiskAssessment.prototype.getRiskCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.RiskAssessment} returns this
 */
proto.dac.ai.RiskAssessment.prototype.setRiskCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string risk_description = 2;
 * @return {string}
 */
proto.dac.ai.RiskAssessment.prototype.getRiskDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.RiskAssessment} returns this
 */
proto.dac.ai.RiskAssessment.prototype.setRiskDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RiskLevel level = 3;
 * @return {!proto.dac.ai.RiskLevel}
 */
proto.dac.ai.RiskAssessment.prototype.getLevel = function() {
  return /** @type {!proto.dac.ai.RiskLevel} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.ai.RiskLevel} value
 * @return {!proto.dac.ai.RiskAssessment} returns this
 */
proto.dac.ai.RiskAssessment.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated string mitigation_strategies = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.RiskAssessment.prototype.getMitigationStrategiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.RiskAssessment} returns this
 */
proto.dac.ai.RiskAssessment.prototype.setMitigationStrategiesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.RiskAssessment} returns this
 */
proto.dac.ai.RiskAssessment.prototype.addMitigationStrategies = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.RiskAssessment} returns this
 */
proto.dac.ai.RiskAssessment.prototype.clearMitigationStrategiesList = function() {
  return this.setMitigationStrategiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ImpactAssessment.repeatedFields_ = [4];



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
proto.dac.ai.ImpactAssessment.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ImpactAssessment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ImpactAssessment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ImpactAssessment.toObject = function(includeInstance, msg) {
  var f, obj = {
    impactArea: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    level: jspb.Message.getFieldWithDefault(msg, 3, 0),
    affectedStakeholdersList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.dac.ai.ImpactAssessment}
 */
proto.dac.ai.ImpactAssessment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ImpactAssessment;
  return proto.dac.ai.ImpactAssessment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ImpactAssessment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ImpactAssessment}
 */
proto.dac.ai.ImpactAssessment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImpactArea(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.ai.ImpactLevel} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAffectedStakeholders(value);
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
proto.dac.ai.ImpactAssessment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ImpactAssessment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ImpactAssessment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ImpactAssessment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImpactArea();
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
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAffectedStakeholdersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string impact_area = 1;
 * @return {string}
 */
proto.dac.ai.ImpactAssessment.prototype.getImpactArea = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ImpactAssessment} returns this
 */
proto.dac.ai.ImpactAssessment.prototype.setImpactArea = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dac.ai.ImpactAssessment.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ImpactAssessment} returns this
 */
proto.dac.ai.ImpactAssessment.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ImpactLevel level = 3;
 * @return {!proto.dac.ai.ImpactLevel}
 */
proto.dac.ai.ImpactAssessment.prototype.getLevel = function() {
  return /** @type {!proto.dac.ai.ImpactLevel} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.ai.ImpactLevel} value
 * @return {!proto.dac.ai.ImpactAssessment} returns this
 */
proto.dac.ai.ImpactAssessment.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated string affected_stakeholders = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.ImpactAssessment.prototype.getAffectedStakeholdersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ImpactAssessment} returns this
 */
proto.dac.ai.ImpactAssessment.prototype.setAffectedStakeholdersList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ImpactAssessment} returns this
 */
proto.dac.ai.ImpactAssessment.prototype.addAffectedStakeholders = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ImpactAssessment} returns this
 */
proto.dac.ai.ImpactAssessment.prototype.clearAffectedStakeholdersList = function() {
  return this.setAffectedStakeholdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ProposalGenerationRequest.repeatedFields_ = [1,3];



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
proto.dac.ai.ProposalGenerationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ProposalGenerationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ProposalGenerationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProposalGenerationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    communityFeedbackList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    proposalCategory: jspb.Message.getFieldWithDefault(msg, 2, ""),
    policyConstraintsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    targetOutcome: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.dac.ai.ProposalGenerationRequest}
 */
proto.dac.ai.ProposalGenerationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ProposalGenerationRequest;
  return proto.dac.ai.ProposalGenerationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ProposalGenerationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ProposalGenerationRequest}
 */
proto.dac.ai.ProposalGenerationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addCommunityFeedback(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPolicyConstraints(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetOutcome(value);
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
proto.dac.ai.ProposalGenerationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ProposalGenerationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ProposalGenerationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProposalGenerationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommunityFeedbackList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getProposalCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPolicyConstraintsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getTargetOutcome();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated string community_feedback = 1;
 * @return {!Array<string>}
 */
proto.dac.ai.ProposalGenerationRequest.prototype.getCommunityFeedbackList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ProposalGenerationRequest} returns this
 */
proto.dac.ai.ProposalGenerationRequest.prototype.setCommunityFeedbackList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ProposalGenerationRequest} returns this
 */
proto.dac.ai.ProposalGenerationRequest.prototype.addCommunityFeedback = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ProposalGenerationRequest} returns this
 */
proto.dac.ai.ProposalGenerationRequest.prototype.clearCommunityFeedbackList = function() {
  return this.setCommunityFeedbackList([]);
};


/**
 * optional string proposal_category = 2;
 * @return {string}
 */
proto.dac.ai.ProposalGenerationRequest.prototype.getProposalCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ProposalGenerationRequest} returns this
 */
proto.dac.ai.ProposalGenerationRequest.prototype.setProposalCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string policy_constraints = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.ProposalGenerationRequest.prototype.getPolicyConstraintsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ProposalGenerationRequest} returns this
 */
proto.dac.ai.ProposalGenerationRequest.prototype.setPolicyConstraintsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ProposalGenerationRequest} returns this
 */
proto.dac.ai.ProposalGenerationRequest.prototype.addPolicyConstraints = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ProposalGenerationRequest} returns this
 */
proto.dac.ai.ProposalGenerationRequest.prototype.clearPolicyConstraintsList = function() {
  return this.setPolicyConstraintsList([]);
};


/**
 * optional string target_outcome = 4;
 * @return {string}
 */
proto.dac.ai.ProposalGenerationRequest.prototype.getTargetOutcome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ProposalGenerationRequest} returns this
 */
proto.dac.ai.ProposalGenerationRequest.prototype.setTargetOutcome = function(value) {
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
proto.dac.ai.ProposalGenerationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ProposalGenerationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ProposalGenerationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProposalGenerationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    progressPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    proposal: (f = msg.getProposal()) && proto.dac.ai.GeneratedProposal.toObject(includeInstance, f)
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
 * @return {!proto.dac.ai.ProposalGenerationResponse}
 */
proto.dac.ai.ProposalGenerationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ProposalGenerationResponse;
  return proto.dac.ai.ProposalGenerationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ProposalGenerationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ProposalGenerationResponse}
 */
proto.dac.ai.ProposalGenerationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.ai.GenerationStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProgressPercentage(value);
      break;
    case 4:
      var value = new proto.dac.ai.GeneratedProposal;
      reader.readMessage(value,proto.dac.ai.GeneratedProposal.deserializeBinaryFromReader);
      msg.setProposal(value);
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
proto.dac.ai.ProposalGenerationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ProposalGenerationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ProposalGenerationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProposalGenerationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
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
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dac.ai.GeneratedProposal.serializeBinaryToWriter
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.dac.ai.ProposalGenerationResponse.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ProposalGenerationResponse} returns this
 */
proto.dac.ai.ProposalGenerationResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GenerationStatus status = 2;
 * @return {!proto.dac.ai.GenerationStatus}
 */
proto.dac.ai.ProposalGenerationResponse.prototype.getStatus = function() {
  return /** @type {!proto.dac.ai.GenerationStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.ai.GenerationStatus} value
 * @return {!proto.dac.ai.ProposalGenerationResponse} returns this
 */
proto.dac.ai.ProposalGenerationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double progress_percentage = 3;
 * @return {number}
 */
proto.dac.ai.ProposalGenerationResponse.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ProposalGenerationResponse} returns this
 */
proto.dac.ai.ProposalGenerationResponse.prototype.setProgressPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional GeneratedProposal proposal = 4;
 * @return {?proto.dac.ai.GeneratedProposal}
 */
proto.dac.ai.ProposalGenerationResponse.prototype.getProposal = function() {
  return /** @type{?proto.dac.ai.GeneratedProposal} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.GeneratedProposal, 4));
};


/**
 * @param {?proto.dac.ai.GeneratedProposal|undefined} value
 * @return {!proto.dac.ai.ProposalGenerationResponse} returns this
*/
proto.dac.ai.ProposalGenerationResponse.prototype.setProposal = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ProposalGenerationResponse} returns this
 */
proto.dac.ai.ProposalGenerationResponse.prototype.clearProposal = function() {
  return this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ProposalGenerationResponse.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.GeneratedProposal.repeatedFields_ = [4,5];



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
proto.dac.ai.GeneratedProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.GeneratedProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.GeneratedProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.GeneratedProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    detailedContent: jspb.Message.getFieldWithDefault(msg, 3, ""),
    implementationStepsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    successMetricsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    votingRecommendation: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.dac.ai.GeneratedProposal}
 */
proto.dac.ai.GeneratedProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.GeneratedProposal;
  return proto.dac.ai.GeneratedProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.GeneratedProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.GeneratedProposal}
 */
proto.dac.ai.GeneratedProposal.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDetailedContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addImplementationSteps(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addSuccessMetrics(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVotingRecommendation(value);
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
proto.dac.ai.GeneratedProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.GeneratedProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.GeneratedProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.GeneratedProposal.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDetailedContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImplementationStepsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getSuccessMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getVotingRecommendation();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.dac.ai.GeneratedProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.GeneratedProposal} returns this
 */
proto.dac.ai.GeneratedProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dac.ai.GeneratedProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.GeneratedProposal} returns this
 */
proto.dac.ai.GeneratedProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string detailed_content = 3;
 * @return {string}
 */
proto.dac.ai.GeneratedProposal.prototype.getDetailedContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.GeneratedProposal} returns this
 */
proto.dac.ai.GeneratedProposal.prototype.setDetailedContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string implementation_steps = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.GeneratedProposal.prototype.getImplementationStepsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.GeneratedProposal} returns this
 */
proto.dac.ai.GeneratedProposal.prototype.setImplementationStepsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.GeneratedProposal} returns this
 */
proto.dac.ai.GeneratedProposal.prototype.addImplementationSteps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.GeneratedProposal} returns this
 */
proto.dac.ai.GeneratedProposal.prototype.clearImplementationStepsList = function() {
  return this.setImplementationStepsList([]);
};


/**
 * repeated string success_metrics = 5;
 * @return {!Array<string>}
 */
proto.dac.ai.GeneratedProposal.prototype.getSuccessMetricsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.GeneratedProposal} returns this
 */
proto.dac.ai.GeneratedProposal.prototype.setSuccessMetricsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.GeneratedProposal} returns this
 */
proto.dac.ai.GeneratedProposal.prototype.addSuccessMetrics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.GeneratedProposal} returns this
 */
proto.dac.ai.GeneratedProposal.prototype.clearSuccessMetricsList = function() {
  return this.setSuccessMetricsList([]);
};


/**
 * optional string voting_recommendation = 6;
 * @return {string}
 */
proto.dac.ai.GeneratedProposal.prototype.getVotingRecommendation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.GeneratedProposal} returns this
 */
proto.dac.ai.GeneratedProposal.prototype.setVotingRecommendation = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.VotingPatternRequest.repeatedFields_ = [1];



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
proto.dac.ai.VotingPatternRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.VotingPatternRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.VotingPatternRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.VotingPatternRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.dac.ai.VotingPatternRequest}
 */
proto.dac.ai.VotingPatternRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.VotingPatternRequest;
  return proto.dac.ai.VotingPatternRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.VotingPatternRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.VotingPatternRequest}
 */
proto.dac.ai.VotingPatternRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProposalIds(values[i]);
      }
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
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
proto.dac.ai.VotingPatternRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.VotingPatternRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.VotingPatternRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.VotingPatternRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
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
 * repeated int32 proposal_ids = 1;
 * @return {!Array<number>}
 */
proto.dac.ai.VotingPatternRequest.prototype.getProposalIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.dac.ai.VotingPatternRequest} returns this
 */
proto.dac.ai.VotingPatternRequest.prototype.setProposalIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.VotingPatternRequest} returns this
 */
proto.dac.ai.VotingPatternRequest.prototype.addProposalIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.VotingPatternRequest} returns this
 */
proto.dac.ai.VotingPatternRequest.prototype.clearProposalIdsList = function() {
  return this.setProposalIdsList([]);
};


/**
 * optional int32 user_id = 2;
 * @return {number}
 */
proto.dac.ai.VotingPatternRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.VotingPatternRequest} returns this
 */
proto.dac.ai.VotingPatternRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.dac.ai.VotingPatternRequest} returns this
 */
proto.dac.ai.VotingPatternRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.VotingPatternRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp start_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.ai.VotingPatternRequest.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.ai.VotingPatternRequest} returns this
*/
proto.dac.ai.VotingPatternRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.VotingPatternRequest} returns this
 */
proto.dac.ai.VotingPatternRequest.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.VotingPatternRequest.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.ai.VotingPatternRequest.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.ai.VotingPatternRequest} returns this
*/
proto.dac.ai.VotingPatternRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.VotingPatternRequest} returns this
 */
proto.dac.ai.VotingPatternRequest.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.VotingPatternRequest.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.VotingPatternResponse.repeatedFields_ = [2,3];



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
proto.dac.ai.VotingPatternResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.VotingPatternResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.VotingPatternResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.VotingPatternResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    analysis: (f = msg.getAnalysis()) && proto.dac.ai.VotingPatternAnalysis.toObject(includeInstance, f),
    clustersList: jspb.Message.toObjectList(msg.getClustersList(),
    proto.dac.ai.VotingCluster.toObject, includeInstance),
    insightsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.dac.ai.VotingPatternResponse}
 */
proto.dac.ai.VotingPatternResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.VotingPatternResponse;
  return proto.dac.ai.VotingPatternResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.VotingPatternResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.VotingPatternResponse}
 */
proto.dac.ai.VotingPatternResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.ai.VotingPatternAnalysis;
      reader.readMessage(value,proto.dac.ai.VotingPatternAnalysis.deserializeBinaryFromReader);
      msg.setAnalysis(value);
      break;
    case 2:
      var value = new proto.dac.ai.VotingCluster;
      reader.readMessage(value,proto.dac.ai.VotingCluster.deserializeBinaryFromReader);
      msg.addClusters(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
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
proto.dac.ai.VotingPatternResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.VotingPatternResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.VotingPatternResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.VotingPatternResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnalysis();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.ai.VotingPatternAnalysis.serializeBinaryToWriter
    );
  }
  f = message.getClustersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.dac.ai.VotingCluster.serializeBinaryToWriter
    );
  }
  f = message.getInsightsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional VotingPatternAnalysis analysis = 1;
 * @return {?proto.dac.ai.VotingPatternAnalysis}
 */
proto.dac.ai.VotingPatternResponse.prototype.getAnalysis = function() {
  return /** @type{?proto.dac.ai.VotingPatternAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.VotingPatternAnalysis, 1));
};


/**
 * @param {?proto.dac.ai.VotingPatternAnalysis|undefined} value
 * @return {!proto.dac.ai.VotingPatternResponse} returns this
*/
proto.dac.ai.VotingPatternResponse.prototype.setAnalysis = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.VotingPatternResponse} returns this
 */
proto.dac.ai.VotingPatternResponse.prototype.clearAnalysis = function() {
  return this.setAnalysis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.VotingPatternResponse.prototype.hasAnalysis = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated VotingCluster clusters = 2;
 * @return {!Array<!proto.dac.ai.VotingCluster>}
 */
proto.dac.ai.VotingPatternResponse.prototype.getClustersList = function() {
  return /** @type{!Array<!proto.dac.ai.VotingCluster>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.VotingCluster, 2));
};


/**
 * @param {!Array<!proto.dac.ai.VotingCluster>} value
 * @return {!proto.dac.ai.VotingPatternResponse} returns this
*/
proto.dac.ai.VotingPatternResponse.prototype.setClustersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dac.ai.VotingCluster=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.VotingCluster}
 */
proto.dac.ai.VotingPatternResponse.prototype.addClusters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dac.ai.VotingCluster, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.VotingPatternResponse} returns this
 */
proto.dac.ai.VotingPatternResponse.prototype.clearClustersList = function() {
  return this.setClustersList([]);
};


/**
 * repeated string insights = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.VotingPatternResponse.prototype.getInsightsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.VotingPatternResponse} returns this
 */
proto.dac.ai.VotingPatternResponse.prototype.setInsightsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.VotingPatternResponse} returns this
 */
proto.dac.ai.VotingPatternResponse.prototype.addInsights = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.VotingPatternResponse} returns this
 */
proto.dac.ai.VotingPatternResponse.prototype.clearInsightsList = function() {
  return this.setInsightsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.VotingPatternAnalysis.repeatedFields_ = [3,4];



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
proto.dac.ai.VotingPatternAnalysis.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.VotingPatternAnalysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.VotingPatternAnalysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.VotingPatternAnalysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    participationRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    consensusLevel: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    dominantPatternsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    anomaliesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.dac.ai.VotingPatternAnalysis}
 */
proto.dac.ai.VotingPatternAnalysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.VotingPatternAnalysis;
  return proto.dac.ai.VotingPatternAnalysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.VotingPatternAnalysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.VotingPatternAnalysis}
 */
proto.dac.ai.VotingPatternAnalysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setParticipationRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConsensusLevel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addDominantPatterns(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAnomalies(value);
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
proto.dac.ai.VotingPatternAnalysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.VotingPatternAnalysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.VotingPatternAnalysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.VotingPatternAnalysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipationRate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getConsensusLevel();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getDominantPatternsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getAnomaliesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional double participation_rate = 1;
 * @return {number}
 */
proto.dac.ai.VotingPatternAnalysis.prototype.getParticipationRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.VotingPatternAnalysis} returns this
 */
proto.dac.ai.VotingPatternAnalysis.prototype.setParticipationRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double consensus_level = 2;
 * @return {number}
 */
proto.dac.ai.VotingPatternAnalysis.prototype.getConsensusLevel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.VotingPatternAnalysis} returns this
 */
proto.dac.ai.VotingPatternAnalysis.prototype.setConsensusLevel = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated string dominant_patterns = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.VotingPatternAnalysis.prototype.getDominantPatternsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.VotingPatternAnalysis} returns this
 */
proto.dac.ai.VotingPatternAnalysis.prototype.setDominantPatternsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.VotingPatternAnalysis} returns this
 */
proto.dac.ai.VotingPatternAnalysis.prototype.addDominantPatterns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.VotingPatternAnalysis} returns this
 */
proto.dac.ai.VotingPatternAnalysis.prototype.clearDominantPatternsList = function() {
  return this.setDominantPatternsList([]);
};


/**
 * repeated string anomalies = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.VotingPatternAnalysis.prototype.getAnomaliesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.VotingPatternAnalysis} returns this
 */
proto.dac.ai.VotingPatternAnalysis.prototype.setAnomaliesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.VotingPatternAnalysis} returns this
 */
proto.dac.ai.VotingPatternAnalysis.prototype.addAnomalies = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.VotingPatternAnalysis} returns this
 */
proto.dac.ai.VotingPatternAnalysis.prototype.clearAnomaliesList = function() {
  return this.setAnomaliesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.VotingCluster.repeatedFields_ = [2,3];



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
proto.dac.ai.VotingCluster.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.VotingCluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.VotingCluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.VotingCluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    commonTraitsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    cohesionScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.ai.VotingCluster}
 */
proto.dac.ai.VotingCluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.VotingCluster;
  return proto.dac.ai.VotingCluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.VotingCluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.VotingCluster}
 */
proto.dac.ai.VotingCluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addUserIds(values[i]);
      }
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCommonTraits(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCohesionScore(value);
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
proto.dac.ai.VotingCluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.VotingCluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.VotingCluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.VotingCluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getCommonTraitsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getCohesionScore();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional string cluster_name = 1;
 * @return {string}
 */
proto.dac.ai.VotingCluster.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.VotingCluster} returns this
 */
proto.dac.ai.VotingCluster.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated int32 user_ids = 2;
 * @return {!Array<number>}
 */
proto.dac.ai.VotingCluster.prototype.getUserIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.dac.ai.VotingCluster} returns this
 */
proto.dac.ai.VotingCluster.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.VotingCluster} returns this
 */
proto.dac.ai.VotingCluster.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.VotingCluster} returns this
 */
proto.dac.ai.VotingCluster.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * repeated string common_traits = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.VotingCluster.prototype.getCommonTraitsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.VotingCluster} returns this
 */
proto.dac.ai.VotingCluster.prototype.setCommonTraitsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.VotingCluster} returns this
 */
proto.dac.ai.VotingCluster.prototype.addCommonTraits = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.VotingCluster} returns this
 */
proto.dac.ai.VotingCluster.prototype.clearCommonTraitsList = function() {
  return this.setCommonTraitsList([]);
};


/**
 * optional double cohesion_score = 4;
 * @return {number}
 */
proto.dac.ai.VotingCluster.prototype.getCohesionScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.VotingCluster} returns this
 */
proto.dac.ai.VotingCluster.prototype.setCohesionScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ReviewBatchRequest.repeatedFields_ = [1,3];



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
proto.dac.ai.ReviewBatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ReviewBatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ReviewBatchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewBatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reviewsList: jspb.Message.toObjectList(msg.getReviewsList(),
    proto.dac.ai.ReviewData.toObject, includeInstance),
    analysisType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    focusAreasList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.dac.ai.ReviewBatchRequest}
 */
proto.dac.ai.ReviewBatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ReviewBatchRequest;
  return proto.dac.ai.ReviewBatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ReviewBatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ReviewBatchRequest}
 */
proto.dac.ai.ReviewBatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.ai.ReviewData;
      reader.readMessage(value,proto.dac.ai.ReviewData.deserializeBinaryFromReader);
      msg.addReviews(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalysisType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFocusAreas(value);
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
proto.dac.ai.ReviewBatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ReviewBatchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ReviewBatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewBatchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReviewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.ai.ReviewData.serializeBinaryToWriter
    );
  }
  f = message.getAnalysisType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFocusAreasList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated ReviewData reviews = 1;
 * @return {!Array<!proto.dac.ai.ReviewData>}
 */
proto.dac.ai.ReviewBatchRequest.prototype.getReviewsList = function() {
  return /** @type{!Array<!proto.dac.ai.ReviewData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ReviewData, 1));
};


/**
 * @param {!Array<!proto.dac.ai.ReviewData>} value
 * @return {!proto.dac.ai.ReviewBatchRequest} returns this
*/
proto.dac.ai.ReviewBatchRequest.prototype.setReviewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.ai.ReviewData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewData}
 */
proto.dac.ai.ReviewBatchRequest.prototype.addReviews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.ai.ReviewData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewBatchRequest} returns this
 */
proto.dac.ai.ReviewBatchRequest.prototype.clearReviewsList = function() {
  return this.setReviewsList([]);
};


/**
 * optional string analysis_type = 2;
 * @return {string}
 */
proto.dac.ai.ReviewBatchRequest.prototype.getAnalysisType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewBatchRequest} returns this
 */
proto.dac.ai.ReviewBatchRequest.prototype.setAnalysisType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string focus_areas = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.ReviewBatchRequest.prototype.getFocusAreasList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ReviewBatchRequest} returns this
 */
proto.dac.ai.ReviewBatchRequest.prototype.setFocusAreasList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewBatchRequest} returns this
 */
proto.dac.ai.ReviewBatchRequest.prototype.addFocusAreas = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewBatchRequest} returns this
 */
proto.dac.ai.ReviewBatchRequest.prototype.clearFocusAreasList = function() {
  return this.setFocusAreasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ReviewData.repeatedFields_ = [7];



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
proto.dac.ai.ReviewData.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ReviewData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ReviewData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rating: jspb.Message.getFieldWithDefault(msg, 3, 0),
    author: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    category: jspb.Message.getFieldWithDefault(msg, 6, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.dac.ai.ReviewData}
 */
proto.dac.ai.ReviewData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ReviewData;
  return proto.dac.ai.ReviewData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ReviewData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ReviewData}
 */
proto.dac.ai.ReviewData.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRating(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.dac.ai.ReviewData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ReviewData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ReviewData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
  f = message.getRating();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.dac.ai.ReviewData.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewData} returns this
 */
proto.dac.ai.ReviewData.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.dac.ai.ReviewData.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewData} returns this
 */
proto.dac.ai.ReviewData.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 rating = 3;
 * @return {number}
 */
proto.dac.ai.ReviewData.prototype.getRating = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ReviewData} returns this
 */
proto.dac.ai.ReviewData.prototype.setRating = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string author = 4;
 * @return {string}
 */
proto.dac.ai.ReviewData.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewData} returns this
 */
proto.dac.ai.ReviewData.prototype.setAuthor = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.ai.ReviewData.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.ai.ReviewData} returns this
*/
proto.dac.ai.ReviewData.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ReviewData} returns this
 */
proto.dac.ai.ReviewData.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ReviewData.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string category = 6;
 * @return {string}
 */
proto.dac.ai.ReviewData.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewData} returns this
 */
proto.dac.ai.ReviewData.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string tags = 7;
 * @return {!Array<string>}
 */
proto.dac.ai.ReviewData.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ReviewData} returns this
 */
proto.dac.ai.ReviewData.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewData} returns this
 */
proto.dac.ai.ReviewData.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewData} returns this
 */
proto.dac.ai.ReviewData.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ReviewAnalysisResponse.repeatedFields_ = [4];



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
proto.dac.ai.ReviewAnalysisResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ReviewAnalysisResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ReviewAnalysisResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewAnalysisResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    progressPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.dac.ai.ReviewAnalysisResult.toObject, includeInstance)
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
 * @return {!proto.dac.ai.ReviewAnalysisResponse}
 */
proto.dac.ai.ReviewAnalysisResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ReviewAnalysisResponse;
  return proto.dac.ai.ReviewAnalysisResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ReviewAnalysisResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ReviewAnalysisResponse}
 */
proto.dac.ai.ReviewAnalysisResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBatchId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.ai.AnalysisStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProgressPercentage(value);
      break;
    case 4:
      var value = new proto.dac.ai.ReviewAnalysisResult;
      reader.readMessage(value,proto.dac.ai.ReviewAnalysisResult.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.dac.ai.ReviewAnalysisResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ReviewAnalysisResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ReviewAnalysisResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewAnalysisResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchId();
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
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.ai.ReviewAnalysisResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string batch_id = 1;
 * @return {string}
 */
proto.dac.ai.ReviewAnalysisResponse.prototype.getBatchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewAnalysisResponse} returns this
 */
proto.dac.ai.ReviewAnalysisResponse.prototype.setBatchId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AnalysisStatus status = 2;
 * @return {!proto.dac.ai.AnalysisStatus}
 */
proto.dac.ai.ReviewAnalysisResponse.prototype.getStatus = function() {
  return /** @type {!proto.dac.ai.AnalysisStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.ai.AnalysisStatus} value
 * @return {!proto.dac.ai.ReviewAnalysisResponse} returns this
 */
proto.dac.ai.ReviewAnalysisResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double progress_percentage = 3;
 * @return {number}
 */
proto.dac.ai.ReviewAnalysisResponse.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ReviewAnalysisResponse} returns this
 */
proto.dac.ai.ReviewAnalysisResponse.prototype.setProgressPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated ReviewAnalysisResult results = 4;
 * @return {!Array<!proto.dac.ai.ReviewAnalysisResult>}
 */
proto.dac.ai.ReviewAnalysisResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.dac.ai.ReviewAnalysisResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ReviewAnalysisResult, 4));
};


/**
 * @param {!Array<!proto.dac.ai.ReviewAnalysisResult>} value
 * @return {!proto.dac.ai.ReviewAnalysisResponse} returns this
*/
proto.dac.ai.ReviewAnalysisResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.ai.ReviewAnalysisResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewAnalysisResult}
 */
proto.dac.ai.ReviewAnalysisResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.ai.ReviewAnalysisResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewAnalysisResponse} returns this
 */
proto.dac.ai.ReviewAnalysisResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ReviewAnalysisResult.repeatedFields_ = [3,4];



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
proto.dac.ai.ReviewAnalysisResult.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ReviewAnalysisResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ReviewAnalysisResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewAnalysisResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    reviewId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sentiment: (f = msg.getSentiment()) && proto.dac.ai.SentimentAnalysis.toObject(includeInstance, f),
    keyTopicsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    issuesIdentifiedList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    qualityScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    categoryClassification: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.dac.ai.ReviewAnalysisResult}
 */
proto.dac.ai.ReviewAnalysisResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ReviewAnalysisResult;
  return proto.dac.ai.ReviewAnalysisResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ReviewAnalysisResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ReviewAnalysisResult}
 */
proto.dac.ai.ReviewAnalysisResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReviewId(value);
      break;
    case 2:
      var value = new proto.dac.ai.SentimentAnalysis;
      reader.readMessage(value,proto.dac.ai.SentimentAnalysis.deserializeBinaryFromReader);
      msg.setSentiment(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeyTopics(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addIssuesIdentified(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQualityScore(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoryClassification(value);
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
proto.dac.ai.ReviewAnalysisResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ReviewAnalysisResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ReviewAnalysisResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewAnalysisResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReviewId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSentiment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.ai.SentimentAnalysis.serializeBinaryToWriter
    );
  }
  f = message.getKeyTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getIssuesIdentifiedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getQualityScore();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getCategoryClassification();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string review_id = 1;
 * @return {string}
 */
proto.dac.ai.ReviewAnalysisResult.prototype.getReviewId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
 */
proto.dac.ai.ReviewAnalysisResult.prototype.setReviewId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SentimentAnalysis sentiment = 2;
 * @return {?proto.dac.ai.SentimentAnalysis}
 */
proto.dac.ai.ReviewAnalysisResult.prototype.getSentiment = function() {
  return /** @type{?proto.dac.ai.SentimentAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.SentimentAnalysis, 2));
};


/**
 * @param {?proto.dac.ai.SentimentAnalysis|undefined} value
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
*/
proto.dac.ai.ReviewAnalysisResult.prototype.setSentiment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
 */
proto.dac.ai.ReviewAnalysisResult.prototype.clearSentiment = function() {
  return this.setSentiment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ReviewAnalysisResult.prototype.hasSentiment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string key_topics = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.ReviewAnalysisResult.prototype.getKeyTopicsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
 */
proto.dac.ai.ReviewAnalysisResult.prototype.setKeyTopicsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
 */
proto.dac.ai.ReviewAnalysisResult.prototype.addKeyTopics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
 */
proto.dac.ai.ReviewAnalysisResult.prototype.clearKeyTopicsList = function() {
  return this.setKeyTopicsList([]);
};


/**
 * repeated string issues_identified = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.ReviewAnalysisResult.prototype.getIssuesIdentifiedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
 */
proto.dac.ai.ReviewAnalysisResult.prototype.setIssuesIdentifiedList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
 */
proto.dac.ai.ReviewAnalysisResult.prototype.addIssuesIdentified = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
 */
proto.dac.ai.ReviewAnalysisResult.prototype.clearIssuesIdentifiedList = function() {
  return this.setIssuesIdentifiedList([]);
};


/**
 * optional double quality_score = 5;
 * @return {number}
 */
proto.dac.ai.ReviewAnalysisResult.prototype.getQualityScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
 */
proto.dac.ai.ReviewAnalysisResult.prototype.setQualityScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string category_classification = 6;
 * @return {string}
 */
proto.dac.ai.ReviewAnalysisResult.prototype.getCategoryClassification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewAnalysisResult} returns this
 */
proto.dac.ai.ReviewAnalysisResult.prototype.setCategoryClassification = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.SentimentAnalysis.repeatedFields_ = [4];



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
proto.dac.ai.SentimentAnalysis.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.SentimentAnalysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.SentimentAnalysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SentimentAnalysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    sentimentScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    sentimentLabel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    emotionsList: jspb.Message.toObjectList(msg.getEmotionsList(),
    proto.dac.ai.EmotionScore.toObject, includeInstance)
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
 * @return {!proto.dac.ai.SentimentAnalysis}
 */
proto.dac.ai.SentimentAnalysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.SentimentAnalysis;
  return proto.dac.ai.SentimentAnalysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.SentimentAnalysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.SentimentAnalysis}
 */
proto.dac.ai.SentimentAnalysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSentimentScore(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSentimentLabel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConfidence(value);
      break;
    case 4:
      var value = new proto.dac.ai.EmotionScore;
      reader.readMessage(value,proto.dac.ai.EmotionScore.deserializeBinaryFromReader);
      msg.addEmotions(value);
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
proto.dac.ai.SentimentAnalysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.SentimentAnalysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.SentimentAnalysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SentimentAnalysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSentimentScore();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getSentimentLabel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getEmotionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dac.ai.EmotionScore.serializeBinaryToWriter
    );
  }
};


/**
 * optional double sentiment_score = 1;
 * @return {number}
 */
proto.dac.ai.SentimentAnalysis.prototype.getSentimentScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SentimentAnalysis} returns this
 */
proto.dac.ai.SentimentAnalysis.prototype.setSentimentScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string sentiment_label = 2;
 * @return {string}
 */
proto.dac.ai.SentimentAnalysis.prototype.getSentimentLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.SentimentAnalysis} returns this
 */
proto.dac.ai.SentimentAnalysis.prototype.setSentimentLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double confidence = 3;
 * @return {number}
 */
proto.dac.ai.SentimentAnalysis.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SentimentAnalysis} returns this
 */
proto.dac.ai.SentimentAnalysis.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated EmotionScore emotions = 4;
 * @return {!Array<!proto.dac.ai.EmotionScore>}
 */
proto.dac.ai.SentimentAnalysis.prototype.getEmotionsList = function() {
  return /** @type{!Array<!proto.dac.ai.EmotionScore>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.EmotionScore, 4));
};


/**
 * @param {!Array<!proto.dac.ai.EmotionScore>} value
 * @return {!proto.dac.ai.SentimentAnalysis} returns this
*/
proto.dac.ai.SentimentAnalysis.prototype.setEmotionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dac.ai.EmotionScore=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.EmotionScore}
 */
proto.dac.ai.SentimentAnalysis.prototype.addEmotions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dac.ai.EmotionScore, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.SentimentAnalysis} returns this
 */
proto.dac.ai.SentimentAnalysis.prototype.clearEmotionsList = function() {
  return this.setEmotionsList([]);
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
proto.dac.ai.EmotionScore.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.EmotionScore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.EmotionScore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.EmotionScore.toObject = function(includeInstance, msg) {
  var f, obj = {
    emotion: jspb.Message.getFieldWithDefault(msg, 1, ""),
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.dac.ai.EmotionScore}
 */
proto.dac.ai.EmotionScore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.EmotionScore;
  return proto.dac.ai.EmotionScore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.EmotionScore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.EmotionScore}
 */
proto.dac.ai.EmotionScore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmotion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScore(value);
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
proto.dac.ai.EmotionScore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.EmotionScore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.EmotionScore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.EmotionScore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmotion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string emotion = 1;
 * @return {string}
 */
proto.dac.ai.EmotionScore.prototype.getEmotion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.EmotionScore} returns this
 */
proto.dac.ai.EmotionScore.prototype.setEmotion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double score = 2;
 * @return {number}
 */
proto.dac.ai.EmotionScore.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.EmotionScore} returns this
 */
proto.dac.ai.EmotionScore.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ReviewSentimentRequest.repeatedFields_ = [1];



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
proto.dac.ai.ReviewSentimentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ReviewSentimentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ReviewSentimentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewSentimentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reviewIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    aggregationMethod: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.dac.ai.ReviewSentimentRequest}
 */
proto.dac.ai.ReviewSentimentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ReviewSentimentRequest;
  return proto.dac.ai.ReviewSentimentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ReviewSentimentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ReviewSentimentRequest}
 */
proto.dac.ai.ReviewSentimentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addReviewIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregationMethod(value);
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
proto.dac.ai.ReviewSentimentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ReviewSentimentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ReviewSentimentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewSentimentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReviewIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAggregationMethod();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string review_ids = 1;
 * @return {!Array<string>}
 */
proto.dac.ai.ReviewSentimentRequest.prototype.getReviewIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ReviewSentimentRequest} returns this
 */
proto.dac.ai.ReviewSentimentRequest.prototype.setReviewIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewSentimentRequest} returns this
 */
proto.dac.ai.ReviewSentimentRequest.prototype.addReviewIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewSentimentRequest} returns this
 */
proto.dac.ai.ReviewSentimentRequest.prototype.clearReviewIdsList = function() {
  return this.setReviewIdsList([]);
};


/**
 * optional string aggregation_method = 2;
 * @return {string}
 */
proto.dac.ai.ReviewSentimentRequest.prototype.getAggregationMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewSentimentRequest} returns this
 */
proto.dac.ai.ReviewSentimentRequest.prototype.setAggregationMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ReviewSentimentResponse.repeatedFields_ = [2];



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
proto.dac.ai.ReviewSentimentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ReviewSentimentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ReviewSentimentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewSentimentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    overallSentiment: (f = msg.getOverallSentiment()) && proto.dac.ai.SentimentSummary.toObject(includeInstance, f),
    detailsList: jspb.Message.toObjectList(msg.getDetailsList(),
    proto.dac.ai.ReviewSentimentDetail.toObject, includeInstance)
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
 * @return {!proto.dac.ai.ReviewSentimentResponse}
 */
proto.dac.ai.ReviewSentimentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ReviewSentimentResponse;
  return proto.dac.ai.ReviewSentimentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ReviewSentimentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ReviewSentimentResponse}
 */
proto.dac.ai.ReviewSentimentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.ai.SentimentSummary;
      reader.readMessage(value,proto.dac.ai.SentimentSummary.deserializeBinaryFromReader);
      msg.setOverallSentiment(value);
      break;
    case 2:
      var value = new proto.dac.ai.ReviewSentimentDetail;
      reader.readMessage(value,proto.dac.ai.ReviewSentimentDetail.deserializeBinaryFromReader);
      msg.addDetails(value);
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
proto.dac.ai.ReviewSentimentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ReviewSentimentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ReviewSentimentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewSentimentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOverallSentiment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.dac.ai.SentimentSummary.serializeBinaryToWriter
    );
  }
  f = message.getDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.dac.ai.ReviewSentimentDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional SentimentSummary overall_sentiment = 1;
 * @return {?proto.dac.ai.SentimentSummary}
 */
proto.dac.ai.ReviewSentimentResponse.prototype.getOverallSentiment = function() {
  return /** @type{?proto.dac.ai.SentimentSummary} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.SentimentSummary, 1));
};


/**
 * @param {?proto.dac.ai.SentimentSummary|undefined} value
 * @return {!proto.dac.ai.ReviewSentimentResponse} returns this
*/
proto.dac.ai.ReviewSentimentResponse.prototype.setOverallSentiment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ReviewSentimentResponse} returns this
 */
proto.dac.ai.ReviewSentimentResponse.prototype.clearOverallSentiment = function() {
  return this.setOverallSentiment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ReviewSentimentResponse.prototype.hasOverallSentiment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ReviewSentimentDetail details = 2;
 * @return {!Array<!proto.dac.ai.ReviewSentimentDetail>}
 */
proto.dac.ai.ReviewSentimentResponse.prototype.getDetailsList = function() {
  return /** @type{!Array<!proto.dac.ai.ReviewSentimentDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ReviewSentimentDetail, 2));
};


/**
 * @param {!Array<!proto.dac.ai.ReviewSentimentDetail>} value
 * @return {!proto.dac.ai.ReviewSentimentResponse} returns this
*/
proto.dac.ai.ReviewSentimentResponse.prototype.setDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dac.ai.ReviewSentimentDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewSentimentDetail}
 */
proto.dac.ai.ReviewSentimentResponse.prototype.addDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dac.ai.ReviewSentimentDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewSentimentResponse} returns this
 */
proto.dac.ai.ReviewSentimentResponse.prototype.clearDetailsList = function() {
  return this.setDetailsList([]);
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
proto.dac.ai.SentimentSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.SentimentSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.SentimentSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SentimentSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    averageSentiment: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    dominantSentiment: jspb.Message.getFieldWithDefault(msg, 2, ""),
    positiveCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    negativeCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    neutralCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.dac.ai.SentimentSummary}
 */
proto.dac.ai.SentimentSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.SentimentSummary;
  return proto.dac.ai.SentimentSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.SentimentSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.SentimentSummary}
 */
proto.dac.ai.SentimentSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageSentiment(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDominantSentiment(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPositiveCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNegativeCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNeutralCount(value);
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
proto.dac.ai.SentimentSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.SentimentSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.SentimentSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SentimentSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAverageSentiment();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getDominantSentiment();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPositiveCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNegativeCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getNeutralCount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional double average_sentiment = 1;
 * @return {number}
 */
proto.dac.ai.SentimentSummary.prototype.getAverageSentiment = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SentimentSummary} returns this
 */
proto.dac.ai.SentimentSummary.prototype.setAverageSentiment = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string dominant_sentiment = 2;
 * @return {string}
 */
proto.dac.ai.SentimentSummary.prototype.getDominantSentiment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.SentimentSummary} returns this
 */
proto.dac.ai.SentimentSummary.prototype.setDominantSentiment = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 positive_count = 3;
 * @return {number}
 */
proto.dac.ai.SentimentSummary.prototype.getPositiveCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SentimentSummary} returns this
 */
proto.dac.ai.SentimentSummary.prototype.setPositiveCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 negative_count = 4;
 * @return {number}
 */
proto.dac.ai.SentimentSummary.prototype.getNegativeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SentimentSummary} returns this
 */
proto.dac.ai.SentimentSummary.prototype.setNegativeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 neutral_count = 5;
 * @return {number}
 */
proto.dac.ai.SentimentSummary.prototype.getNeutralCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SentimentSummary} returns this
 */
proto.dac.ai.SentimentSummary.prototype.setNeutralCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.dac.ai.ReviewSentimentDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ReviewSentimentDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ReviewSentimentDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewSentimentDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    reviewId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sentiment: (f = msg.getSentiment()) && proto.dac.ai.SentimentAnalysis.toObject(includeInstance, f)
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
 * @return {!proto.dac.ai.ReviewSentimentDetail}
 */
proto.dac.ai.ReviewSentimentDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ReviewSentimentDetail;
  return proto.dac.ai.ReviewSentimentDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ReviewSentimentDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ReviewSentimentDetail}
 */
proto.dac.ai.ReviewSentimentDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReviewId(value);
      break;
    case 2:
      var value = new proto.dac.ai.SentimentAnalysis;
      reader.readMessage(value,proto.dac.ai.SentimentAnalysis.deserializeBinaryFromReader);
      msg.setSentiment(value);
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
proto.dac.ai.ReviewSentimentDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ReviewSentimentDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ReviewSentimentDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewSentimentDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReviewId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSentiment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.ai.SentimentAnalysis.serializeBinaryToWriter
    );
  }
};


/**
 * optional string review_id = 1;
 * @return {string}
 */
proto.dac.ai.ReviewSentimentDetail.prototype.getReviewId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewSentimentDetail} returns this
 */
proto.dac.ai.ReviewSentimentDetail.prototype.setReviewId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SentimentAnalysis sentiment = 2;
 * @return {?proto.dac.ai.SentimentAnalysis}
 */
proto.dac.ai.ReviewSentimentDetail.prototype.getSentiment = function() {
  return /** @type{?proto.dac.ai.SentimentAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.SentimentAnalysis, 2));
};


/**
 * @param {?proto.dac.ai.SentimentAnalysis|undefined} value
 * @return {!proto.dac.ai.ReviewSentimentDetail} returns this
*/
proto.dac.ai.ReviewSentimentDetail.prototype.setSentiment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ReviewSentimentDetail} returns this
 */
proto.dac.ai.ReviewSentimentDetail.prototype.clearSentiment = function() {
  return this.setSentiment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ReviewSentimentDetail.prototype.hasSentiment = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ReviewSummaryRequest.repeatedFields_ = [1];



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
proto.dac.ai.ReviewSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ReviewSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ReviewSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewSummaryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reviewIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    summaryType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maxLength: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.dac.ai.ReviewSummaryRequest}
 */
proto.dac.ai.ReviewSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ReviewSummaryRequest;
  return proto.dac.ai.ReviewSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ReviewSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ReviewSummaryRequest}
 */
proto.dac.ai.ReviewSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addReviewIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummaryType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxLength(value);
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
proto.dac.ai.ReviewSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ReviewSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ReviewSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewSummaryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReviewIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getSummaryType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaxLength();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated string review_ids = 1;
 * @return {!Array<string>}
 */
proto.dac.ai.ReviewSummaryRequest.prototype.getReviewIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ReviewSummaryRequest} returns this
 */
proto.dac.ai.ReviewSummaryRequest.prototype.setReviewIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewSummaryRequest} returns this
 */
proto.dac.ai.ReviewSummaryRequest.prototype.addReviewIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewSummaryRequest} returns this
 */
proto.dac.ai.ReviewSummaryRequest.prototype.clearReviewIdsList = function() {
  return this.setReviewIdsList([]);
};


/**
 * optional string summary_type = 2;
 * @return {string}
 */
proto.dac.ai.ReviewSummaryRequest.prototype.getSummaryType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewSummaryRequest} returns this
 */
proto.dac.ai.ReviewSummaryRequest.prototype.setSummaryType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 max_length = 3;
 * @return {number}
 */
proto.dac.ai.ReviewSummaryRequest.prototype.getMaxLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ReviewSummaryRequest} returns this
 */
proto.dac.ai.ReviewSummaryRequest.prototype.setMaxLength = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ReviewSummaryResponse.repeatedFields_ = [2,3];



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
proto.dac.ai.ReviewSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ReviewSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ReviewSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    summary: jspb.Message.getFieldWithDefault(msg, 1, ""),
    keyPointsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    actionItemsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    sentimentOverview: (f = msg.getSentimentOverview()) && proto.dac.ai.SentimentSummary.toObject(includeInstance, f)
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
 * @return {!proto.dac.ai.ReviewSummaryResponse}
 */
proto.dac.ai.ReviewSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ReviewSummaryResponse;
  return proto.dac.ai.ReviewSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ReviewSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ReviewSummaryResponse}
 */
proto.dac.ai.ReviewSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummary(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeyPoints(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addActionItems(value);
      break;
    case 4:
      var value = new proto.dac.ai.SentimentSummary;
      reader.readMessage(value,proto.dac.ai.SentimentSummary.deserializeBinaryFromReader);
      msg.setSentimentOverview(value);
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
proto.dac.ai.ReviewSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ReviewSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ReviewSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ReviewSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSummary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeyPointsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getActionItemsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSentimentOverview();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dac.ai.SentimentSummary.serializeBinaryToWriter
    );
  }
};


/**
 * optional string summary = 1;
 * @return {string}
 */
proto.dac.ai.ReviewSummaryResponse.prototype.getSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ReviewSummaryResponse} returns this
 */
proto.dac.ai.ReviewSummaryResponse.prototype.setSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string key_points = 2;
 * @return {!Array<string>}
 */
proto.dac.ai.ReviewSummaryResponse.prototype.getKeyPointsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ReviewSummaryResponse} returns this
 */
proto.dac.ai.ReviewSummaryResponse.prototype.setKeyPointsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewSummaryResponse} returns this
 */
proto.dac.ai.ReviewSummaryResponse.prototype.addKeyPoints = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewSummaryResponse} returns this
 */
proto.dac.ai.ReviewSummaryResponse.prototype.clearKeyPointsList = function() {
  return this.setKeyPointsList([]);
};


/**
 * repeated string action_items = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.ReviewSummaryResponse.prototype.getActionItemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ReviewSummaryResponse} returns this
 */
proto.dac.ai.ReviewSummaryResponse.prototype.setActionItemsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ReviewSummaryResponse} returns this
 */
proto.dac.ai.ReviewSummaryResponse.prototype.addActionItems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ReviewSummaryResponse} returns this
 */
proto.dac.ai.ReviewSummaryResponse.prototype.clearActionItemsList = function() {
  return this.setActionItemsList([]);
};


/**
 * optional SentimentSummary sentiment_overview = 4;
 * @return {?proto.dac.ai.SentimentSummary}
 */
proto.dac.ai.ReviewSummaryResponse.prototype.getSentimentOverview = function() {
  return /** @type{?proto.dac.ai.SentimentSummary} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.SentimentSummary, 4));
};


/**
 * @param {?proto.dac.ai.SentimentSummary|undefined} value
 * @return {!proto.dac.ai.ReviewSummaryResponse} returns this
*/
proto.dac.ai.ReviewSummaryResponse.prototype.setSentimentOverview = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ReviewSummaryResponse} returns this
 */
proto.dac.ai.ReviewSummaryResponse.prototype.clearSentimentOverview = function() {
  return this.setSentimentOverview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ReviewSummaryResponse.prototype.hasSentimentOverview = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.LegalDocumentRequest.repeatedFields_ = [4];



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
proto.dac.ai.LegalDocumentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.LegalDocumentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.LegalDocumentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.LegalDocumentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    documentContent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    documentType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    jurisdiction: jspb.Message.getFieldWithDefault(msg, 3, ""),
    complianceFrameworksList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.dac.ai.LegalDocumentRequest}
 */
proto.dac.ai.LegalDocumentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.LegalDocumentRequest;
  return proto.dac.ai.LegalDocumentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.LegalDocumentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.LegalDocumentRequest}
 */
proto.dac.ai.LegalDocumentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentContent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setJurisdiction(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addComplianceFrameworks(value);
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
proto.dac.ai.LegalDocumentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.LegalDocumentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.LegalDocumentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.LegalDocumentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDocumentType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJurisdiction();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getComplianceFrameworksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string document_content = 1;
 * @return {string}
 */
proto.dac.ai.LegalDocumentRequest.prototype.getDocumentContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.LegalDocumentRequest} returns this
 */
proto.dac.ai.LegalDocumentRequest.prototype.setDocumentContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string document_type = 2;
 * @return {string}
 */
proto.dac.ai.LegalDocumentRequest.prototype.getDocumentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.LegalDocumentRequest} returns this
 */
proto.dac.ai.LegalDocumentRequest.prototype.setDocumentType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string jurisdiction = 3;
 * @return {string}
 */
proto.dac.ai.LegalDocumentRequest.prototype.getJurisdiction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.LegalDocumentRequest} returns this
 */
proto.dac.ai.LegalDocumentRequest.prototype.setJurisdiction = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string compliance_frameworks = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.LegalDocumentRequest.prototype.getComplianceFrameworksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.LegalDocumentRequest} returns this
 */
proto.dac.ai.LegalDocumentRequest.prototype.setComplianceFrameworksList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.LegalDocumentRequest} returns this
 */
proto.dac.ai.LegalDocumentRequest.prototype.addComplianceFrameworks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.LegalDocumentRequest} returns this
 */
proto.dac.ai.LegalDocumentRequest.prototype.clearComplianceFrameworksList = function() {
  return this.setComplianceFrameworksList([]);
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
proto.dac.ai.LegalAnalysisResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.LegalAnalysisResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.LegalAnalysisResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.LegalAnalysisResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    progressPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    result: (f = msg.getResult()) && proto.dac.ai.LegalAnalysisResult.toObject(includeInstance, f)
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
 * @return {!proto.dac.ai.LegalAnalysisResponse}
 */
proto.dac.ai.LegalAnalysisResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.LegalAnalysisResponse;
  return proto.dac.ai.LegalAnalysisResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.LegalAnalysisResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.LegalAnalysisResponse}
 */
proto.dac.ai.LegalAnalysisResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.ai.AnalysisStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProgressPercentage(value);
      break;
    case 4:
      var value = new proto.dac.ai.LegalAnalysisResult;
      reader.readMessage(value,proto.dac.ai.LegalAnalysisResult.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.dac.ai.LegalAnalysisResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.LegalAnalysisResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.LegalAnalysisResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.LegalAnalysisResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
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
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dac.ai.LegalAnalysisResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.dac.ai.LegalAnalysisResponse.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.LegalAnalysisResponse} returns this
 */
proto.dac.ai.LegalAnalysisResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AnalysisStatus status = 2;
 * @return {!proto.dac.ai.AnalysisStatus}
 */
proto.dac.ai.LegalAnalysisResponse.prototype.getStatus = function() {
  return /** @type {!proto.dac.ai.AnalysisStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.ai.AnalysisStatus} value
 * @return {!proto.dac.ai.LegalAnalysisResponse} returns this
 */
proto.dac.ai.LegalAnalysisResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double progress_percentage = 3;
 * @return {number}
 */
proto.dac.ai.LegalAnalysisResponse.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.LegalAnalysisResponse} returns this
 */
proto.dac.ai.LegalAnalysisResponse.prototype.setProgressPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional LegalAnalysisResult result = 4;
 * @return {?proto.dac.ai.LegalAnalysisResult}
 */
proto.dac.ai.LegalAnalysisResponse.prototype.getResult = function() {
  return /** @type{?proto.dac.ai.LegalAnalysisResult} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.LegalAnalysisResult, 4));
};


/**
 * @param {?proto.dac.ai.LegalAnalysisResult|undefined} value
 * @return {!proto.dac.ai.LegalAnalysisResponse} returns this
*/
proto.dac.ai.LegalAnalysisResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.LegalAnalysisResponse} returns this
 */
proto.dac.ai.LegalAnalysisResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.LegalAnalysisResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.LegalAnalysisResult.repeatedFields_ = [1,2,3];



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
proto.dac.ai.LegalAnalysisResult.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.LegalAnalysisResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.LegalAnalysisResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.LegalAnalysisResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuesList: jspb.Message.toObjectList(msg.getIssuesList(),
    proto.dac.ai.LegalIssue.toObject, includeInstance),
    complianceChecksList: jspb.Message.toObjectList(msg.getComplianceChecksList(),
    proto.dac.ai.ComplianceCheck.toObject, includeInstance),
    recommendationsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    riskScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.ai.LegalAnalysisResult}
 */
proto.dac.ai.LegalAnalysisResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.LegalAnalysisResult;
  return proto.dac.ai.LegalAnalysisResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.LegalAnalysisResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.LegalAnalysisResult}
 */
proto.dac.ai.LegalAnalysisResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.ai.LegalIssue;
      reader.readMessage(value,proto.dac.ai.LegalIssue.deserializeBinaryFromReader);
      msg.addIssues(value);
      break;
    case 2:
      var value = new proto.dac.ai.ComplianceCheck;
      reader.readMessage(value,proto.dac.ai.ComplianceCheck.deserializeBinaryFromReader);
      msg.addComplianceChecks(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecommendations(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRiskScore(value);
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
proto.dac.ai.LegalAnalysisResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.LegalAnalysisResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.LegalAnalysisResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.LegalAnalysisResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.ai.LegalIssue.serializeBinaryToWriter
    );
  }
  f = message.getComplianceChecksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.dac.ai.ComplianceCheck.serializeBinaryToWriter
    );
  }
  f = message.getRecommendationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getRiskScore();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * repeated LegalIssue issues = 1;
 * @return {!Array<!proto.dac.ai.LegalIssue>}
 */
proto.dac.ai.LegalAnalysisResult.prototype.getIssuesList = function() {
  return /** @type{!Array<!proto.dac.ai.LegalIssue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.LegalIssue, 1));
};


/**
 * @param {!Array<!proto.dac.ai.LegalIssue>} value
 * @return {!proto.dac.ai.LegalAnalysisResult} returns this
*/
proto.dac.ai.LegalAnalysisResult.prototype.setIssuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.ai.LegalIssue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.LegalIssue}
 */
proto.dac.ai.LegalAnalysisResult.prototype.addIssues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.ai.LegalIssue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.LegalAnalysisResult} returns this
 */
proto.dac.ai.LegalAnalysisResult.prototype.clearIssuesList = function() {
  return this.setIssuesList([]);
};


/**
 * repeated ComplianceCheck compliance_checks = 2;
 * @return {!Array<!proto.dac.ai.ComplianceCheck>}
 */
proto.dac.ai.LegalAnalysisResult.prototype.getComplianceChecksList = function() {
  return /** @type{!Array<!proto.dac.ai.ComplianceCheck>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ComplianceCheck, 2));
};


/**
 * @param {!Array<!proto.dac.ai.ComplianceCheck>} value
 * @return {!proto.dac.ai.LegalAnalysisResult} returns this
*/
proto.dac.ai.LegalAnalysisResult.prototype.setComplianceChecksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dac.ai.ComplianceCheck=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ComplianceCheck}
 */
proto.dac.ai.LegalAnalysisResult.prototype.addComplianceChecks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dac.ai.ComplianceCheck, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.LegalAnalysisResult} returns this
 */
proto.dac.ai.LegalAnalysisResult.prototype.clearComplianceChecksList = function() {
  return this.setComplianceChecksList([]);
};


/**
 * repeated string recommendations = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.LegalAnalysisResult.prototype.getRecommendationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.LegalAnalysisResult} returns this
 */
proto.dac.ai.LegalAnalysisResult.prototype.setRecommendationsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.LegalAnalysisResult} returns this
 */
proto.dac.ai.LegalAnalysisResult.prototype.addRecommendations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.LegalAnalysisResult} returns this
 */
proto.dac.ai.LegalAnalysisResult.prototype.clearRecommendationsList = function() {
  return this.setRecommendationsList([]);
};


/**
 * optional double risk_score = 4;
 * @return {number}
 */
proto.dac.ai.LegalAnalysisResult.prototype.getRiskScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.LegalAnalysisResult} returns this
 */
proto.dac.ai.LegalAnalysisResult.prototype.setRiskScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.LegalIssue.repeatedFields_ = [4];



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
proto.dac.ai.LegalIssue.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.LegalIssue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.LegalIssue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.LegalIssue.toObject = function(includeInstance, msg) {
  var f, obj = {
    issueType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    severity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    suggestedRemediesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.dac.ai.LegalIssue}
 */
proto.dac.ai.LegalIssue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.LegalIssue;
  return proto.dac.ai.LegalIssue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.LegalIssue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.LegalIssue}
 */
proto.dac.ai.LegalIssue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssueType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeverity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSuggestedRemedies(value);
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
proto.dac.ai.LegalIssue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.LegalIssue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.LegalIssue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.LegalIssue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssueType();
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
  f = message.getSeverity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSuggestedRemediesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string issue_type = 1;
 * @return {string}
 */
proto.dac.ai.LegalIssue.prototype.getIssueType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.LegalIssue} returns this
 */
proto.dac.ai.LegalIssue.prototype.setIssueType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.dac.ai.LegalIssue.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.LegalIssue} returns this
 */
proto.dac.ai.LegalIssue.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string severity = 3;
 * @return {string}
 */
proto.dac.ai.LegalIssue.prototype.getSeverity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.LegalIssue} returns this
 */
proto.dac.ai.LegalIssue.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string suggested_remedies = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.LegalIssue.prototype.getSuggestedRemediesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.LegalIssue} returns this
 */
proto.dac.ai.LegalIssue.prototype.setSuggestedRemediesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.LegalIssue} returns this
 */
proto.dac.ai.LegalIssue.prototype.addSuggestedRemedies = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.LegalIssue} returns this
 */
proto.dac.ai.LegalIssue.prototype.clearSuggestedRemediesList = function() {
  return this.setSuggestedRemediesList([]);
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
proto.dac.ai.ComplianceCheck.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ComplianceCheck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ComplianceCheck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ComplianceCheck.toObject = function(includeInstance, msg) {
  var f, obj = {
    framework: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requirement: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.dac.ai.ComplianceCheck}
 */
proto.dac.ai.ComplianceCheck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ComplianceCheck;
  return proto.dac.ai.ComplianceCheck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ComplianceCheck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ComplianceCheck}
 */
proto.dac.ai.ComplianceCheck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFramework(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequirement(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.ai.ComplianceStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.dac.ai.ComplianceCheck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ComplianceCheck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ComplianceCheck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ComplianceCheck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFramework();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequirement();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
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
 * optional string framework = 1;
 * @return {string}
 */
proto.dac.ai.ComplianceCheck.prototype.getFramework = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ComplianceCheck} returns this
 */
proto.dac.ai.ComplianceCheck.prototype.setFramework = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string requirement = 2;
 * @return {string}
 */
proto.dac.ai.ComplianceCheck.prototype.getRequirement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ComplianceCheck} returns this
 */
proto.dac.ai.ComplianceCheck.prototype.setRequirement = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ComplianceStatus status = 3;
 * @return {!proto.dac.ai.ComplianceStatus}
 */
proto.dac.ai.ComplianceCheck.prototype.getStatus = function() {
  return /** @type {!proto.dac.ai.ComplianceStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.ai.ComplianceStatus} value
 * @return {!proto.dac.ai.ComplianceCheck} returns this
 */
proto.dac.ai.ComplianceCheck.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string notes = 4;
 * @return {string}
 */
proto.dac.ai.ComplianceCheck.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ComplianceCheck} returns this
 */
proto.dac.ai.ComplianceCheck.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.SmartContractRequest.repeatedFields_ = [4];



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
proto.dac.ai.SmartContractRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.SmartContractRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.SmartContractRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SmartContractRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requirements: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blockchainPlatform: jspb.Message.getFieldWithDefault(msg, 3, ""),
    securityRequirementsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.dac.ai.SmartContractRequest}
 */
proto.dac.ai.SmartContractRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.SmartContractRequest;
  return proto.dac.ai.SmartContractRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.SmartContractRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.SmartContractRequest}
 */
proto.dac.ai.SmartContractRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequirements(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockchainPlatform(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecurityRequirements(value);
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
proto.dac.ai.SmartContractRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.SmartContractRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.SmartContractRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SmartContractRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequirements();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlockchainPlatform();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSecurityRequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string contract_type = 1;
 * @return {string}
 */
proto.dac.ai.SmartContractRequest.prototype.getContractType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.SmartContractRequest} returns this
 */
proto.dac.ai.SmartContractRequest.prototype.setContractType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string requirements = 2;
 * @return {string}
 */
proto.dac.ai.SmartContractRequest.prototype.getRequirements = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.SmartContractRequest} returns this
 */
proto.dac.ai.SmartContractRequest.prototype.setRequirements = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string blockchain_platform = 3;
 * @return {string}
 */
proto.dac.ai.SmartContractRequest.prototype.getBlockchainPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.SmartContractRequest} returns this
 */
proto.dac.ai.SmartContractRequest.prototype.setBlockchainPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string security_requirements = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.SmartContractRequest.prototype.getSecurityRequirementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.SmartContractRequest} returns this
 */
proto.dac.ai.SmartContractRequest.prototype.setSecurityRequirementsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.SmartContractRequest} returns this
 */
proto.dac.ai.SmartContractRequest.prototype.addSecurityRequirements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.SmartContractRequest} returns this
 */
proto.dac.ai.SmartContractRequest.prototype.clearSecurityRequirementsList = function() {
  return this.setSecurityRequirementsList([]);
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
proto.dac.ai.SmartContractResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.SmartContractResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.SmartContractResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SmartContractResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    progressPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    result: (f = msg.getResult()) && proto.dac.ai.SmartContractResult.toObject(includeInstance, f)
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
 * @return {!proto.dac.ai.SmartContractResponse}
 */
proto.dac.ai.SmartContractResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.SmartContractResponse;
  return proto.dac.ai.SmartContractResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.SmartContractResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.SmartContractResponse}
 */
proto.dac.ai.SmartContractResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {!proto.dac.ai.GenerationStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProgressPercentage(value);
      break;
    case 4:
      var value = new proto.dac.ai.SmartContractResult;
      reader.readMessage(value,proto.dac.ai.SmartContractResult.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.dac.ai.SmartContractResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.SmartContractResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.SmartContractResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SmartContractResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
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
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.dac.ai.SmartContractResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.dac.ai.SmartContractResponse.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.SmartContractResponse} returns this
 */
proto.dac.ai.SmartContractResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GenerationStatus status = 2;
 * @return {!proto.dac.ai.GenerationStatus}
 */
proto.dac.ai.SmartContractResponse.prototype.getStatus = function() {
  return /** @type {!proto.dac.ai.GenerationStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.dac.ai.GenerationStatus} value
 * @return {!proto.dac.ai.SmartContractResponse} returns this
 */
proto.dac.ai.SmartContractResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double progress_percentage = 3;
 * @return {number}
 */
proto.dac.ai.SmartContractResponse.prototype.getProgressPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SmartContractResponse} returns this
 */
proto.dac.ai.SmartContractResponse.prototype.setProgressPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional SmartContractResult result = 4;
 * @return {?proto.dac.ai.SmartContractResult}
 */
proto.dac.ai.SmartContractResponse.prototype.getResult = function() {
  return /** @type{?proto.dac.ai.SmartContractResult} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.SmartContractResult, 4));
};


/**
 * @param {?proto.dac.ai.SmartContractResult|undefined} value
 * @return {!proto.dac.ai.SmartContractResponse} returns this
*/
proto.dac.ai.SmartContractResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.SmartContractResponse} returns this
 */
proto.dac.ai.SmartContractResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.SmartContractResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.SmartContractResult.repeatedFields_ = [3,4,5];



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
proto.dac.ai.SmartContractResult.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.SmartContractResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.SmartContractResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SmartContractResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    documentation: jspb.Message.getFieldWithDefault(msg, 2, ""),
    securityConsiderationsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    deploymentInstructionsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    testCasesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.dac.ai.SmartContractResult}
 */
proto.dac.ai.SmartContractResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.SmartContractResult;
  return proto.dac.ai.SmartContractResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.SmartContractResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.SmartContractResult}
 */
proto.dac.ai.SmartContractResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecurityConsiderations(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeploymentInstructions(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTestCases(value);
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
proto.dac.ai.SmartContractResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.SmartContractResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.SmartContractResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SmartContractResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDocumentation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSecurityConsiderationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDeploymentInstructionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getTestCasesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string contract_code = 1;
 * @return {string}
 */
proto.dac.ai.SmartContractResult.prototype.getContractCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.setContractCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string documentation = 2;
 * @return {string}
 */
proto.dac.ai.SmartContractResult.prototype.getDocumentation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.setDocumentation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string security_considerations = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.SmartContractResult.prototype.getSecurityConsiderationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.setSecurityConsiderationsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.addSecurityConsiderations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.clearSecurityConsiderationsList = function() {
  return this.setSecurityConsiderationsList([]);
};


/**
 * repeated string deployment_instructions = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.SmartContractResult.prototype.getDeploymentInstructionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.setDeploymentInstructionsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.addDeploymentInstructions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.clearDeploymentInstructionsList = function() {
  return this.setDeploymentInstructionsList([]);
};


/**
 * repeated string test_cases = 5;
 * @return {!Array<string>}
 */
proto.dac.ai.SmartContractResult.prototype.getTestCasesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.setTestCasesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.addTestCases = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.SmartContractResult} returns this
 */
proto.dac.ai.SmartContractResult.prototype.clearTestCasesList = function() {
  return this.setTestCasesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ComplianceRequest.repeatedFields_ = [3,4];



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
proto.dac.ai.ComplianceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ComplianceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ComplianceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ComplianceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    jurisdiction: jspb.Message.getFieldWithDefault(msg, 2, ""),
    businessActivitiesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    regulatoryFrameworksList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.dac.ai.ComplianceRequest}
 */
proto.dac.ai.ComplianceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ComplianceRequest;
  return proto.dac.ai.ComplianceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ComplianceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ComplianceRequest}
 */
proto.dac.ai.ComplianceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJurisdiction(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addBusinessActivities(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addRegulatoryFrameworks(value);
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
proto.dac.ai.ComplianceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ComplianceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ComplianceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ComplianceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJurisdiction();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBusinessActivitiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getRegulatoryFrameworksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string entity_type = 1;
 * @return {string}
 */
proto.dac.ai.ComplianceRequest.prototype.getEntityType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ComplianceRequest} returns this
 */
proto.dac.ai.ComplianceRequest.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string jurisdiction = 2;
 * @return {string}
 */
proto.dac.ai.ComplianceRequest.prototype.getJurisdiction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ComplianceRequest} returns this
 */
proto.dac.ai.ComplianceRequest.prototype.setJurisdiction = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string business_activities = 3;
 * @return {!Array<string>}
 */
proto.dac.ai.ComplianceRequest.prototype.getBusinessActivitiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ComplianceRequest} returns this
 */
proto.dac.ai.ComplianceRequest.prototype.setBusinessActivitiesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ComplianceRequest} returns this
 */
proto.dac.ai.ComplianceRequest.prototype.addBusinessActivities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ComplianceRequest} returns this
 */
proto.dac.ai.ComplianceRequest.prototype.clearBusinessActivitiesList = function() {
  return this.setBusinessActivitiesList([]);
};


/**
 * repeated string regulatory_frameworks = 4;
 * @return {!Array<string>}
 */
proto.dac.ai.ComplianceRequest.prototype.getRegulatoryFrameworksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ComplianceRequest} returns this
 */
proto.dac.ai.ComplianceRequest.prototype.setRegulatoryFrameworksList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ComplianceRequest} returns this
 */
proto.dac.ai.ComplianceRequest.prototype.addRegulatoryFrameworks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ComplianceRequest} returns this
 */
proto.dac.ai.ComplianceRequest.prototype.clearRegulatoryFrameworksList = function() {
  return this.setRegulatoryFrameworksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ComplianceResponse.repeatedFields_ = [1,2];



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
proto.dac.ai.ComplianceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ComplianceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ComplianceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ComplianceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requirementsList: jspb.Message.toObjectList(msg.getRequirementsList(),
    proto.dac.ai.ComplianceRequirement.toObject, includeInstance),
    recommendationsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    complianceScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.dac.ai.ComplianceResponse}
 */
proto.dac.ai.ComplianceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ComplianceResponse;
  return proto.dac.ai.ComplianceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ComplianceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ComplianceResponse}
 */
proto.dac.ai.ComplianceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.ai.ComplianceRequirement;
      reader.readMessage(value,proto.dac.ai.ComplianceRequirement.deserializeBinaryFromReader);
      msg.addRequirements(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecommendations(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setComplianceScore(value);
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
proto.dac.ai.ComplianceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ComplianceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ComplianceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ComplianceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.ai.ComplianceRequirement.serializeBinaryToWriter
    );
  }
  f = message.getRecommendationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getComplianceScore();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * repeated ComplianceRequirement requirements = 1;
 * @return {!Array<!proto.dac.ai.ComplianceRequirement>}
 */
proto.dac.ai.ComplianceResponse.prototype.getRequirementsList = function() {
  return /** @type{!Array<!proto.dac.ai.ComplianceRequirement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ComplianceRequirement, 1));
};


/**
 * @param {!Array<!proto.dac.ai.ComplianceRequirement>} value
 * @return {!proto.dac.ai.ComplianceResponse} returns this
*/
proto.dac.ai.ComplianceResponse.prototype.setRequirementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.ai.ComplianceRequirement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ComplianceRequirement}
 */
proto.dac.ai.ComplianceResponse.prototype.addRequirements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.ai.ComplianceRequirement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ComplianceResponse} returns this
 */
proto.dac.ai.ComplianceResponse.prototype.clearRequirementsList = function() {
  return this.setRequirementsList([]);
};


/**
 * repeated string recommendations = 2;
 * @return {!Array<string>}
 */
proto.dac.ai.ComplianceResponse.prototype.getRecommendationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ComplianceResponse} returns this
 */
proto.dac.ai.ComplianceResponse.prototype.setRecommendationsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ComplianceResponse} returns this
 */
proto.dac.ai.ComplianceResponse.prototype.addRecommendations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ComplianceResponse} returns this
 */
proto.dac.ai.ComplianceResponse.prototype.clearRecommendationsList = function() {
  return this.setRecommendationsList([]);
};


/**
 * optional double compliance_score = 3;
 * @return {number}
 */
proto.dac.ai.ComplianceResponse.prototype.getComplianceScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ComplianceResponse} returns this
 */
proto.dac.ai.ComplianceResponse.prototype.setComplianceScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ComplianceRequirement.repeatedFields_ = [5];



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
proto.dac.ai.ComplianceRequirement.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ComplianceRequirement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ComplianceRequirement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ComplianceRequirement.toObject = function(includeInstance, msg) {
  var f, obj = {
    requirement: jspb.Message.getFieldWithDefault(msg, 1, ""),
    framework: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    actionItemsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.dac.ai.ComplianceRequirement}
 */
proto.dac.ai.ComplianceRequirement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ComplianceRequirement;
  return proto.dac.ai.ComplianceRequirement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ComplianceRequirement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ComplianceRequirement}
 */
proto.dac.ai.ComplianceRequirement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequirement(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFramework(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.ai.ComplianceStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addActionItems(value);
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
proto.dac.ai.ComplianceRequirement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ComplianceRequirement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ComplianceRequirement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ComplianceRequirement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequirement();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFramework();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getActionItemsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string requirement = 1;
 * @return {string}
 */
proto.dac.ai.ComplianceRequirement.prototype.getRequirement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ComplianceRequirement} returns this
 */
proto.dac.ai.ComplianceRequirement.prototype.setRequirement = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string framework = 2;
 * @return {string}
 */
proto.dac.ai.ComplianceRequirement.prototype.getFramework = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ComplianceRequirement} returns this
 */
proto.dac.ai.ComplianceRequirement.prototype.setFramework = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ComplianceStatus status = 3;
 * @return {!proto.dac.ai.ComplianceStatus}
 */
proto.dac.ai.ComplianceRequirement.prototype.getStatus = function() {
  return /** @type {!proto.dac.ai.ComplianceStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.ai.ComplianceStatus} value
 * @return {!proto.dac.ai.ComplianceRequirement} returns this
 */
proto.dac.ai.ComplianceRequirement.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.dac.ai.ComplianceRequirement.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ComplianceRequirement} returns this
 */
proto.dac.ai.ComplianceRequirement.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string action_items = 5;
 * @return {!Array<string>}
 */
proto.dac.ai.ComplianceRequirement.prototype.getActionItemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dac.ai.ComplianceRequirement} returns this
 */
proto.dac.ai.ComplianceRequirement.prototype.setActionItemsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ComplianceRequirement} returns this
 */
proto.dac.ai.ComplianceRequirement.prototype.addActionItems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ComplianceRequirement} returns this
 */
proto.dac.ai.ComplianceRequirement.prototype.clearActionItemsList = function() {
  return this.setActionItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ModelHealthResponse.repeatedFields_ = [1];



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
proto.dac.ai.ModelHealthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ModelHealthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ModelHealthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ModelHealthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.dac.ai.ModelStatus.toObject, includeInstance),
    systemHealth: (f = msg.getSystemHealth()) && proto.dac.ai.SystemHealth.toObject(includeInstance, f),
    lastCheck: (f = msg.getLastCheck()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.dac.ai.ModelHealthResponse}
 */
proto.dac.ai.ModelHealthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ModelHealthResponse;
  return proto.dac.ai.ModelHealthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ModelHealthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ModelHealthResponse}
 */
proto.dac.ai.ModelHealthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.dac.ai.ModelStatus;
      reader.readMessage(value,proto.dac.ai.ModelStatus.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 2:
      var value = new proto.dac.ai.SystemHealth;
      reader.readMessage(value,proto.dac.ai.SystemHealth.deserializeBinaryFromReader);
      msg.setSystemHealth(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastCheck(value);
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
proto.dac.ai.ModelHealthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ModelHealthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ModelHealthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ModelHealthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.dac.ai.ModelStatus.serializeBinaryToWriter
    );
  }
  f = message.getSystemHealth();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.dac.ai.SystemHealth.serializeBinaryToWriter
    );
  }
  f = message.getLastCheck();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ModelStatus models = 1;
 * @return {!Array<!proto.dac.ai.ModelStatus>}
 */
proto.dac.ai.ModelHealthResponse.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.dac.ai.ModelStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ModelStatus, 1));
};


/**
 * @param {!Array<!proto.dac.ai.ModelStatus>} value
 * @return {!proto.dac.ai.ModelHealthResponse} returns this
*/
proto.dac.ai.ModelHealthResponse.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dac.ai.ModelStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ModelStatus}
 */
proto.dac.ai.ModelHealthResponse.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dac.ai.ModelStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ModelHealthResponse} returns this
 */
proto.dac.ai.ModelHealthResponse.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * optional SystemHealth system_health = 2;
 * @return {?proto.dac.ai.SystemHealth}
 */
proto.dac.ai.ModelHealthResponse.prototype.getSystemHealth = function() {
  return /** @type{?proto.dac.ai.SystemHealth} */ (
    jspb.Message.getWrapperField(this, proto.dac.ai.SystemHealth, 2));
};


/**
 * @param {?proto.dac.ai.SystemHealth|undefined} value
 * @return {!proto.dac.ai.ModelHealthResponse} returns this
*/
proto.dac.ai.ModelHealthResponse.prototype.setSystemHealth = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ModelHealthResponse} returns this
 */
proto.dac.ai.ModelHealthResponse.prototype.clearSystemHealth = function() {
  return this.setSystemHealth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ModelHealthResponse.prototype.hasSystemHealth = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp last_check = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.dac.ai.ModelHealthResponse.prototype.getLastCheck = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.dac.ai.ModelHealthResponse} returns this
*/
proto.dac.ai.ModelHealthResponse.prototype.setLastCheck = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dac.ai.ModelHealthResponse} returns this
 */
proto.dac.ai.ModelHealthResponse.prototype.clearLastCheck = function() {
  return this.setLastCheck(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dac.ai.ModelHealthResponse.prototype.hasLastCheck = function() {
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
proto.dac.ai.ModelStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ModelStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ModelStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ModelStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    responseTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    errorRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    lastError: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.dac.ai.ModelStatus}
 */
proto.dac.ai.ModelStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ModelStatus;
  return proto.dac.ai.ModelStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ModelStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ModelStatus}
 */
proto.dac.ai.ModelStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {!proto.dac.ai.HealthStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setResponseTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setErrorRate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastError(value);
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
proto.dac.ai.ModelStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ModelStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ModelStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ModelStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getResponseTime();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getErrorRate();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getLastError();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string model_name = 1;
 * @return {string}
 */
proto.dac.ai.ModelStatus.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ModelStatus} returns this
 */
proto.dac.ai.ModelStatus.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.dac.ai.ModelStatus.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ModelStatus} returns this
 */
proto.dac.ai.ModelStatus.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional HealthStatus status = 3;
 * @return {!proto.dac.ai.HealthStatus}
 */
proto.dac.ai.ModelStatus.prototype.getStatus = function() {
  return /** @type {!proto.dac.ai.HealthStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.dac.ai.HealthStatus} value
 * @return {!proto.dac.ai.ModelStatus} returns this
 */
proto.dac.ai.ModelStatus.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional double response_time = 4;
 * @return {number}
 */
proto.dac.ai.ModelStatus.prototype.getResponseTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ModelStatus} returns this
 */
proto.dac.ai.ModelStatus.prototype.setResponseTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double error_rate = 5;
 * @return {number}
 */
proto.dac.ai.ModelStatus.prototype.getErrorRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ModelStatus} returns this
 */
proto.dac.ai.ModelStatus.prototype.setErrorRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string last_error = 6;
 * @return {string}
 */
proto.dac.ai.ModelStatus.prototype.getLastError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ModelStatus} returns this
 */
proto.dac.ai.ModelStatus.prototype.setLastError = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.dac.ai.SystemHealth.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.SystemHealth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.SystemHealth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SystemHealth.toObject = function(includeInstance, msg) {
  var f, obj = {
    cpuUsage: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    memoryUsage: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    diskUsage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    activeRequests: jspb.Message.getFieldWithDefault(msg, 4, 0),
    averageResponseTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.dac.ai.SystemHealth}
 */
proto.dac.ai.SystemHealth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.SystemHealth;
  return proto.dac.ai.SystemHealth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.SystemHealth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.SystemHealth}
 */
proto.dac.ai.SystemHealth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCpuUsage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMemoryUsage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDiskUsage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActiveRequests(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageResponseTime(value);
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
proto.dac.ai.SystemHealth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.SystemHealth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.SystemHealth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.SystemHealth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCpuUsage();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMemoryUsage();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getDiskUsage();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getActiveRequests();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAverageResponseTime();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional double cpu_usage = 1;
 * @return {number}
 */
proto.dac.ai.SystemHealth.prototype.getCpuUsage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SystemHealth} returns this
 */
proto.dac.ai.SystemHealth.prototype.setCpuUsage = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double memory_usage = 2;
 * @return {number}
 */
proto.dac.ai.SystemHealth.prototype.getMemoryUsage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SystemHealth} returns this
 */
proto.dac.ai.SystemHealth.prototype.setMemoryUsage = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double disk_usage = 3;
 * @return {number}
 */
proto.dac.ai.SystemHealth.prototype.getDiskUsage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SystemHealth} returns this
 */
proto.dac.ai.SystemHealth.prototype.setDiskUsage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 active_requests = 4;
 * @return {number}
 */
proto.dac.ai.SystemHealth.prototype.getActiveRequests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SystemHealth} returns this
 */
proto.dac.ai.SystemHealth.prototype.setActiveRequests = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double average_response_time = 5;
 * @return {number}
 */
proto.dac.ai.SystemHealth.prototype.getAverageResponseTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.SystemHealth} returns this
 */
proto.dac.ai.SystemHealth.prototype.setAverageResponseTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ModelConfigRequest.repeatedFields_ = [2];



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
proto.dac.ai.ModelConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ModelConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ModelConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ModelConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.dac.ai.ConfigParameter.toObject, includeInstance)
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
 * @return {!proto.dac.ai.ModelConfigRequest}
 */
proto.dac.ai.ModelConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ModelConfigRequest;
  return proto.dac.ai.ModelConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ModelConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ModelConfigRequest}
 */
proto.dac.ai.ModelConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 2:
      var value = new proto.dac.ai.ConfigParameter;
      reader.readMessage(value,proto.dac.ai.ConfigParameter.deserializeBinaryFromReader);
      msg.addParameters(value);
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
proto.dac.ai.ModelConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ModelConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ModelConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ModelConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.dac.ai.ConfigParameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string model_name = 1;
 * @return {string}
 */
proto.dac.ai.ModelConfigRequest.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ModelConfigRequest} returns this
 */
proto.dac.ai.ModelConfigRequest.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ConfigParameter parameters = 2;
 * @return {!Array<!proto.dac.ai.ConfigParameter>}
 */
proto.dac.ai.ModelConfigRequest.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.dac.ai.ConfigParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ConfigParameter, 2));
};


/**
 * @param {!Array<!proto.dac.ai.ConfigParameter>} value
 * @return {!proto.dac.ai.ModelConfigRequest} returns this
*/
proto.dac.ai.ModelConfigRequest.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dac.ai.ConfigParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ConfigParameter}
 */
proto.dac.ai.ModelConfigRequest.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dac.ai.ConfigParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ModelConfigRequest} returns this
 */
proto.dac.ai.ModelConfigRequest.prototype.clearParametersList = function() {
  return this.setParametersList([]);
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
proto.dac.ai.ConfigParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ConfigParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ConfigParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ConfigParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.dac.ai.ConfigParameter}
 */
proto.dac.ai.ConfigParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ConfigParameter;
  return proto.dac.ai.ConfigParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ConfigParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ConfigParameter}
 */
proto.dac.ai.ConfigParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
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
proto.dac.ai.ConfigParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ConfigParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ConfigParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ConfigParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.dac.ai.ConfigParameter.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ConfigParameter} returns this
 */
proto.dac.ai.ConfigParameter.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.dac.ai.ConfigParameter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ConfigParameter} returns this
 */
proto.dac.ai.ConfigParameter.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.dac.ai.ConfigParameter.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ConfigParameter} returns this
 */
proto.dac.ai.ConfigParameter.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ModelConfigResponse.repeatedFields_ = [3];



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
proto.dac.ai.ModelConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ModelConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ModelConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ModelConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    updatedParametersList: jspb.Message.toObjectList(msg.getUpdatedParametersList(),
    proto.dac.ai.ConfigParameter.toObject, includeInstance)
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
 * @return {!proto.dac.ai.ModelConfigResponse}
 */
proto.dac.ai.ModelConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ModelConfigResponse;
  return proto.dac.ai.ModelConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ModelConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ModelConfigResponse}
 */
proto.dac.ai.ModelConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.dac.ai.ConfigParameter;
      reader.readMessage(value,proto.dac.ai.ConfigParameter.deserializeBinaryFromReader);
      msg.addUpdatedParameters(value);
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
proto.dac.ai.ModelConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ModelConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ModelConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ModelConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpdatedParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.dac.ai.ConfigParameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.dac.ai.ModelConfigResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dac.ai.ModelConfigResponse} returns this
 */
proto.dac.ai.ModelConfigResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.dac.ai.ModelConfigResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ModelConfigResponse} returns this
 */
proto.dac.ai.ModelConfigResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ConfigParameter updated_parameters = 3;
 * @return {!Array<!proto.dac.ai.ConfigParameter>}
 */
proto.dac.ai.ModelConfigResponse.prototype.getUpdatedParametersList = function() {
  return /** @type{!Array<!proto.dac.ai.ConfigParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ConfigParameter, 3));
};


/**
 * @param {!Array<!proto.dac.ai.ConfigParameter>} value
 * @return {!proto.dac.ai.ModelConfigResponse} returns this
*/
proto.dac.ai.ModelConfigResponse.prototype.setUpdatedParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dac.ai.ConfigParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ConfigParameter}
 */
proto.dac.ai.ModelConfigResponse.prototype.addUpdatedParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dac.ai.ConfigParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ModelConfigResponse} returns this
 */
proto.dac.ai.ModelConfigResponse.prototype.clearUpdatedParametersList = function() {
  return this.setUpdatedParametersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dac.ai.ProcessingStatsResponse.repeatedFields_ = [5];



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
proto.dac.ai.ProcessingStatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ProcessingStatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ProcessingStatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProcessingStatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalRequests: jspb.Message.getFieldWithDefault(msg, 1, 0),
    successfulRequests: jspb.Message.getFieldWithDefault(msg, 2, 0),
    failedRequests: jspb.Message.getFieldWithDefault(msg, 3, 0),
    averageProcessingTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    serviceStatsList: jspb.Message.toObjectList(msg.getServiceStatsList(),
    proto.dac.ai.ServiceStats.toObject, includeInstance)
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
 * @return {!proto.dac.ai.ProcessingStatsResponse}
 */
proto.dac.ai.ProcessingStatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ProcessingStatsResponse;
  return proto.dac.ai.ProcessingStatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ProcessingStatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ProcessingStatsResponse}
 */
proto.dac.ai.ProcessingStatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalRequests(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSuccessfulRequests(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFailedRequests(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageProcessingTime(value);
      break;
    case 5:
      var value = new proto.dac.ai.ServiceStats;
      reader.readMessage(value,proto.dac.ai.ServiceStats.deserializeBinaryFromReader);
      msg.addServiceStats(value);
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
proto.dac.ai.ProcessingStatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ProcessingStatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ProcessingStatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ProcessingStatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalRequests();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSuccessfulRequests();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFailedRequests();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAverageProcessingTime();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getServiceStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.dac.ai.ServiceStats.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total_requests = 1;
 * @return {number}
 */
proto.dac.ai.ProcessingStatsResponse.prototype.getTotalRequests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ProcessingStatsResponse} returns this
 */
proto.dac.ai.ProcessingStatsResponse.prototype.setTotalRequests = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 successful_requests = 2;
 * @return {number}
 */
proto.dac.ai.ProcessingStatsResponse.prototype.getSuccessfulRequests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ProcessingStatsResponse} returns this
 */
proto.dac.ai.ProcessingStatsResponse.prototype.setSuccessfulRequests = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 failed_requests = 3;
 * @return {number}
 */
proto.dac.ai.ProcessingStatsResponse.prototype.getFailedRequests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ProcessingStatsResponse} returns this
 */
proto.dac.ai.ProcessingStatsResponse.prototype.setFailedRequests = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double average_processing_time = 4;
 * @return {number}
 */
proto.dac.ai.ProcessingStatsResponse.prototype.getAverageProcessingTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ProcessingStatsResponse} returns this
 */
proto.dac.ai.ProcessingStatsResponse.prototype.setAverageProcessingTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated ServiceStats service_stats = 5;
 * @return {!Array<!proto.dac.ai.ServiceStats>}
 */
proto.dac.ai.ProcessingStatsResponse.prototype.getServiceStatsList = function() {
  return /** @type{!Array<!proto.dac.ai.ServiceStats>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dac.ai.ServiceStats, 5));
};


/**
 * @param {!Array<!proto.dac.ai.ServiceStats>} value
 * @return {!proto.dac.ai.ProcessingStatsResponse} returns this
*/
proto.dac.ai.ProcessingStatsResponse.prototype.setServiceStatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.dac.ai.ServiceStats=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dac.ai.ServiceStats}
 */
proto.dac.ai.ProcessingStatsResponse.prototype.addServiceStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.dac.ai.ServiceStats, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dac.ai.ProcessingStatsResponse} returns this
 */
proto.dac.ai.ProcessingStatsResponse.prototype.clearServiceStatsList = function() {
  return this.setServiceStatsList([]);
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
proto.dac.ai.ServiceStats.prototype.toObject = function(opt_includeInstance) {
  return proto.dac.ai.ServiceStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dac.ai.ServiceStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ServiceStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    averageResponseTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    errorRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.dac.ai.ServiceStats}
 */
proto.dac.ai.ServiceStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dac.ai.ServiceStats;
  return proto.dac.ai.ServiceStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dac.ai.ServiceStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dac.ai.ServiceStats}
 */
proto.dac.ai.ServiceStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequestCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageResponseTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setErrorRate(value);
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
proto.dac.ai.ServiceStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dac.ai.ServiceStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dac.ai.ServiceStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dac.ai.ServiceStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestCount();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getErrorRate();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.dac.ai.ServiceStats.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dac.ai.ServiceStats} returns this
 */
proto.dac.ai.ServiceStats.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 request_count = 2;
 * @return {number}
 */
proto.dac.ai.ServiceStats.prototype.getRequestCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ServiceStats} returns this
 */
proto.dac.ai.ServiceStats.prototype.setRequestCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double average_response_time = 3;
 * @return {number}
 */
proto.dac.ai.ServiceStats.prototype.getAverageResponseTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ServiceStats} returns this
 */
proto.dac.ai.ServiceStats.prototype.setAverageResponseTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double error_rate = 4;
 * @return {number}
 */
proto.dac.ai.ServiceStats.prototype.getErrorRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.dac.ai.ServiceStats} returns this
 */
proto.dac.ai.ServiceStats.prototype.setErrorRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.dac.ai.ValuationMethod = {
  VALUATION_METHOD_UNSPECIFIED: 0,
  VALUATION_METHOD_COMPARATIVE: 1,
  VALUATION_METHOD_INCOME: 2,
  VALUATION_METHOD_COST: 3,
  VALUATION_METHOD_HYBRID: 4
};

/**
 * @enum {number}
 */
proto.dac.ai.ValuationStatus = {
  VALUATION_STATUS_UNSPECIFIED: 0,
  VALUATION_STATUS_PENDING: 1,
  VALUATION_STATUS_PROCESSING: 2,
  VALUATION_STATUS_COMPLETED: 3,
  VALUATION_STATUS_FAILED: 4
};

/**
 * @enum {number}
 */
proto.dac.ai.FactorType = {
  FACTOR_TYPE_UNSPECIFIED: 0,
  FACTOR_TYPE_POSITIVE: 1,
  FACTOR_TYPE_NEGATIVE: 2,
  FACTOR_TYPE_NEUTRAL: 3
};

/**
 * @enum {number}
 */
proto.dac.ai.AnalysisStatus = {
  ANALYSIS_STATUS_UNSPECIFIED: 0,
  ANALYSIS_STATUS_PENDING: 1,
  ANALYSIS_STATUS_PROCESSING: 2,
  ANALYSIS_STATUS_COMPLETED: 3,
  ANALYSIS_STATUS_FAILED: 4
};

/**
 * @enum {number}
 */
proto.dac.ai.RiskLevel = {
  RISK_LEVEL_UNSPECIFIED: 0,
  RISK_LEVEL_LOW: 1,
  RISK_LEVEL_MEDIUM: 2,
  RISK_LEVEL_HIGH: 3,
  RISK_LEVEL_CRITICAL: 4
};

/**
 * @enum {number}
 */
proto.dac.ai.ImpactLevel = {
  IMPACT_LEVEL_UNSPECIFIED: 0,
  IMPACT_LEVEL_MINIMAL: 1,
  IMPACT_LEVEL_MODERATE: 2,
  IMPACT_LEVEL_SIGNIFICANT: 3,
  IMPACT_LEVEL_MAJOR: 4
};

/**
 * @enum {number}
 */
proto.dac.ai.GenerationStatus = {
  GENERATION_STATUS_UNSPECIFIED: 0,
  GENERATION_STATUS_PENDING: 1,
  GENERATION_STATUS_GENERATING: 2,
  GENERATION_STATUS_COMPLETED: 3,
  GENERATION_STATUS_FAILED: 4
};

/**
 * @enum {number}
 */
proto.dac.ai.ComplianceStatus = {
  COMPLIANCE_STATUS_UNSPECIFIED: 0,
  COMPLIANCE_STATUS_COMPLIANT: 1,
  COMPLIANCE_STATUS_NON_COMPLIANT: 2,
  COMPLIANCE_STATUS_PARTIALLY_COMPLIANT: 3,
  COMPLIANCE_STATUS_UNDER_REVIEW: 4
};

/**
 * @enum {number}
 */
proto.dac.ai.HealthStatus = {
  HEALTH_STATUS_UNSPECIFIED: 0,
  HEALTH_STATUS_HEALTHY: 1,
  HEALTH_STATUS_DEGRADED: 2,
  HEALTH_STATUS_UNHEALTHY: 3,
  HEALTH_STATUS_OFFLINE: 4
};

goog.object.extend(exports, proto.dac.ai);
