import React, { useState } from "react";

const NameForm: React.FC = () => {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmittedName(name);
        setName('');
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Your Name:
                    <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {submittedName && <p>Submitted Name: {submittedName}</p>}
        </div>
    );
};

export default NameForm;