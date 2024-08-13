import { useEffect, useState } from "react";
import { useApp } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";

const EntryPage = () => {
    const navigate = useNavigate();

    const {
        display: { setDisplay },
    } = useApp();

    const [user, setUser, clearUser] = useLocalStorage("app.user", {
        email: null,
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        setDisplay({ showHeader: false, showFooter: false });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get("email");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            setError("Invalid email or password.");
            return;
        }

        const newUser = { email };
        setUser(newUser);

        navigate("/home");
    };

    return (
        <main className="p-4 h-full w-full flex items-center justify-center select-none">
            <div className="w-full">
                {user.email ? (
                    <div className="grid grid-flow-row gap-2 mx-auto auto-rows-auto text-center">
                        <div className="mb-4">
                            <h2>Welcome back, </h2>
                            <div>
                                <span className="font-semibold">
                                    {user.email}
                                </span>
                                !
                            </div>
                        </div>
                        <Link to="/home" className="btn btn-primary">
                            Continue
                        </Link>
                        <div>or</div>
                        <button
                            className="btn btn-neutral"
                            onClick={() => clearUser()}
                        >
                            Change User
                        </button>
                    </div>
                ) : (
                    <form
                        className="grid grid-flow-row gap-4 auto-rows-auto"
                        onSubmit={handleSubmit}
                    >
                        <h2>Login</h2>
                        <input
                            type="text"
                            name="email"
                            placeholder="user@domain.tld"
                            className="input w-full focus-within:input-primary border-l-4 text-base-content border-l-base-300 focus-within:border-l-primary"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input w-full focus-within:input-primary border-l-4 text-base-content border-l-base-300 focus-within:border-l-primary"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-primary"
                        />
                        {error && (
                            <div
                                role="alert"
                                className="text-error flex flex-row gap-2 items-center border-l-4 border-l-error p-2 bg-error/10 leading-none"
                            >
                                <FontAwesomeIcon
                                    icon={
                                        byPrefixAndName.fas[
                                            "exclamation-circle"
                                        ]
                                    }
                                />
                                <span className="grow">{error}</span>
                            </div>
                        )}
                        <Link
                            to="/"
                            className="btn btn-link link-secondary dark:link-neutral btn-xs justify-self-start"
                        >
                            <FontAwesomeIcon
                                icon={byPrefixAndName.fas["arrow-left"]}
                            />{" "}
                            Back
                        </Link>
                    </form>
                )}
            </div>
        </main>
    );
};

export default EntryPage;
