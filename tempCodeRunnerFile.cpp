#include <fstream>

using namespace std;

int main()
{
    ofstream out;
    out.open("res.txt");
    ifstream input;
    input.open("main.txt");
    while (!input.eof())