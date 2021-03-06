import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { ASSETS } from '../../types/AssetRoutes';
import { IIngredientSearchValues } from '../../types/IIngredientSearchValues';
import { searchRecipe } from '../../api/recipe';

import TextField from '../textInput/TextField';

const StyledForm = styled.form`
    background: ${({ theme }) => theme.colors.yellow};
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
    display: grid;
    grid-gap: 20px;
    justify-items: center;
`;

const InputContainer = styled.div`
    display: grid;
    grid-gap: 5px;
    width: 100%;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

const StyledIcon = styled.img`
    display: block;
    cursor: pointer;
    width: 50px;
    height: 50px;
`;

const initialValues: IIngredientSearchValues = {
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
}

const validationSchema = Yup.object({
    ingredient1: Yup.string().min(3, 'Too short!!').required('Please enter at least one ingredient'),
    ingredient2: Yup.string().min(3, 'Too short!!'),
    ingredient3: Yup.string().min(3, 'Too short!!'),
    ingredient4: Yup.string().min(3, 'Too short!!'),
    ingredient5: Yup.string().min(3, 'Too short!!'),

});

const SearchForm = () => {

    const [ingredientsArr, setIngredientsArr] = useState<{ [x: string]: string; }[]>([{ ingredient1: "" }]);

    let history = useHistory();

    const addIngredient = () => {

        if(ingredientsArr.length < 5){
            const newIngredient = { [`ingredient${ingredientsArr.length + 1}`] : ""}
            setIngredientsArr(prevState => [...prevState, newIngredient])
        }

    }

    const deleteIngredient = () => {

        if(ingredientsArr.length > 1){
            let newArr = [...ingredientsArr]
            newArr.splice(-1)
            setIngredientsArr(newArr)
        }

    }

    const onSubmit = async (values: IIngredientSearchValues) => {

        const ingredientString = Object.values(values).filter(value => value !== "").join(',');

        console.log("ingredientString", ingredientString)

        try {
            const { data } = await searchRecipe(ingredientString)
            // send recipes somewhere
            console.log(data)

            // history.push('/ingredientSearch/results')

        } catch(e) {
            console.log('error in front end', e)
        }
    }

    const {
        // values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isValid,
        isSubmitting,
    } = useFormik({
        onSubmit,
        initialValues,
        validationSchema,
    });

    const touchedArr: [string, boolean][] = Object.entries(touched);
    const errorArr = Object.entries(errors);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <h2>Search Ingredients</h2>

            <InputContainer>
                {ingredientsArr.map((ingredient, i) => {

                    const touched = touchedArr[i] && !!touchedArr[i][1];
                    const error = errorArr[i] && !!errorArr[i][1];
                    const name = `ingredient${i + 1}`;

                    return (
                        <TextField
                            key={name}
                            name={name}
                            //value={ingredient[1]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched && error ? errorArr[i][1] : ""}
                        />
                    )

                })}
            </InputContainer>

            <IconContainer>
                {ingredientsArr.length < 5 && <StyledIcon src={ASSETS.ICONS.PLUS_ICON} alt="" onClick={addIngredient}/>}
                {ingredientsArr.length > 1 && <StyledIcon src={ASSETS.ICONS.MINUS_ICON} alt="" onClick={deleteIngredient}/>}
            </IconContainer>

            <button type="submit" disabled={!isValid || isSubmitting}>Search</button>

        </StyledForm>
    )
};

export default SearchForm;