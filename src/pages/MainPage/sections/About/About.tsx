import * as Styles from "./About.styles.ts";
import {NAVIGATION_ABOUT} from "../../constants/navigation.ts";

import logoWAC from "../../../../assets/img/logoAbout.png";
import {TitleSection} from "../../../../ui/TitleSection";
import {Box} from "../../../../ui/Box";
import {useMediaQuery} from "react-responsive";
import {ListAbout} from "../../../../components/ListAbout";

import formatMatch from "../../../../assets/icons/formatMatch.png";
import formatOrg from "../../../../assets/icons/formatOrg.png";
import pickHero from "../../../../assets/icons/selectHero.png";
import line from "../../../../assets/icons/line.png";
import {ClockIcon, PlayIcon, RegisterIcon, ShuffleIcon} from "../../../../ui/Icons";
import {useQuery} from "@tanstack/react-query";
import {getDescription, getDescriptionLinks} from "../../../../services/settings.service.ts";

export const About = () => {
    const {data: description} = useQuery({
        queryKey: ["description"],
        queryFn: getDescription,
        refetchOnWindowFocus: false,
    });

    const {data: descriptionLinks} = useQuery({
        queryKey: ["description_links"],
        queryFn: getDescriptionLinks,
        refetchOnWindowFocus: false,
    });

    const isMobile = useMediaQuery({maxWidth: 700});

    const displayHowPlay = () => {
        if (isMobile) {
            return <>
                <Styles.HowPlayMobileBlock>
                    <RegisterIcon/>
                    <Styles.HowPlayTitle>Зарегистрируйся</Styles.HowPlayTitle>
                </Styles.HowPlayMobileBlock>
                <Styles.HowPlayMobileBlock>
                    <ClockIcon/>
                    <Styles.HowPlayTitle>Дождись распределение</Styles.HowPlayTitle>
                </Styles.HowPlayMobileBlock>
                <Styles.HowPlayMobileBlock>
                    <ShuffleIcon/>
                    <Styles.HowPlayTitle>Получи героя в драфте</Styles.HowPlayTitle>
                </Styles.HowPlayMobileBlock>
                <Styles.HowPlayMobileBlock>
                    <PlayIcon/>
                    <Styles.HowPlayTitle>Играй на стриме</Styles.HowPlayTitle>
                </Styles.HowPlayMobileBlock>
            </>;
        }

        return <>
            <Styles.HowPlayIconsBlock>
                <RegisterIcon/>
                <Styles.HowPlayLine src={line}/>
                <ClockIcon/>
                <Styles.HowPlayLine src={line}/>
                <ShuffleIcon/>
                <Styles.HowPlayLine src={line}/>
                <PlayIcon/>
            </Styles.HowPlayIconsBlock>
            <Styles.HowPlayTitleBlock>
                <Styles.HowPlayTitle>Зарегистрируйся</Styles.HowPlayTitle>
                <Styles.HowPlayTitle>Дождись распределение</Styles.HowPlayTitle>
                <Styles.HowPlayTitle>Получи героя в драфте</Styles.HowPlayTitle>
                <Styles.HowPlayTitle>Играй на стриме</Styles.HowPlayTitle>
            </Styles.HowPlayTitleBlock>
        </>;
    };

    return (
        <Styles.About id={NAVIGATION_ABOUT}>
            <Styles.Content>
                <Styles.AboutBlock>
                    <Styles.LogoAbout src={logoWAC}/>
                    <Styles.AboutBlockContent>
                        <TitleSection>О турнире</TitleSection>
                        <Styles.AboutDescription>
                            {description?.text}
                        </Styles.AboutDescription>
                        {descriptionLinks &&
                            <Box width={isMobile ? 340 : 370} height={38 * descriptionLinks.length} padding={16}>
                                <ListAbout data={descriptionLinks}/>
                            </Box>
                        }
                    </Styles.AboutBlockContent>
                </Styles.AboutBlock>

                <Styles.RulesBlocks>
                    <TitleSection>Правила</TitleSection>
                    <Styles.SpaceBetween>
                        <Styles.RuleItem>
                            <Styles.RuleTitleBlock>
                                <Styles.RuleIcon src={formatMatch}/>
                                Формат матчей
                            </Styles.RuleTitleBlock>
                            <Box width={isMobile ? 320 : 456}>
                                <Styles.RuleText>
                                    <Styles.RuleTextItem><Styles.RuleElementSelection>Карта:</Styles.RuleElementSelection> Все
                                        матчи проводятся на карте ARAM.</Styles.RuleTextItem>

                                    <Styles.RuleTextItem><Styles.RuleElementSelection>До
                                        финала:</Styles.RuleElementSelection> все игры проходят в формате BO3 (до 2
                                        побед).</Styles.RuleTextItem>

                                    <Styles.RuleTextItem><Styles.RuleElementSelection>Финал
                                        турнира:</Styles.RuleElementSelection> проходит в формате BO5 (до 3
                                        побед).</Styles.RuleTextItem>
                                </Styles.RuleText>
                            </Box>
                        </Styles.RuleItem>

                        <Styles.RuleItem>
                            <Styles.RuleTitleBlock>
                                <Styles.RuleIcon src={formatOrg}/>
                                Формат и организация
                            </Styles.RuleTitleBlock>
                            <Box width={isMobile ? 320 : 456}>
                                <Styles.RuleText>
                                    <Styles.RuleTextItem><Styles.RuleElementSelection>Капитаны
                                        —</Styles.RuleElementSelection> приглашённые стримеры, руководящие командами и
                                        стратегией.</Styles.RuleTextItem>

                                    <Styles.RuleTextItem><Styles.RuleElementSelection>Игроки регистрируются
                                        индивидуально</Styles.RuleElementSelection>, затем случайно распределяются по
                                        командам в прямой трансляции.</Styles.RuleTextItem>

                                    <Styles.RuleTextItem><Styles.RuleElementSelection>Состав
                                        команды:</Styles.RuleElementSelection> 5 основных + 2 запасных
                                        игрока.</Styles.RuleTextItem>
                                </Styles.RuleText>
                            </Box>
                        </Styles.RuleItem>
                    </Styles.SpaceBetween>

                    <Styles.Center>
                        <Styles.RuleItem>
                            <Styles.RuleTitleBlock>
                                <Styles.RuleIcon src={pickHero}/>
                                Выбор героев
                            </Styles.RuleTitleBlock>
                            <Box height={240} width={isMobile ? 320 : 456}>
                                <Styles.RuleText>
                                    <Styles.RuleTextItem>Составы героев для каждой команды определяются путем случайного
                                        выбора (рандома).</Styles.RuleTextItem>

                                    <Styles.RuleTextItem><Styles.RuleElementSelection>Каждая команда имеет право на 1
                                        перезапуск лобби</Styles.RuleElementSelection>, если драфт оказался крайне
                                        неудачным.</Styles.RuleTextItem>

                                    <Styles.RuleTextItem>Решение о перезапуске принимает <Styles.RuleElementSelection>капитан
                                        команды</Styles.RuleElementSelection></Styles.RuleTextItem>

                                    <Styles.RuleTextItem>Перезапуск осуществляется <Styles.RuleElementSelection>по
                                        согласованию с судьёй</Styles.RuleElementSelection>, закреплённым за
                                        матчем.</Styles.RuleTextItem>
                                </Styles.RuleText>
                            </Box>
                        </Styles.RuleItem>
                    </Styles.Center>
                </Styles.RulesBlocks>

                <Styles.HowPlayBlock>
                    <TitleSection>Как участвовать</TitleSection>
                    {displayHowPlay()}
                </Styles.HowPlayBlock>
            </Styles.Content>
        </Styles.About>
    );
};