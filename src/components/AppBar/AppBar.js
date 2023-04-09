import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import css from './AppBar.module.css';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import {
  deleteAllCompleted,
  deleteAllTasks,
  deleteActiveTasks,
} from 'redux/tasksSlice';

export const AppBar = () => {
  const dispatch = useDispatch();
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Delete Tasks:</h2>
        <Button onClick={() => dispatch(deleteAllCompleted())}>
          Completed
        </Button>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Delete Tasks:</h2>
        <Button onClick={() => dispatch(deleteAllTasks())}>All tasks</Button>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Delete Tasks:</h2>
        <Button onClick={() => dispatch(deleteActiveTasks())}>
          Active tasks
        </Button>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
