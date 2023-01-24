import styled from "styled-components";
export const Style = styled.div `
.movie-list{
    display:flex;
    justifty-content:flex-start;
    flex-wrap:wrap;
    gap:10px;
        li{
            list-style:none;
                .poster{
                    width:350px;
                    height:auto;
                }
                .picture{
                    display:flex;
                    gap:5px;
                .mini-pic{
                        width:150px;
                        height:100px;
                    }
                }
        }
}
`;
