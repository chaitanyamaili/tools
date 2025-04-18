package main

import (
	"crypto/md5"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"syscall/js"
	"time"
)

func encodeBase64(this js.Value, args []js.Value) interface{} {
	input := args[0].String()
	result := base64.StdEncoding.EncodeToString([]byte(input))
	return js.ValueOf(result)
}

func hashSHA256(this js.Value, args []js.Value) interface{} {
	input := args[0].String()
	sum := sha256.Sum256([]byte(input))
	return js.ValueOf(fmt.Sprintf("%x", sum))
}

func hashMD5(this js.Value, args []js.Value) interface{} {
	input := args[0].String()
	sum := md5.Sum([]byte(input))
	return js.ValueOf(fmt.Sprintf("%x", sum))
}

func convertEpoch(this js.Value, args []js.Value) interface{} {
	epoch := int64(args[0].Int())
	t := time.Unix(epoch, 0)
	return js.ValueOf(t.Format("2006-01-02 15:04:05 MST"))
}

func convertTimezone(this js.Value, args []js.Value) interface{} {
	dateStr := args[0].String()
	fromTZ := args[1].String()
	toTZ := args[2].String()

	from, _ := time.LoadLocation(fromTZ)
	to, _ := time.LoadLocation(toTZ)

	t, _ := time.ParseInLocation("2006-01-02 15:04", dateStr, from)
	return js.ValueOf(t.In(to).Format("2006-01-02 15:04 MST"))
}

func registerCallbacks() {
	js.Global().Set("encodeBase64", js.FuncOf(encodeBase64))
	js.Global().Set("hashSHA256", js.FuncOf(hashSHA256))
	js.Global().Set("hashMD5", js.FuncOf(hashMD5))
	js.Global().Set("convertEpoch", js.FuncOf(convertEpoch))
	js.Global().Set("convertTimezone", js.FuncOf(convertTimezone))
}

func main() {
	// Register the callbacks
	// and keep the program running
	// until the user closes the browser
	// or the program is terminated.
	c := make(chan struct{})
	registerCallbacks()
	<-c
}
