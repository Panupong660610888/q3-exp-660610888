import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={<Button variant="secondary">Panupong Wang-Gae</Button>}
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-lg">ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="size-full rounded-2xl bg-muted">
            <img
              src="profile.jpg "
              className="size-m rounded-2xl bg-muted"
              width="500"
              height="500"
            />
            <div className="text-lg flex flex-wrap gap-2 m-2">
              {" "}
              Panupong Wang-Gae
            </div>
            <DrawerDescription className="medium flex flex-wrap gap-2 m-2">
              นักศึกษามหาวิทยาลัยเชียงใหม่ คณะวิศวกรรมศาสตร์
              สาขาวิศวกรรมคอมพิวเตอร์
            </DrawerDescription>

            <div className="flex flex-wrap gap-2 m-2">
              <Badge>Hobbies</Badge> ดูหนัง, เล่นเกม, ฟังเพลง
            </div>
            <div className="flex flex-wrap gap-2 m-2">
              <Badge>Email</Badge> panupong_wang@cmu.ac.th
            </div>
            <div className="flex flex-wrap gap-2 m-2">
              <Badge>Social</Badge> https://www.facebook.com/getarpan/
            </div>
          </div>
        </div>
        <DrawerFooter>
          <div className="text-lg flex flex-wrap gap-2 m-2">
            รหัสนักศึกษา: 660610888
          </div>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
