import { MagnifyingGlass } from "react-loader-spinner";
import { LoaderWrapper } from "../Loader/Loader.styled";

export default function Loader() {
  return (
    <LoaderWrapper>
      <MagnifyingGlass
        height="80"
        width="80"
        radius="9"
        color="#8baa36"
        wrapperStyle={{}}
        visible={true}
      />
    </LoaderWrapper>
  );
}
