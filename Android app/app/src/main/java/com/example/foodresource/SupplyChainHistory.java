package com.example.foodresource;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;

public class SupplyChainHistory extends AppCompatActivity {

    public static Spinner location;
    public static TextView data;
    Button search;
    public static EditText item;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_supply_chain_history);
        location = (Spinner) findViewById(R.id.locationSpinner);
        search = (Button) findViewById(R.id.searchButton);
        data = (TextView)findViewById(R.id.data);
        item = (EditText)findViewById(R.id.itemEditText);

        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this, R.array.options_array,android.R.layout.simple_dropdown_item_1line);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        location.setAdapter(adapter);

        search.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                fetchData supplyChainHistory = new fetchData();
                supplyChainHistory.execute();
            }
        });
    }
}
