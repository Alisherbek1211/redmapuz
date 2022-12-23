#include <fstream>

using namespace std;

int main()
{
    ofstream out;
    out.open("res.txt");
    ifstream input;
    input.open("main.txt");
    while (!input.eof())
    {
        int a;
        input>>a;
        if (a >= 0)
        {
            out<<a<< " ";
        }
    }
    out.close(), input.close();
    return 0;
}
