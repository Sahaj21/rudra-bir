#include<bits/stdc++.h>
using namespace std;
int main{

	int t;
	cin>>t;
	while(t--)
	{
		int n;
		long int A[n],sum=0;
		for (int i = 0; i < n; ++i)
		{
			cin>>A[i];
			sum+=A[i];
		}
		cout<<sum-n+1<<"\n";
	}
	return 0;
}