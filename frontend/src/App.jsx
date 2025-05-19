import { useEffect, useState } from "react";

function App() {
    const [hello, setHello] = useState("");
    const [user, setUser] = useState("");
    const [test, setTest] = useState("");
    const [racine, setRacine] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${API_URL}/api/hello`);
                const data = await res.json();
                //console.log("*** TEST /api/hello data :", data);
                setHello(data.hello);
            } catch (error) {
                console.error("Erreur lors de la requête Hello :", error);
                setHello("🛑 Erreur api/hello");
            }
        };

        fetchData();

        const fetchUser = async () => {
            try {
                const res = await fetch(`${API_URL}/api/user`);
                const data = await res.json();
                //console.log("*** TEST /api/user data :", data);
                setUser(data);
            } catch (error) {
                console.error("Erreur lors de la requête user :", error);
                setUser("🛑Erreur api/user");
            }
        };

        fetchUser();

        const fetchTest = async () => {
            try {
                const res = await fetch(`${API_URL}/api/test`);
                const data = await res.json();
                console.log("*** TEST /api/test data :", data);
                setTest(data.test);
            } catch (error) {
                console.error("Erreur lors de la requête Test :", error);
                setTest("🛑 Erreur api/test");
            }
        };

        const fetchRacine = async () => {
            try {
                const res = await fetch(`${API_URL}/`);
                const data = await res.json();
                console.log("*** TEST racine /:", data);
                setRacine(data.test);
            } catch (error) {
                console.error("Erreur lors de la requête Racine :", error);
                setTest("🛑 Erreur /");
            }
        };

        fetchRacine();
    }, []);

    if (!user) return <p>Chargement...</p>;

    return (
        <>
            <h1>Test O2switch Frontend Backend</h1>
            <div>
                <p>{hello || "En attente api/hello ..."}</p>
                <div>
                    <p>✅ Utilisateur</p>
                    {user.error ? (
                        <p>{user.error}</p>
                    ) : (
                        <>
                            <p>Nom : {user.name}</p>
                            <p>Email : {user.email}</p>
                        </>
                    )}
                </div>
                <p>{test || "En attente api/test ..."}</p>
            </div>
        </>
    );
}

export default App;
