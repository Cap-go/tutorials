# Capacitor OneSignal plugin

Currently only works on ios, but android support will be coming soon

## Setup for iOS

1. Create a new app on OneSignal and follow the instructions to set up your app for iOS

https://documentation.onesignal.com/docs/ios-sdk-setup

## BREAKING CHANGES in 2.x.x version

- Added support for Capacitor 5

## BREAKING CHANGES in 1.x.x version

- Added full support for Capacitor 3 and removed compatibility with Capacitor 2

## Required actions after upgrading to 1.1.0

This SDK update requires changes to how the SDK is imported, but this release in general should be a non breaking change.

### For Swift Package Manager

- Use product OneSignal for your app target, and product OneSignalExtension for your Notification Service Extension target.
- Then in your NotificationService class import OneSignalExtension instead of OneSignal and change references of OneSignal in method bodies to OneSignalExtension

### For Cocoapods

- In your Podfile make sure that your Notification Service Extension target is nested in your App target.
- Use pod OneSignal or OneSignalXCFramework (they are now identical) for your app target, and subspec OneSignal/OneSignalExtension or OneSignalXCFramework/OneSignalExtension for your Notification Service Extension target.
- Then in your NotificationService class import OneSignalExtension instead of OneSignal
- Lastly from the Other Linker Flags build setting in your Notification Service Extension target remove $(inherited) and -framework "OneSignal"

More: https://github.com/OneSignal/OneSignal-iOS-SDK/releases/tag/3.11.0
