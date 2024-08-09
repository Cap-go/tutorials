# Capacitor Sms Retriever

Under development plugin for retriving SMS without the need of any permission. Suitable for OTP

CURRENTLY FOR ANDROID ONLY

`npm install @skmd87/capacitor-sms-retriever`

## Usage 
```
import { CapacitorSmsRetriever, } from "@skmd87/capacitor-sms-retriever";
.
.
.

CapacitorSmsRetriever.startListening().then((res:any) => {
		console.log("SMS Content", res.body);
	}).catch((err:any) => {
		console.log("Failed", err);
	});
