const asnwerObj = {
    answers: [
        `#include <bits/stdc++.h>

            using namespace std;
            int main(){
            
                int no_of_elm ;
                cin>>no_of_elm;
                vector<int>arr(no_of_elm);
                int sum=0;

                for(int i=0;i<no_of_elm;i++){
                    cin>>arr[i];
                    sum +=arr[i];
                }
            
                cout<<sum;
                return 0;
            
            }
                `,
        `#include <bits/stdc++.h>

            using namespace std;
            int main(){
            
                int no_of_elm ;
                cin>>no_of_elm;
                vector<int>arr(no_of_elm);
                int sum=0;

                for(int i=0;i<no_of_elm;i++){
                    cin>>arr[i];
                    sum +=arr[i];
                }
            
                cout<<sum;
                return 0;
            
            }
                `
    ]
}

module.exports = asnwerObj;