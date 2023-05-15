#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "AFNetworking.h"
#import "IAC_AFHTTPSessionManager.h"
#import "IAC_AFNetworkReachabilityManager.h"
#import "IAC_AFSecurityPolicy.h"
#import "IAC_AFURLRequestSerialization.h"
#import "IAC_AFURLResponseSerialization.h"
#import "IAC_AFURLSessionManager.h"
#import "IAC_BinaryResponseSerializer.h"
#import "IAC_SDNetworkActivityIndicator.h"
#import "IAC_TextRequestSerializer.h"
#import "IAC_TextResponseSerializer.h"
#import "IonicHttp.h"
#import "SecureWebView.h"
#import "Crypto-Bridging-Header.h"
#import "IdentityVaultDevicePlugin.h"
#import "IonicNativeAuth.h"
#import "VaultPlugin.h"

FOUNDATION_EXPORT double CordovaPluginsVersionNumber;
FOUNDATION_EXPORT const unsigned char CordovaPluginsVersionString[];

