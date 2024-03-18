export default function BookCard({children, data}) {
    return (
        <>
            <div>
                <p>{data.pages}</p>
                <p>{data.publisher}</p>
                {children}
                <p>{data.isbn}</p>
            </div>
        </>
    );
};