export default function NastedLayout({ children, layoutProps }) {
    console.log({ layoutProps });
    return (
        <>
            <div>Nest!!</div>
            <main>{children}</main>
            <div>Nest!!</div>
        </>
    );
}
