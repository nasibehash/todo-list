import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

import {useTodoStore} from "../store/TodoStore";

import styles from './TodoForm.module.scss';
import Button from "./Button";

const schema = z.object({
    title: z
        .string()
        .min(1, 'عنوان نباید خالی باشد')
        .regex(/^[؀-ۿ\s]+$/, 'فقط حروف فارسی مجاز هستند'),
});

type FormData = z.infer<typeof schema>;

export default function TodoForm() {
    const addTodo = useTodoStore((state) => state.addTodo);
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data: FormData) => {
        addTodo(data.title);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles['todo-form']}>
            <div className={styles['todo-form-text']}>
                <input type="text" placeholder="عنوان وظیفه" {...register('title')} />
                <Button type="submit">افزودن</Button>
            </div>
            {errors.title && <p className={styles.error}>{errors.title.message}</p>}
        </form>
    );
};