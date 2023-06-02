import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { RestCard } from "../RestCard/RestCard.styled";
import { Table } from "./RestaurantsCard.styled";
import { getLimitedRecipes } from "../../redux/commonRecipes/commonSelectors";
import { getLimitedRecipesByCategory } from "../../redux/commonRecipes/commonOperations";

const CategoriesCard = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const limitedRecipes = useSelector(getLimitedRecipes);
  const isPending = useSelector(
    (state) => state.outerRecipes.isCategoryFetching
  );

  useEffect(() => {
    const params = { category: categoryName, limit: 8 };
    dispatch(getLimitedRecipesByCategory(params));
  }, [dispatch, categoryName]);

  return isPending ? (
    <Loader />
  ) : limitedRecipes.length > 0 ? (
    <Table>
      {limitedRecipes
        ? limitedRecipes
            .slice(0, 8)
            .map(({ description, preview, title, _id }) => (
              <RestCard
                key={_id}
                id={_id}
                image={preview}
                altText={description}
                text={title}
              />
            ))
        : null}
    </Table>
  ) : (
    <p>No results</p>
  );
};

export default CategoriesCard;
