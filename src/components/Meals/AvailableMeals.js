import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 15.99,
    },
    {
        id: 'm2',
        name: 'Pizza Capricciosa',
        description: 'This pizza is topped with olives, artichoke hearts, half of a boiled egg, prosciutto and mushrooms.',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Hobotnica na novaljski',
        description: 'Hobotnica na novaljski is a traditional Croatian dish originating from Novalja on the island of Pag',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Polvo à Lagareiro',
        description: 'This classic Portuguese dish is made in the style of Lagareiro, hence the name.',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />);
    return <>
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>

        </section>
    </>
};

export default AvailableMeals;