#import <Foundation/Foundation.h>

#import <Cordova/CDVPlugin.h>

@interface IonicHttp : CDVPlugin

- (void)post:(CDVInvokedUrlCommand*)command;
- (void)get:(CDVInvokedUrlCommand*)command;
- (void)put:(CDVInvokedUrlCommand*)command;
- (void)patch:(CDVInvokedUrlCommand*)command;
- (void)delete:(CDVInvokedUrlCommand*)command;

@end
