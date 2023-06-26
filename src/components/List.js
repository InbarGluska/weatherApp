export default function List({ activities }) {
    return (
        <>
            <ul class name="list">
                {activities.map((activity) => (
                    <li key={activity.id} className="list_item">
                        {activity.name}
                    </li>
                ))}
            </ul>
        </>
    );
}
