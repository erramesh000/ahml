"use client";

export default function Error({ error, reset }) {
    return (
        <div className="error-container">
            <div className="error-content">
                <h2>Something went wrong!</h2>
                <p>{error?.message || "An unexpected error occurred"}</p>
                <button
                    onClick={() => reset()}
                    className="retry-button"
                >
                    Try again
                </button>
            </div>
            <style jsx>{`
        .error-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 50vh;
          padding: 2rem;
        }
        .error-content {
          text-align: center;
          max-width: 500px;
          padding: 2rem;
          border: 1px solid #fee2e2;
          border-radius: 8px;
          background-color: #fef2f2;
        }
        h2 {
          color: #dc2626;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        p {
          color: #991b1b;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .retry-button {
          background-color: #dc2626;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.2s;
        }
        .retry-button:hover {
          background-color: #b91c1c;
        }
      `}</style>
        </div>
    );
}