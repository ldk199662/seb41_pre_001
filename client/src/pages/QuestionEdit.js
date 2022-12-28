import Sidebar from '../components/Sidebar';
import { MainWithSidebarContainer } from '../styles/StyledStore';

/**
 * # QuestionEdit
 *
 * ## init
 *
 * @KimTank
 *
 * ## modified
 *
 * @TODO
 *
 * ## description
 *
 * 질문 수정
 *
 * @returns QuestionEdit
 */
function QuestionEdit() {
  return (
    <>
      {/* Sidebar 없으면 지우면됨 */}
      <MainWithSidebarContainer>
        <div>질문 수정</div>
        <Sidebar />
      </MainWithSidebarContainer>
    </>
  );
}

export default QuestionEdit;
