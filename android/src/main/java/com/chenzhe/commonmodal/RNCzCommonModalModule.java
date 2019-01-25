
package com.chenzhe.commonmodal;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNCzCommonModalModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNCzCommonModalModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNCzCommonModal";
  }
}