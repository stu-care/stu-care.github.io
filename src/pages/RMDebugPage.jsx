import React from "react";
import { useApp } from "../contexts/AppContext";

const RMDebugPage = () => {
    const { version } = useApp();
    return (
        <main className="grid grid-flow-row auto-rows-auto p-4 gap-4">
            <div className="flex justify-between items-baseline">
                <h1>Version</h1>
                <p className="text-sm">v{version}</p>
            </div>
            <hr />
            <div>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque qui minus dolores dolorum, quae, ipsum impedit
                    corrupti cupiditate labore sit quisquam laudantium nemo
                    vitae facere laboriosam accusamus! Sunt, quo qui.
                </p>
            </div>
        </main>
    );
};

export default RMDebugPage;
