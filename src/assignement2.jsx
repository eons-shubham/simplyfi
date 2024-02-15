/*



code in c++

#include<bits/stdc++.h>
using namespace std;

signed main(){
    ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);
    
    string str = "Paris-Skopje Zurich-Amsterdam Prague-Zurich Barcelona-Berlin Kiev-Prague Skopje-Paris Amsterdam-Barcelona Berlin-Kiev Berlin-Amsterdam";
    vector<pair<string, string>> cityPairs;
    stringstream ss(str);
    string cityPair;
    while (getline(ss, cityPair, ' ')) {
        stringstream ssPair(cityPair);
        string city1, city2;
        getline(ssPair, city1, '-');
        getline(ssPair, city2, '-');
        cityPairs.push_back({city1, city2});
    }

    map<string, vector<string>> mp;
    for(auto it: cityPairs){
        mp[it.first].push_back(it.second);
    }   
    
    map<string, int> vis;

    function<void(string)> dfs = [&](string city){
        vis[city] = 1;
        cout << city << "-> ";
        for(auto it: mp[city]){
            if(vis[it]) continue;
            dfs(it);
        }
    };

    dfs("Kiev");


}



*/
