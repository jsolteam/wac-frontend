import * as Styles from "./Teams.styles.ts";
import {TitleSection} from "../../../../ui/TitleSection";
import {Box} from "../../../../ui/Box";
import type {Team} from "../../../../models/team.model.ts";

interface TeamsProps {
    teams?: Team[] | null;
}

export const Teams = ({teams}: TeamsProps) => {
    return (
        <Styles.Teams>
            <Styles.Content>
                <TitleSection>Команды</TitleSection>
                {teams?.map((team, index) => (
                    <Styles.TeamBlock key={index}>
                        <Styles.TeamTitle>
                            Команда:
                            <Styles.TeamName>{team.name}</Styles.TeamName>
                        </Styles.TeamTitle>

                        <Styles.TeamContent>
                            <Styles.LeftBlock>
                                <Box width={238} height={238}>
                                    <Styles.TeamLogoBox>
                                        <Styles.TeamLogo src={team.avatar} />
                                    </Styles.TeamLogoBox>
                                </Box>

                                <Styles.CaptainBlock>
                                    <Styles.CaptainHeader>Капитан</Styles.CaptainHeader>
                                    <Styles.CaptainBox>
                                        <Styles.CaptainPhoto src={team.captain.captain_photo} />
                                        <Styles.CaptainName>{team.captain.name}</Styles.CaptainName>
                                        <Box width={356} height={198} />
                                    </Styles.CaptainBox>
                                </Styles.CaptainBlock>
                            </Styles.LeftBlock>
                            <Styles.RightBlock>
                                <Styles.MembersBlock>
                                    {team.captain.name !== "DemLoveSky" && <Styles.MemberBlock>
                                        <Styles.MemberAvatar src={team.captain.avatar} />
                                        <Box width={190} height={40} padding={0} borderRadius={1}>
                                            <Styles.MemberName>{team.captain.name}</Styles.MemberName>
                                        </Box>
                                    </Styles.MemberBlock>}
                                    {team.members.map((member, index) => (
                                        <Styles.MemberBlock key={index}>
                                            <Styles.MemberAvatar src={member.avatar} />
                                            <Box width={190} height={40} padding={0} borderRadius={1}>
                                                <Styles.MemberName>{member.name}</Styles.MemberName>
                                            </Box>
                                        </Styles.MemberBlock>
                                    ))}
                                </Styles.MembersBlock>

                                <Styles.SubstituteBlock>
                                    <Styles.SubstituteHeader>Запасные</Styles.SubstituteHeader>
                                    <Styles.MembersBlock>
                                        {team.substitute.map((member, index) => (
                                            <Styles.MemberBlock key={index}>
                                                <Styles.MemberAvatar src={member.avatar} />
                                                <Box width={190} height={40} padding={0} borderRadius={1}>
                                                    <Styles.MemberName>{member.name}</Styles.MemberName>
                                                </Box>
                                            </Styles.MemberBlock>
                                        ))}
                                    </Styles.MembersBlock>
                                </Styles.SubstituteBlock>
                            </Styles.RightBlock>
                        </Styles.TeamContent>
                        <Styles.Line />
                    </Styles.TeamBlock>
                ))}
            </Styles.Content>
        </Styles.Teams>
    );
};