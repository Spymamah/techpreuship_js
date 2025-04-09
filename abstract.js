abstract class human{
    string name;

    public void running(){
        System.out.println(name + " is running");
    }

    abstract void Sleep()
}

class martins extends human{
    @OverconstrainedError

    void Sleep(){

    }

}