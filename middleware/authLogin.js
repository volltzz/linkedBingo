export default async ({store, redirect}) => {
    if(store.state.token){
        return redirect('/login')
    }
}