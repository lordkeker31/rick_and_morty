import React from "react";
import Header from "../../Components/Header/Header";
import CategoryContainer from "../../Components/CategoryContainer/CategoryContainer";
import catigories from "../../data/local/catigories";
import Container from "../../Components/UI/Container/Container";

function HomePage() {
    return(
        <Container>
            <Header />
            <main>
                <CategoryContainer dataArr={catigories}/>
            </main>
        </Container>
    )
}

export default HomePage