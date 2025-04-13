# Capacitor Sms Retriever

This is a clone of @skmd87/capacitor-sms-retriever but with ios Support
supports capacitor 6.
Under development plugin for retriving SMS without the need of any permission. Suitable for OTP



`npm install @aalzehla/capacitor-sms-retriever`

## Usage 
```
import { CapacitorSmsRetriever, } from "@aalzehla/capacitor-sms-retriever";
.
.
.
//For Android
CapacitorSmsRetriever.startListening().then((res:any) => {
		console.log("SMS Content", res.body);
	}).catch((err:any) => {
		console.log("Failed", err);
	});

// For iOS
CapacitorSmsRetriever.present().then((code:string) => {
		console.log("OTP", code);
	}).catch((err:any) => {
		console.log("Failed", err);
	});