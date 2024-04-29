import { useEffect } from "react";
import { useState } from "react";
import { getMembers } from "../services/member.services";

export const useDataMember = () => {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    getMembers((data) => {
      setMemberList(data);
    });
  }, []);

  return { memberList };
};
