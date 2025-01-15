export const Layout = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "grid",
                gridTemplateRows: "auto 1fr auto",
                gridTemplateColumns: "300px 1fr",
                gridTemplateAreas: `
                    "navbar navbar"
                    "sidebar main"
                    "sidebar footer"
                `,
            }}
        >
            <nav
                style={{
                    backgroundColor: "aqua",
                    gridArea: "navbar",
                    position: "sticky",
                    top: 0,
                }}
            >
                Navbar
            </nav>
            <aside
                style={{
                    position: "sticky",
                    height: "calc(100vh - 24px)",
                    top: "24px",
                    alignSelf: "start",
                    backgroundColor: "rgb(154, 95, 159)",
                    gridArea: "sidebar",
                }}
            >
                Sidebar
            </aside>
            <main
                style={{
                    backgroundColor: "rgb(108, 119, 119)",
                    gridArea: "main",
                }}
            >
                <h3>Home page</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
            </main>
            <footer
                style={{
                    backgroundColor: "blueviolet",
                    gridArea: "footer",
                }}
            >
                Footer
            </footer>
        </div>
    );
};
