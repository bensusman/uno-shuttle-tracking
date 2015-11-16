package com.example.gpstracker;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;


public class MainActivity extends Activity 
{

	Button btnShowLocation;
	PACAB_Tracker gps;
	
    @Override
    protected void onCreate(Bundle savedInstanceState) 
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        btnShowLocation = (Button) findViewById(R.id.show_location);        
        btnShowLocation.setOnClickListener(new View.OnClickListener()
        {
			@Override
			public void onClick(View v) 
			{
				gps = new PACAB_Tracker(MainActivity.this);
				if(gps.canGetLocation())
				{
					double latitude = gps.getLatitude();
					double longitude = gps.getLongitude();
					
					Toast.makeText(getApplicationContext(),
							"Latitude = "+ latitude + "Longitude = " + longitude,Toast.LENGTH_LONG).show();
				}
				else
				{
					gps.showSettingsAlert();
				}
			}
        	
        });
    }

    
}
