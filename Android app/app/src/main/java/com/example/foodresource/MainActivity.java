package com.example.foodresource;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    Button supplyChainHistoryButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        supplyChainHistoryButton = (Button)findViewById(R.id.supplyChainHistoryButton);

        supplyChainHistoryButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openSupplyChainHistoryActivity();
            }
        });
    }

    private void openSupplyChainHistoryActivity() {
        Intent intent = new Intent(this, SupplyChainHistory.class);
        startActivity(intent);
    }
}
