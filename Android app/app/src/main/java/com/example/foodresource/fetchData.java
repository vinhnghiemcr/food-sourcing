package com.example.foodresource;

import android.os.AsyncTask;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class fetchData extends AsyncTask<Void,Void,Void> {
    String data = "";
    String dataParsed = "";
    String singleParsed = "";
    String item = SupplyChainHistory.item.getText().toString().toLowerCase();
    String location = SupplyChainHistory.location.getSelectedItem().toString();
    String urlString = "";

    @Override
    protected Void doInBackground(Void... voids) {

        try {
            location = location.replace(" ", "%20");
            urlString = "https://food-sourcing.herokuapp.com/sc/pname?v=" + item + "&loc=" + location;
            System.out.println(urlString);

            URL url = new URL(urlString);
            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
            InputStream inputStream = httpURLConnection.getInputStream();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
             String line = "";



             while(line != null){
                 line = bufferedReader.readLine();
                 data = data + line;
             }

                 JSONObject JO = new JSONObject(data);
                JSONArray JA =  JO.getJSONArray("chain");
            System.out.printf(JA.toString());
            System.out.println(JA.length());
            dataParsed = "Name: " +  JO.get("name") + "\n" +
                         "Origin: " +  JO.get("origin") + "\n" +
                            "Price: " + JO.get("price") + "\n" +"\n";

                 for(int i=0; i< JA.length(); i++){



                     JSONObject JO1 = new JSONObject(JA.get(i).toString());

                     String[] stringArray = JO1.get("date").toString().split("T");


                     singleParsed ="Date: " + stringArray[0] + "\n" + "Time: " + stringArray[1].substring(0,8) +  "\n" +"Location: " + JO1.get("location") + "\n" ;
                     dataParsed = dataParsed + singleParsed + "\n";
                 }

                // dataParsed = dataParsed + singleParsed + "\n";


        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }catch (JSONException e){
            e.printStackTrace();
        }

        return null;
    }

    @Override
    protected void onPostExecute(Void aVoid) {
        super.onPostExecute(aVoid);
        SupplyChainHistory.data.setText(this.dataParsed);
    }
}
