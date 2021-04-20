package com.photolootapp;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import androidx.annotation.Nullable;

import com.facebook.react.ReactActivity;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "PhotoLootApp";
  }

  @Override
  public void onCreate(@Nullable Bundle savedInstanceState ) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
}
