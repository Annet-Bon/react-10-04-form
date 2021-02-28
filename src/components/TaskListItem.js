export const TaskListItem = ({ text, completed, onRemove, onUpdateTask }) => (
  	<li className="TaskList-item">
		<p className="TaskList-text">{text}</p>

		<label>Completed
			<input
			type="checkbox"
			checked={completed}
			onChange={onUpdateTask}/>
		</label>

		<section className="TaskList-actions">
			<button
				type="button"
				className="TaskList-button"
				onClick={onRemove}>
			Удалить
			</button>
		</section>
  	</li>
);