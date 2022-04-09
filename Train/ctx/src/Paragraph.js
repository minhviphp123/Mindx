import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Paragraph = () => {

    const theme = useContext(ThemeContext);

    return (
        <>
            <p className={theme}>Từ phiên bản 16.8 trở đi, React giới thiệu thêm các hooks. Với context, React có một hook giúp người dùng có thể dễ dàng tạo ra một Context Consumer mà không cần sử dụng tới Render props như Context.Consumer thông thường. Component Login có thể được viết lại như sau:</p>
        </>
    );
}

export default Paragraph;