import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const mensagem = "Bem vindo ao aluratube!";
  const estilosDaHomePage = { };

  return (
    <>
    <CSSReset />
      <div style={estilosDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>conteudo</Timeline>
      </div>
    </>
  );
}

export default HomePage;


const StyleHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyleHeader>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyleHeader>
  );
}

function Timeline(propriedades) {
  console.log("Dentro do componente", propriedades.playlists);
  const playlistsNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistsName) => {
        const videos = propriedades.playlists[playlistsName];
        console.log(playlistsName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistsName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
