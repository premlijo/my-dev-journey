const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}

export function Clock({ color, time }) {
    return (
      <h1 style={{ color: color }}>
        {time}
      </h1>
    );
  }
  